import crypto from "crypto";

export default function storage(
  url: string,
  options: any,
  gridfsStorage: any,
  bucketName: string
) {
  return new gridfsStorage({
    url,
    options,
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
