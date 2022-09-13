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

  gfs.files.findOne({ _id: new mongoose.Types.ObjectId(req.query.id)}, (err: any, file: any) => {
    console.log(file)
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    if (file.contentType === "audio/mpeg") {
      res.status(200).json(file)
      //const readStream = bucket.openDownloadStream(file._id);
      //readStream.pipe(res);
    }
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
