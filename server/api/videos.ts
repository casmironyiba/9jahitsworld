import uploadVideosMiddleware from "../middleware/uploadVideosMiddleware";
import mongoose from "mongoose";
import express from "express";
import { connection } from "../database/index";
import multer from "multer";
import VideosStorage from "../utils/videosStorage";

const router = express.Router();

let gridFSBucket: any;
const upload = multer({ storage: VideosStorage });
connection.on("open", () => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "videos",
  });
  router
    .route("/videos")
    .get((req, res) => {
      gridFSBucket.find().toArray((err: any, files: any) => {
        if (err) throw err;
        console.log(files._id);
        res.send(files.map((buf: any) => buf));
      });
    })

    .post(upload.single("videos"), (req, res) => {
      console.log(req.file);
    });
});

router.get("/uploadVideos/:id", (req, res) => {
  const fileID = gridFSBucket.find().toArray((err: any, files: any) => {
    if (err) throw err;
    files.map((file: any) => file.id);
  });

  console.log(fileID);
  const id = new mongoose.Types.ObjectId(req.params.id);
  const readStream = gridFSBucket.openDownloadStream(id);
  readStream.pipe(res);
  console.log(readStream);
});
export default router;
