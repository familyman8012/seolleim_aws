import { useQuery } from "react-query";
import axios from "axios";
import { IProduct } from "@src/typings/db";

const fetchCurriculum = async (_id: string) => {
  const res: { data: IProduct[] } = await axios.get(`/api/curriculum/${_id}`);
  return res.data[0];
};
const useVod = (_id: string) => {
  return useQuery(["curriculum"], () => fetchCurriculum(_id));
};

export { useVod, fetchCurriculum };
