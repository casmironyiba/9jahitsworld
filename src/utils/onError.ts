import { NextApiRequest, NextApiResponse } from "next";

export default function onError(
  err: any,
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
) {
  console.error(err);
  res.status(500).end(err.toString());
  next();
}
