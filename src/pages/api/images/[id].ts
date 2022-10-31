import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import Grid from "gridfs-stream";
import handler from "../../../utils/handler";
import isFileExist from "../../../utils/isFileExist";

dbConnect();

handler.get((req, res) => {
  let bucket = new mongoose.mongo.GridFSBucket(connection.db, {
    chunkSizeBytes: 1024,
    bucketName: "images",
  });

  const gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("images");

  gfs.files.findOne(
    { _id: new mongoose.Types.ObjectId(req.query.id) },
    (err: any, image: any) => {
      isFileExist(image, res);

      if (image.contentType === "image/mpeg") {
        res.status(200).json(image);
      }
    }
  );
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
