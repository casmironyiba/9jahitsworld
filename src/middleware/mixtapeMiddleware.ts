import multer from "multer";
import storage from "../utils/storage";
import checkFileType from "../utils/checkFileTypes";
import fileTypes from "../utils/fileTypes";

const mixtape = multer({
  storage: storage("mixtape"),
  fileFilter: (req, file, done) => {
    const fileType = fileTypes.music;
    checkFileType(file, fileType, done);
  },
});

const mixtapeMiddleware = (req: any, res: any, next: any) => {
  const upload = mixtape.single("mixtape");
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("File is too large");
    } else if (err) {
      if (err === "filetype") {
        return res.status(400).send("music files only !!!");
      } else return res.status(500).send(`Invalid file format`);
    }
    next();
  });
};
export default mixtapeMiddleware;
