//import dotenv from "dotenv";
//dotenv.config();
import { GridFsStorage } from "multer-gridfs-storage";

const mongoURI: any = process.env.MONGODB_URI;
const mongoOptions: any = process.env.MONGODB_OPTIONS;

const ImagesStorage = new GridFsStorage({
  url: mongoURI,
  options: mongoOptions,
  file: (req: any, file: any) => {
    console.log(req);
    return new Promise((resolve) => {
      const filename = file.originalname;
      const fileInfo = {
        filename,
        bucketName: "images",
      };
      resolve(fileInfo);
    });
  },
});

export default ImagesStorage;
