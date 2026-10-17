const { R2StorageService, readStorageConfig } = require('../src/services/r2StorageService');

const SUPABASE_ENV = {
  STORAGE_S3_ENDPOINT: 'https://abcd.storage.supabase.co/storage/v1/s3',
  STORAGE_S3_REGION: 'eu-west-2',
  STORAGE_ACCESS_KEY_ID: 'key-id',
  STORAGE_SECRET_ACCESS_KEY: 'secret',
  STORAGE_BUCKET: 'media',
  STORAGE_PUBLIC_URL: 'https://abcd.supabase.co/storage/v1/object/public/media/',
};

describe('Stockage des fichiers', () => {
  const originalNodeEnv = process.env.NODE_ENV;
  afterEach(() => { process.env.NODE_ENV = originalNodeEnv; });

  describe('readStorageConfig', () => {
    it('lit une configuration S3 générique (Supabase) avec adressage par chemin', () => {
      const config = readStorageConfig(SUPABASE_ENV);
      expect(config).toMatchObject({
        provider: 'S3', endpoint: SUPABASE_ENV.STORAGE_S3_ENDPOINT, region: 'eu-west-2',
        forcePathStyle: true, bucket: 'media',
        publicUrl: 'https://abcd.supabase.co/storage/v1/object/public/media',
      });
    });

    it('reste compatible avec Cloudflare R2', () => {
      const config = readStorageConfig({ R2_ACCOUNT_ID: 'acc', R2_ACCESS_KEY_ID: 'k', R2_SECRET_ACCESS_KEY: 's' });
      expect(config).toMatchObject({ provider: 'R2', endpoint: 'https://acc.r2.cloudflarestorage.com', region: 'auto' });
    });

    it('renvoie null sans configuration', () => {
      expect(readStorageConfig({})).toBeNull();
    });
  });

  describe('uploadFile', () => {
    const file = { buffer: Buffer.from('image'), originalName: 'Photo Été.PNG', mimeType: 'image/png', folder: 'blog' };

    it('considère une configuration incomplète comme non configurée', () => {
      const { STORAGE_PUBLIC_URL, ...incomplete } = SUPABASE_ENV;
      expect(new R2StorageService(incomplete).isConfigured).toBe(false);
    });

    it('refuse de simuler un envoi en production', async () => {
      process.env.NODE_ENV = 'production';
      const service = new R2StorageService({});
      await expect(service.uploadFile(file)).rejects.toMatchObject({ statusCode: 500 });
    });

    it('envoie le fichier dans le bucket et renvoie son URL publique', async () => {
      const service = new R2StorageService(SUPABASE_ENV);
      const sent = [];
      service.client = { send: async (command) => { sent.push(command.input); } };

      const result = await service.uploadFile(file);

      expect(sent).toHaveLength(1);
      expect(sent[0]).toMatchObject({ Bucket: 'media', ContentType: 'image/png', CacheControl: 'public, max-age=31536000, immutable' });
      expect(sent[0].Key).toMatch(/^blog\/\d{4}\/\d{2}\/\d+-[0-9a-f]{8}-photo-ete\.png$/);
      expect(result.url).toBe(`https://abcd.supabase.co/storage/v1/object/public/media/${sent[0].Key}`);
      expect(result.simulated).toBeUndefined();
    });

    it('transforme une erreur du stockage en erreur 500 sans détail interne', async () => {
      const service = new R2StorageService(SUPABASE_ENV);
      service.client = { send: async () => { throw new Error('SignatureDoesNotMatch secret-detail'); } };
      const error = await service.uploadFile(file).catch((e) => e);
      expect(error.statusCode).toBe(500);
      expect(error.message).not.toContain('secret-detail');
    });
  });
});
