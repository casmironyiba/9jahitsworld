import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import onError from "./onError";
import onNoMatch from "./onNoMatch";

const handler = nc<NextApiRequest | any, NextApiResponse | any>({
  onError,
  onNoMatch,
});

export default handler;
