let S3Client, PutObjectCommand;
try {
  const s3Module = require('@aws-sdk/client-s3');
  S3Client = s3Module.S3Client;
  PutObjectCommand = s3Module.PutObjectCommand;
} catch (e) {
  // Graceful fallback pour environnement de dev offline ou avant npm install
}

const path = require('path');
const crypto = require('crypto');
const logger = require('../utils/logger');
const { BadRequestError, InternalServerError } = require('../utils/errors');

const trimSlash = (value) => String(value || '').replace(/\/+$/, '');

/**
 * Lit la configuration du stockage objet compatible S3.
 * - Générique (STORAGE_*) : Supabase Storage, MinIO, etc. — prioritaire.
 * - Cloudflare R2 (R2_*) : conservé pour compatibilité.
 * Retourne null si aucune configuration complète n'est présente.
 */
function readStorageConfig(env = process.env) {
  if (env.STORAGE_S3_ENDPOINT) {
    return {
      provider: 'S3',
      endpoint: env.STORAGE_S3_ENDPOINT,
      region: env.STORAGE_S3_REGION || 'us-east-1',
      // Supabase et la plupart des services S3 auto-hébergés exigent l'adressage par chemin
      forcePathStyle: true,
      accessKeyId: env.STORAGE_ACCESS_KEY_ID,
      secretAccessKey: env.STORAGE_SECRET_ACCESS_KEY,
      bucket: env.STORAGE_BUCKET,
      publicUrl: trimSlash(env.STORAGE_PUBLIC_URL),
      required: ['STORAGE_ACCESS_KEY_ID', 'STORAGE_SECRET_ACCESS_KEY', 'STORAGE_BUCKET', 'STORAGE_PUBLIC_URL'],
    };
  }
  if (env.R2_ACCOUNT_ID) {
    return {
      provider: 'R2',
      endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      region: 'auto',
      forcePathStyle: false,
      accessKeyId: env.R2_ACCESS_KEY_ID,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
      bucket: env.R2_BUCKET_NAME || 'monde-du-travail-assets',
      publicUrl: trimSlash(env.R2_PUBLIC_DOMAIN || 'https://media.lemondedutravail.com'),
      required: ['R2_ACCESS_KEY_ID', 'R2_SECRET_ACCESS_KEY'],
    };
  }
  return null;
}

/**
 * Service d'hébergement objet compatible S3 (Supabase Storage ou Cloudflare R2)
 * avec forçage du cache immuable sur les fichiers téléversés.
 */
class R2StorageService {
  constructor(env = process.env) {
    this.config = readStorageConfig(env);
    const missing = this.config ? this.config.required.filter((name) => !env[name]) : [];

    this.isConfigured = Boolean(S3Client && this.config && missing.length === 0);
    // URL de base utilisée aussi par la simulation en développement
    this.publicDomain = this.config?.publicUrl || 'https://media.lemondedutravail.com';

    if (this.isConfigured) {
      this.client = new S3Client({
        region: this.config.region,
        endpoint: this.config.endpoint,
        forcePathStyle: this.config.forcePathStyle,
        credentials: {
          accessKeyId: this.config.accessKeyId,
          secretAccessKey: this.config.secretAccessKey,
        },
      });
      logger.info(`[StorageService] Stockage ${this.config.provider} configuré (bucket ${this.config.bucket}).`);
    } else if (this.config) {
      logger.warn(`[StorageService] Configuration ${this.config.provider} incomplète : ${missing.join(', ') || 'SDK S3 indisponible'}.`);
    } else {
      logger.warn('[StorageService] Aucun stockage de fichiers configuré (STORAGE_* ou R2_*).');
    }
  }

