import mongoose from "mongoose";

const createGridFSReadStream = (gridfsBucket: any, id: any) => {
  return gridfsBucket.openDownloadStream(new mongoose.Types.ObjectId(id));
};
export default createGridFSReadStream;
