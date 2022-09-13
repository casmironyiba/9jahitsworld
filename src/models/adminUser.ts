import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
  },
  email: {
    type: String,
    required: [true, "please provide an email"],
  },
  password: {
    type: String,
    required: [true, "please add password"],
    minLength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
const jwtSecrete = process.env.JWT_SECRETE;
console.log(process.env.SERVER_PORT);
console.log(`jwt_secrete ---> ${jwtSecrete}`);
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods.matchPasswords = async function(password: any) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedToken = function() {
  return jwt.sign({ id: this._id }, jwtSecrete as any, {
    expiresIn: process.env.JWT_EXPIRE as any,
  });
};

userSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
};
export default mongoose.models.AdminUser ||
  mongoose.model("AdminUser", userSchema);
