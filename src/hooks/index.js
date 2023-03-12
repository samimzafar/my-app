import axios from "axios";
import { useQuery } from "react-query";
const BASE_URL = "http://localhost:4000/api";
const getData = () => axios.get(`${BASE_URL}/projects`);
export const useFetchAPI = (onSuccess, onError) => {
 return useQuery('api-project', getData, {
  onSuccess,
  onError,
  select: (data) => data.data.data.map(project => project.name)

 });
};