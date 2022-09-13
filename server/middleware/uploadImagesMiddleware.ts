import multer from "multer";
import imagesStorage from "../utils/imagesStorage";
import checkFileType from "../utils/checkFileTypes";
import fileTypes from "../utils/fileTypes";

const uploadImages = multer({
  storage: imagesStorage,
  fileFilter: (req, file, done) => {
    req;
    const fileType = fileTypes.images;
    console.log(fileType);
    checkFileType(file, fileType, done);
  },
});

const uploadImagesMiddleware = (req: any, res: any, next: any) => {
  const upload = uploadImages.single("images");
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("File is too large");
    } else if (err) {
      if (err === "filetype") {
        return res.status(400).send("Image files only !!!");
      } else return res.status(500).send(`Invalid file format`);
    }
    next();
  });
};

export default uploadImagesMiddleware;
