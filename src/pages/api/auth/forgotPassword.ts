import dbConnect from "../../..//utils/dbConnect";
import AdminUser from "../../../models/adminUser";
import ErrorResponse from "../../../utils/errorResponse";
import sendEmail from "../../../utils/sendEmail";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  dbConnect();
  if (req.method === "GET") {
    res.send("get");
  }
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      const user = await AdminUser.findOne({ email });
      console.log(`user -->${user}`);
      if (!user) {
        return res.send(new ErrorResponse("Email could not be sent", 404));
      }

      const resetToken = user.getResetPasswordToken();

      //await user.save();

      const resetURL = `http://localhost:3000/resetpassword/${resetToken}`;

      const message = `
     <h1>You have requested a password reset</h1>
     <p>please go to this link to reset your password</p>
     <a href=${resetURL} clicktracking=off>${resetURL}</a>
    `;

      try {
        sendEmail({
          to: user.email,
          subject: "Password Reset Request",
          text: message,
        });
        res.status(200).json({ success: true, data: "Email Sent" });
      } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        return res.send(new ErrorResponse("Email could not be send", 500));
      }
    } catch (error) {
      return res.send(error);
    }
  }
}
