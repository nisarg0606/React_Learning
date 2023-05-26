import axios from "axios";
import { QueryClient, useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
// import { QueryClient, useQuery } from "react-query";

const queryClient = new QueryClient();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getUserData = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

const addUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data;
};

export const deleteUserData = async (id) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  // queryClient.invalidateQueries("users");
  return response.data;
};

export const useFetchUserData = () => {
  return useQuery("users", getUserData, {
    retry: 5,
    retryDelay: 1000,
  });
};

export const useAddUserData = () => {
  var navigate = useNavigate();
  return useMutation(addUser, {
    onSuccess: () => {
      navigate("/usequery/users");
      // queryClient.invalidateQueries("users");
    },
  });
};

export const useDeleteUserData = () => {
  return useMutation(deleteUserData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
