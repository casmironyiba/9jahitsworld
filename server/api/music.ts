//import music from "../../middleware/uploadMusicMiddleware";
import mongoose from "mongoose";
import { connection } from "../database/index";
//import MusicStorage from "../utils/musicStorage";
import uploadMusicMiddleware from "../middleware/uploadMusicMiddleware";
import dbConnect from "../utils/dbConnect";

export default async (req: any, res: any, next: any) => {
  dbConnect();
  let gfs: any;

  connection.on("open", () => {
    //gfs = Grid(connection.db, mongoose.mongo);
    //gfs.collection("music");
    gfs = new mongoose.mongo.GridFSBucket(connection.db, {
      bucketName: "music",
    });
  });

  if (req.method === "GET") {
    gfs.find().toArray((err: any, files: any) => {
      if (err) res.send(err);
      else return res.send(files.map((buf: any) => buf));
    });
  }

  if (req.method === "GET") {
    uploadMusicMiddleware(req, res, next);
  }
};
