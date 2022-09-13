import mongoose from "mongoose";

const fileID = (fileId: any) => new mongoose.Types.ObjectId(fileId);
export default fileID;
