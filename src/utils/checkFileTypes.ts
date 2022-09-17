import path from "path";

function checkFileType(file: any, fileTypes: any, done: any) {
  const extname = fileTypes.test(path.extname(file.originalname));
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype || extname) {
    return done(null, true);
  } else {
    done(`Error: Invalid file format`);
  }
}
export default checkFileType;
