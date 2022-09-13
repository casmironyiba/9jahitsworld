import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import uploadMusicMiddleware from "../../../middleware/uploadMusicMiddleware";
import handler from "../../../utils/handler";

dbConnect();

let gfs: any;
gfs = new mongoose.mongo.GridFSBucket(connection.db, {
bucketName: "music",
});
//gfs = Grid(connection.db, mongoose.mongo);
//gfs.collection("music");
handler
  //.use(uploadMusicMiddleware)
  .get((req, res) => {
    gfs.find().toArray((err:any,files:object)=>{
      if (err) res.send(err);
      else return res.status(200).json(files);
    });
  })
  .post(uploadMusicMiddleware, (req, res) => {
    res.send(req.file);
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
