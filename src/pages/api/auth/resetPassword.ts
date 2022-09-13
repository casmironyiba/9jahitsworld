import crypto from "crypto";
import AdminUser from "../../../models/adminUser";
import ErrorResponse from "../../../../server/utils/errorResponse";

export default async function handler(req: any, res: any, next: any) {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const adminUser = await AdminUser.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!adminUser) {
      return next(new ErrorResponse(`Invalid Reset Token`, 400));
    }
    adminUser.password = req.body.password;
    adminUser.resetPasswordToken = undefined;
    adminUser.resetPasswordExpire = undefined;

    await adminUser.save();

    res.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (error) {
    next(error);
  }
}
