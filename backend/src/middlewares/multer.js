const multer = require("multer");
const path = require("path");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/png": "png",
  "image/jpeg": "jpeg",
};

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, path.join(__dirname, "../../public/data/uploads"));
  },
  filename: (req, file, callBack) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callBack(null, `${name.split(".")[0]}.${extension}`);
  },
});

module.exports = multer({ storage }).single("file");
