import multer from "multer";
import storage from "../utils/storage";
import checkFileType from "../utils/checkFileTypes";
import fileTypes from "../utils/fileTypes";

const images = multer({
  storage: storage("images"),
  fileFilter: (req, file, done) => {
    const fileType = fileTypes.images;
    checkFileType(file, fileType, done);
  },
});

const uploadImagesMiddleware = (req: any, res: any, next: any) => {
  const upload = images.single("images");
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
