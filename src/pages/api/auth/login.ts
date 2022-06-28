import AdminUser from "../../../models/adminUser";
import ErrorResponse from "../../../utils/errorResponse";
import sendToken from "../../../utils/sendToken";
import dbConnect from "../../../utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dbConnect();
  const { email, password } = req.body;

  if (!email || !password) {
    res.send(new ErrorResponse("Please provide an Email and Password", 400));
  }

  try {
    const user = await AdminUser.findOne({ email }).select("+password");

    if (!user) {
      res.send(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.send(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (error) {
    res.send(new ErrorResponse("Invalid credentials", 500));
  }
}
