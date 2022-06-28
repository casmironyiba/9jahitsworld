import jwt from "jsonwebtoken";
import adminUser from "../models/adminUser";
import ErrorResponse from "../utils/errorResponse";

const protect = async (req: any, res: any, next: any) => {
  let token;
  res;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
  const jwtSecrete: any = process.env.JWT_SECRETE;
  try {
    const decode: any = jwt.verify(token, jwtSecrete);
    const user = adminUser.findById(decode.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};

export default protect;
