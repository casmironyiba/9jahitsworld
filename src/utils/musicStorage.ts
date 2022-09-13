import { GridFsStorage } from "multer-gridfs-storage";
import crypto from "crypto";

const MusicStorage = new GridFsStorage({
  url: <string>process.env.MONGO_URI,
  file: (req: any, file: any) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename,
          bucketName: "music",
          chunkSizeBytes: 1024,
        };
        resolve(fileInfo);
      });
    });
  },
});
export default MusicStorage;
