import mongoose from "mongoose";

export const mongoURI = "mongodb://localhost:27017/naijaHits";
export const connection = mongoose.connection;
export const mongoDBLogMessage = {
  successMsg: `Connected to the mongoDB database`,
  errorMsg: `connection error:`,
};

export const mongoDBOptionals = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default function database() {
  try {
    mongoose.connect(mongoURI);
    console.log(mongoDBLogMessage.successMsg);
  } catch (error) {
    if (error) throw new Error(`${mongoDBLogMessage.errorMsg}=> ${error}`);
  }
}
