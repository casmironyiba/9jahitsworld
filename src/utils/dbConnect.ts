import mongoose from "mongoose";

export const connection = mongoose.connection;
const dbConnect = async () => await mongoose.connect(process.env.MONGO_URI!);
export default dbConnect;
