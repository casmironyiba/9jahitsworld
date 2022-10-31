import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import handler from "../../../utils/handler";

dbConnect();

let gfs: any;
gfs = new mongoose.mongo.GridFSBucket(connection.db, {
  bucketName: "music",
});
handler.get((req: any, res: any) => {
  gfs
    .find()
    .limit(10)
    .toArray((err: any, files: object) => {
      if (err) res.send(err);
      else return res.status(200).json(files);
    });
});

export default handler;
