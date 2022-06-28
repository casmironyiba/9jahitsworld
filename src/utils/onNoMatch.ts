import { NextApiRequest, NextApiResponse } from "next";

export default function onNoMatch(req: NextApiRequest, res: NextApiResponse) {
  res.status(404).end("page is not found... or is it");
}
