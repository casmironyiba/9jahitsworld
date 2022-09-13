import AdminUser from "../models/adminUser";
//import ErrorResponse from "../utils/errorResponse";
import sendToken from "../utils/sendToken";
import express from "express";

const router = express.Router();

router.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("Please provide an Email and Password", 400);
  }

  try {
    const user = await AdminUser.findOne({ email }).select("+password");

    if (!user) {
      res.send("Invalid credentials", 401);
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.send("Invalid credentials", 401);
    }

    sendToken(user, 201, res);
    Promise.resolve();
  } catch (error) {
    res.send("Invalid credentials", 500);
  }
});
export default router;