  /**
   * Génère une clé unique et immuable (Fingerprinting pour cache 1 an)
   * Format: {folder}/{YYYY}/{MM}/{timestamp}-{randomHash}-{slug}.{ext}
   * @param {String} originalName Nom du fichier d'origine
   * @param {String} folder Dossier logique (ex: 'metiers', 'formations')
   * @returns {String} Clé d'objet S3
   */
  generateKey(originalName, folder = 'metiers') {
    const rawExt = path.extname(originalName || '');
    const ext = rawExt.toLowerCase() || '.webp';
    // basename avec l'extension d'origine : « Photo.PNG » donne « photo », pas « photo-png »
    const baseName = path.basename(originalName || 'file', rawExt)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 50) || 'media';

    const now = new Date();
    const yearMonth = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}`;
    const timestamp = Date.now();
    const randomHash = crypto.randomBytes(4).toString('hex');
    const cleanFolder = (folder || 'content').replace(/^\/+|\/+$/g, '');

    return `${cleanFolder}/${yearMonth}/${timestamp}-${randomHash}-${baseName}${ext}`;
  }

  /**
   * Envoie un fichier brut vers le stockage avec injection stricte des headers de cache.
   *
   * @param {Object} params
   * @param {Buffer} params.buffer Contenu brut du fichier (Multer memoryStorage)
   * @param {String} params.originalName Nom d'origine
   * @param {String} params.mimeType Type MIME vérifié
   * @param {String} [params.folder='metiers'] Dossier de stockage
   * @returns {Promise<{ success: boolean, url: string, key: string, size: number, mimeType: string }>}
   */
  async uploadFile({ buffer, originalName, mimeType, folder = 'metiers' }) {
    if (!buffer || buffer.length === 0) {
      throw new BadRequestError('Le fichier envoyé est vide.');
    }

    const key = this.generateKey(originalName, folder);

    // En production, une URL simulée pointerait vers un fichier inexistant (image cassée
    // enregistrée en base) : on refuse explicitement plutôt que de feindre un succès.
    if ((!this.isConfigured || !this.client) && process.env.NODE_ENV === 'production') {
      logger.error('[StorageService] Téléversement refusé : stockage non configuré en production');
      throw new InternalServerError(
        'Le stockage des fichiers n\'est pas configuré sur le serveur. Collez une URL d\'image en attendant.'
      );
    }

    // Fallback de simulation si le stockage n'est pas configuré en environnement local
    if (!this.isConfigured || !this.client) {
      const simulatedUrl = `${this.publicDomain}/${key}`;
      logger.warn(`[StorageService] Mode simulation (stockage non configuré) : URL générée ${simulatedUrl}`);
      return {
        success: true,
        url: simulatedUrl,
        key: key,
        size: buffer.length,
        mimeType: mimeType || 'image/webp',
        simulated: true,
      };
    }

    // Forçage des métadonnées et en-têtes HTTP de cache immuable
    const command = new PutObjectCommand({
      Bucket: this.config.bucket,
      Key: key,
      Body: buffer,
      ContentType: mimeType || 'application/octet-stream',
      // 1 an de cache immuable : la clé contient un horodatage et un hash uniques
      CacheControl: 'public, max-age=31536000, immutable',
      Metadata: {
        'served-by': 'monde-du-travail-cdn',
        'original-filename': encodeURIComponent(originalName || 'file'),
      },
    });

    try {
      await this.client.send(command);

      const publicUrl = `${this.publicDomain}/${key}`;
      logger.info(`[StorageService] Fichier téléversé (${this.config.provider}) : ${publicUrl}`);

      return {
        success: true,
        url: publicUrl,
        key: key,
        size: buffer.length,
        mimeType: mimeType,
      };
    } catch (error) {
      logger.error(`[StorageService] Échec du téléversement ${this.config.provider} pour ${key}: ${error.message}`);
      throw new InternalServerError('Échec du téléversement du fichier. Réessayez ou collez une URL d\'image.');
    }
  }
}

module.exports = new R2StorageService();
module.exports.R2StorageService = R2StorageService;
module.exports.readStorageConfig = readStorageConfig;
