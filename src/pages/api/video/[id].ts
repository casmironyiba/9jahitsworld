import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import Grid from "gridfs-stream";
import handler from "../../../utils/handler";
import fileID from "../../../utils/fileID";

dbConnect();

handler.get((req, res) => {
  let bucket = new mongoose.mongo.GridFSBucket(connection.db, {
    chunkSizeBytes: 1024,
    bucketName: "videos",
  });
  console.log(fileID(req.quer.id));
  const gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("videos");
  gfs.files.findOne({ _id: fileID(req.query.id) }, (err: any, file: any) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    if (file.contentType !== "video/mpeg") {
      res.status(400).json({ err: "Invalid file format" });
    }
    const readStream = bucket.openDownloadStream(file._id);
    readStream.pipe(res);
  });
});

//const checkFile = (res, file: any) => {
//if (!file || file.length === 0) {
//return res.status(404).json({
//err: "No file exists",
//});
//}
//});
