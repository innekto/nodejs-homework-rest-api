const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "../", "tmp");
console.log("tmpDir", tmpDir);

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

module.exports = { upload };
