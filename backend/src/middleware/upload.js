const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { BadRequestError } = require('../utils/errors');

const uploadDir = path.join(__dirname, '../../uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, 'blog-' + uniqueSuffix + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new BadRequestError('Type de fichier non autorisé. JPEG, PNG, WebP ou GIF attendus.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: fileFilter
});

const validateFile = (req, res, next) => {
  if (!req.file && !req.files) {
    return next();
  }

  const files = req.files || [req.file];
  for (const file of files) {
    if (file.size > 5 * 1024 * 1024) {
      fs.unlinkSync(file.path);
      return next(new BadRequestError('La taille maximale par fichier est de 5 Mo.'));
    }
  }

  next();
};

module.exports = {
  uploadSingle: (fieldName) => {
    const middleware = upload.single(fieldName);
    return (req, res, next) => {
      middleware(req, res, (err) => {
        if (err) return next(err);
        validateFile(req, res, next);
      });
    };
  },
  uploadMultiple: (fieldName, maxCount = 10) => {
    const middleware = upload.array(fieldName, maxCount);
    return (req, res, next) => {
      middleware(req, res, (err) => {
        if (err) return next(err);
        validateFile(req, res, next);
      });
    };
  },
  uploadDir
};
