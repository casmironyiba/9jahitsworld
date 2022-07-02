import mongoose from "mongoose";
import dbConnect, { connection } from "../../../utils/dbConnect";
import uploadMusicMiddleware from "../../../middleware/uploadMusicMiddleware";
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "../../../utils/onError";
import onNoMatch from "../../../utils/onNoMatch";

dbConnect();

let gfs: any;

gfs = new mongoose.mongo.GridFSBucket(connection.db, { bucketName: "music" });

const handler = nc<NextApiRequest | any, NextApiResponse>({
  onError,
  onNoMatch,
});

handler.use(uploadMusicMiddleware).get((req, res) => {
  const id = new mongoose.Types.ObjectId(req.query.id);
  const cursor = gfs.find(id);
  cursor.forEach((doc: any) => res.send(doc));

  //var readStream = gfs.openDownloadStream({ id });
  //readStream.pip(res);
  //console.log(readStream);
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
