import crypto from "crypto";
import { GridFsStorage } from "multer-gridfs-storage";

export default function storage(bucketName: string) {
  return new GridFsStorage({
    url: <any>process.env.MONGO_URI,
    file: (req: any, file: any) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err) => {
          if (err) {
            return reject(err);
          }
          const filename = file.originalname;
          const fileInfo = {
            filename,
            bucketName,
          };
          resolve(fileInfo);
        });
      });
    },
  });
}
