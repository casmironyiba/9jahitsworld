import Axios from "axios";

const fetchRequest = async (url: any) => {
  return await Axios.get(url).catch((err: any) => {
    if (err) throw err;
  });
};
export default fetchRequest;
