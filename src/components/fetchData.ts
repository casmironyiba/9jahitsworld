import fetchRequest from "../fp/FetchRequest";

const fetchData = async (url: any) =>
  await fetchRequest(url).then((res: any) => res.data);
export default fetchData;
