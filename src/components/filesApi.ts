import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});

export const getFiles = async (url: string) =>
  await api.get(url).then((res: any) => res.data);

export const getFile = async (url: string, id: any) =>
  await api.get(`${url}/${id}`).then((res: any) => res.data);
export default getFile;
