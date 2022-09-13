import AdminUser from "../models/adminUser";
import ErrorResponse from "../utils/errorResponse";
import sendToken from "../utils/sendToken";

const loginAuth = async (req: any, res: any, next: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an Email and Password", 400));
  }

  try {
    const user = await AdminUser.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 201, res);
  } catch (error) {
    return next(new ErrorResponse("Invalid credentials", 500));
  }
};

export default loginAuth;
