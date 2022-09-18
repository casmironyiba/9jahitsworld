import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import Grid from "gridfs-stream";
import handler from "../../../utils/handler";
import isFileExist from "../../../utils/isFileExist";

dbConnect();

handler.get((req, res) => {
  let bucket = new mongoose.mongo.GridFSBucket(connection.db, {
    chunkSizeBytes: 1024,
    bucketName: "videos",
  });

  const gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("videos");

  const activeURL = new mongoose.Types.ObjectId(req.query.id);

  //console.log(req.query.id);
  gfs.files.findOne({ _id: activeURL }, (err: any, file: any) => {
    isFileExist(file, res);

    if (file.contentType === "video/mpeg") {
      const readStream = bucket.openDownloadStream(file._id);
      readStream.pipe(res);
    }
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
