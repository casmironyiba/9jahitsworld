import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import Grid from "gridfs-stream";
import handler from "../../../utils/handler";

dbConnect();

handler.get((req, res) => {
  let bucket = new mongoose.mongo.GridFSBucket(connection.db, {
    chunkSizeBytes: 1024,
    bucketName: "music",
  });

  const gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("music");

  const activeURL = new mongoose.Types.ObjectId(req.query.id);

  //console.log(req.query.id);
  gfs.files.findOne({ _id: activeURL }, (err: any, file: any) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    res.status(200).json({ track: file });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
