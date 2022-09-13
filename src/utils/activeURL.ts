import mongoose from "mongoose";

const activeURL = (req: any) => new mongoose.Types.ObjectId(req.query.id);
export default activeURL
