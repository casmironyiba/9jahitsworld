import AdminUser from "../models/adminUser";
import sendToken from "../utils/sendToken";

const registerAuth = async (req: any, res: any, next: any) => {
  const { username, email, password } = req.body;
  try {
    const user = await AdminUser.create({
      username,
      email,
      password,
    });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

export default registerAuth;
