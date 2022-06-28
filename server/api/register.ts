import AdminUser from "../models/adminUser";
import sendToken from "../utils/sendToken";
import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new AdminUser({
    username,
    email,
    password,
  });
  await AdminUser.findOne({ email: email })
    .then(async (existedUser) => {
      if (existedUser) return res.send(`User Already Exist`);
      if (!existedUser) {
        await user.save();
        sendToken(user, 201, res);
      }
      Promise.resolve();
    })
    .catch((error) => {
      return res.send(error);
    });
});
export default router;
