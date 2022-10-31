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

  gfs.files.findOne(
    { _id: new mongoose.Types.ObjectId(req.query.id) },
    (err: any, video: any) => {
      isFileExist(video, res);

      //if (file.contentType === "video/mpeg" || "video/mp4") {
      res.status(200).json(video);
      //}
    }
  );
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
