const multer = require('multer');
const path = require('path');

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Ajustado para ../uploads
  },
  filename: (req, file, cb) => {
    const safeFilename = file.originalname.replace(/\s+/g, '-').toLowerCase();
    cb(null, `${Date.now()}-${safeFilename}`);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
