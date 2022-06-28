import { MouseEvent } from "react";
import Axios from "axios";

const postRequest = async (uri: any, payload: any, event?: MouseEvent) => {
  event?.preventDefault();
  const { data } = await Axios.post(uri, payload);
  return data;
};
export default postRequest;
