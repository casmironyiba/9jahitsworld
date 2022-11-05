import multer from "multer";
import storage from "../utils/storage";
import checkFileType from "../utils/checkFileTypes";
import fileTypes from "../utils/fileTypes";

const uploadVideos = multer({
  storage: storage("videos"),
  fileFilter: (req, file, done) => {
    const fileType = fileTypes.videos;
    checkFileType(file, fileType, done);
  },
});

const videosMiddleware = (req: any, res: any, next: any) => {
  const upload = uploadVideos.single("videos");
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).send("File is too large");
    } else if (err) {
      if (err === "filetype") {
        return res.status(400).send("video files only !!!");
      } else {
        return res.status(500).send(`Invalid file format`);
      }
    }
    next();
  });
};
export default videosMiddleware;
