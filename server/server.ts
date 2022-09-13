import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import database from "./database/index";
import music from "./api/music";
import videos from "./api/videos";
import images from "./api/images";
import admin from "./api/admin";
import register from "./api/register";
import login from "./api/login";
import errorHandler from "./middleware/error";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
database();

//`````````````````````````middlewres starts`````````````````````````````````````
app.use(cors());
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

//`````````````````````````middlewres ends`````````````````````````````````````
//app.use("/", (req, res) => {
//res.send("welcome to my server");
//});
app.get("/", (req, res) => {
  res.send("welcome casmir server");
});
app.use("/api", [admin, register, login, music, videos, images]);
app.use(errorHandler);
//app.use("/api/music", music);

const ServerPortNumber = process.env.SERVER_PORT || 4000;
const ServerLogMessage = `App is running on port ${ServerPortNumber}`;
const callback = () => console.log(ServerLogMessage);

app.listen(ServerPortNumber, callback);
