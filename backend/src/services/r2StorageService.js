let S3Client, PutObjectCommand, DeleteObjectCommand;
try {
  const s3Module = require('@aws-sdk/client-s3');
  S3Client = s3Module.S3Client;
  PutObjectCommand = s3Module.PutObjectCommand;
  DeleteObjectCommand = s3Module.DeleteObjectCommand;
} catch (e) {
  // Graceful fallback pour environnement de dev offline ou avant npm install
}

const path = require('path');
const crypto = require('crypto');
const logger = require('../utils/logger');

/**
 * Service d'hébergement objet compatible S3 ciblant Cloudflare R2
 * avec configuration du CDN Edge ("Le Bouclier") et forçage du cache immuable.
 */
class R2StorageService {
  constructor() {
    this.accountId = process.env.R2_ACCOUNT_ID;
    this.accessKeyId = process.env.R2_ACCESS_KEY_ID;
    this.secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
    this.bucketName = process.env.R2_BUCKET_NAME || 'monde-du-travail-assets';

    // Domaine CDN personnalisé proxyfié par Cloudflare (Orange Cloud)
    // Ne jamais exposer l'URL brute du bucket en production.
    const configuredDomain = process.env.R2_PUBLIC_DOMAIN || 'https://media.lemondedutravail.com';
    this.publicDomain = configuredDomain.replace(/\/$/, '');

    this.isConfigured = Boolean(
      S3Client && 
      this.accountId && 
      this.accessKeyId && 
      this.secretAccessKey
    );

    if (this.isConfigured) {
      this.client = new S3Client({
        region: 'auto',
        endpoint: `https://${this.accountId}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
        },
      });
      logger.info('[R2StorageService] Connecté avec succès à Cloudflare R2.');
    } else {
      logger.warn('[R2StorageService] Configuration Cloudflare R2 incomplète ou module SDK S3 non disponible.');
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
    const ext = path.extname(originalName || '').toLowerCase() || '.webp';
    const baseName = path.basename(originalName || 'file', ext)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
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
   * Envoie un fichier brut vers Cloudflare R2 avec injection stricte des headers de cache.
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
      throw new Error('Le buffer de fichier fourni est vide.');
    }

    const key = this.generateKey(originalName, folder);

    // Fallback de simulation si les clés Cloudflare R2 ne sont pas encore configurées en environnement local
    if (!this.isConfigured || !this.client) {
      const simulatedUrl = `${this.publicDomain}/${key}`;
      logger.warn(`[R2StorageService] Mode simulation (R2 non configuré) : URL générée ${simulatedUrl}`);
      return {
        success: true,
        url: simulatedUrl,
        key: key,
        size: buffer.length,
        mimeType: mimeType || 'image/webp',
        simulated: true,
      };
    }

    // LE BOUCLIER : Forçage des métadonnées et en-têtes HTTP de cache immuable
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: buffer,
      ContentType: mimeType || 'application/octet-stream',
      // 1 an de cache immuable (Browser + Cloudflare CDN Edge)
      CacheControl: 'public, max-age=31536000, immutable',
      Metadata: {
        'served-by': 'monde-du-travail-cdn',
        'original-filename': encodeURIComponent(originalName || 'file'),
      },
    });

    try {
      await this.client.send(command);

      // L'URL publique servie est exclusivement celle du domaine CDN personnalisé proxyfié
      const cdnUrl = `${this.publicDomain}/${key}`;

      logger.info(`[R2StorageService] Fichier téléversé avec succès sur R2 (CDN: ${cdnUrl})`);

      return {
        success: true,
        url: cdnUrl,
        key: key,
        size: buffer.length,
        mimeType: mimeType,
      };
    } catch (error) {
      logger.error(`[R2StorageService] Échec du téléversement vers Cloudflare R2 pour ${key}:`, error);
      throw new Error(`Échec de téléversement R2 : ${error.message}`);
    }
  }

  /**
   * Vérifie si une URL donnée pointe vers le CDN R2
   * @param {String} url
   * @returns {Boolean}
   */
  isCdnUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return url.startsWith(this.publicDomain) || url.includes('.r2.dev') || url.includes('.r2.cloudflarestorage.com');
  }

  /**
   * Vérifie si une URL provient de l'ancien Supabase Storage
   * @param {String} url
   * @returns {Boolean}
   */
  isSupabaseUrl(url) {
    if (!url || typeof url !== 'string') return false;
    return url.includes('supabase.co/storage/v1/object');
  }
}

module.exports = new R2StorageService();
