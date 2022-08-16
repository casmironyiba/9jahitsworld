import mongoose from "mongoose";
import dbConnect, { connection } from "../../utils/dbConnect";
import uploadMusicMiddleware from "../../middleware/uploadMusicMiddleware";
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "../../utils/onError";
import onNoMatch from "../../utils/onNoMatch";
import handler from "../../utils/handler";

dbConnect();

let gfs: any;
gfs = new mongoose.mongo.GridFSBucket(connection.db, {
  bucketName: "music",
});

//const handler = nc<NextApiRequest, NextApiResponse>({ onError, onNoMatch });

handler
  .use(uploadMusicMiddleware)
  .get((req, res) => {
    gfs.find().toArray((err: any, files: any) => {
      if (err) res.send(err);
      else return res.send(files.map((buf: any) => buf));
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
