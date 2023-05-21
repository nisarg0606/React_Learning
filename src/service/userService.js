import axios from "axios";
import { useQuery } from "react-query";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getUserData = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const useFetchUserData = () => {
  return useQuery("users", getUserData, {
    retry: 5,
    retryDelay: 1000,
  });
};
