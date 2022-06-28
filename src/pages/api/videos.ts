import mongoose from "mongoose";
import dbConnect, { connection } from "../../utils/dbConnect";
import uploadVideosMiddleware from "../../middleware/uploadVideosMiddleware";
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "../../utils/onError";
import onNoMatch from "../../utils/onNoMatch";

dbConnect();

let gfs: any;
gfs = new mongoose.mongo.GridFSBucket(connection.db, {
  bucketName: "videos",
});

const handler = nc<NextApiRequest, NextApiResponse>({ onError, onNoMatch });

handler
  .use(uploadVideosMiddleware)
  .get((req, res) => {
    gfs.find().toArray((err: any, files: any) => {
      if (err) res.send(err);
      else return res.send(files.map((buf: any) => buf));
    });
  })
  .post(uploadVideosMiddleware, (req, res) => {
    res.send(req.file);
    res.send(req.body);
  });

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
