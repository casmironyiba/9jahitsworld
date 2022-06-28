const sendToken = (user: any, statusCode: any, res: any) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};

export default sendToken;
