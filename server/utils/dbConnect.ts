import mongoose from "mongoose";

export const connection = mongoose.connection;
const mongoConnection: any = {};

function dbConnect() {
  if (mongoConnection.db) {
    return;
  }

  const db: any = mongoose.connect(process.env.MONGO_URI as any);

  mongoConnection.isConnected = db.isConnected[0].readyState;
  console.log(mongoConnection.isConnected);
}

export default dbConnect;
