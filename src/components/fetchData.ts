//import fetchRequest from "../fp/FetchRequest";

const fetchData = (url: any) => fetchRequest(url).then((res: any) => res.data);
export default fetchData;
