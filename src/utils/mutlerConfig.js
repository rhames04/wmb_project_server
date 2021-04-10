var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "photo") {
      cb(null, "src/files/photo");
    } else {
      cb(null, "src/files/file");
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage }).fields([
  { name: "photo", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);

module.exports = upload;
