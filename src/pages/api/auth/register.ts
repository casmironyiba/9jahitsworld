import dbConnect from "../../../utils/dbConnect";
import AdminUser from "../../../models/adminUser";
import sendToken from "../../../utils/sendToken";
import ErrorResponse from "../../../utils/errorResponse";

const register = async (req: any, res: any) => {
  dbConnect();

  const { username, email, password } = req.body;
  const user = new AdminUser({
    username,
    email,
    password,
  });
  await AdminUser.findOne({ email: email })
    .then(async (existedUser) => {
      if (existedUser)
        return res.send(new ErrorResponse(`User Already Exist`, 400));
      if (!existedUser) {
        await user.save();
        sendToken(user, 201, res);
      }
    })
    .catch((error) => {
      console.log(error);
      return res.send(error);
    });
};
export default register;
