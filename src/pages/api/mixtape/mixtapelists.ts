import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import mixtapeMiddleware from "../../../middleware/mixtapeMiddleware";
import handler from "../../../utils/handler";

dbConnect();

let gfs: any;
gfs = new mongoose.mongo.GridFSBucket(connection.db, {
  bucketName: "mixtapes",
});
//gfs = Grid(connection.db, mongoose.mongo);
//gfs.collection("music");
handler
  //.use(uploadMusicMiddleware)
  .get((req: any, res: any) => {
    gfs.find().toArray((err: any, files: object) => {
      if (err) res.send(err);
      else return res.status(200).json(files);
    });
  })
  .post(mixtapeMiddleware, (req: any, res: any) => {
    res.send(req.file);
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
