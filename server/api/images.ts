import express from "express";
import uploadImagesMiddleware from "../middleware/uploadImagesMiddleware";
import mongoose from "mongoose";
import { connection } from "../database/index";

const router = express.Router();

let gridFSBucket: any;

connection.on("open", () => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(connection.db, {
    bucketName: "images",
  });
});

router
  .route("/images")
  .get((req, res) => {
    req;
    gridFSBucket.find().toArray((err: any, files: any) => {
      if (err) throw err;
      console.log(files._id);
      res.send(files.map((buf: any) => buf));
    });
  })

  .post(uploadImagesMiddleware, (req, res) => {
    console.log(req.file);
  });

router.get("/uploadImages/:id", (req, res) => {
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
