import axios, { AxiosRequestConfig } from "axios";

const axiosRequestConfig = (token: string | undefined): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  };

  return config;
};

export const postAPI = async (url: string, data: object, token?: string) => {
  const res = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/${url}`,
    data,
    axiosRequestConfig(token)
  );
  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/${url}`,
    axiosRequestConfig(token)
  );
  return res;
};

export const patchAPI = async (url: string, data: object, token?: string) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/${url}`,
    data,
    axiosRequestConfig(token)
  );
  return res;
};

export const putAPI = async (url: string, data: object, token?: string) => {
  const res = await axios.put(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/${url}`,
    data,
    axiosRequestConfig(token)
  );
  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_SERVER_URL}/api/v1/${url}`,
    axiosRequestConfig(token)
  );
  return res;
};
