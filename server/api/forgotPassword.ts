import AdminUser from "../models/adminUser";
import ErrorResponse from "../utils/errorResponse";
import sendEmail from "../utils/sendEmail";

const forgotPasswordAuth = async (req: any, res: any, next: any) => {
  const { email } = req.body;

  try {
    const user = await AdminUser.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetURL = `http://localhost:5000/passwordreset/${resetToken}`;

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

      await user.save();

      return next(new ErrorResponse("Email could not be send", 500));
    }
  } catch (error) {
    return next(error);
  }
};

export default forgotPasswordAuth;
