import axios from 'axios';

const axiosConfig = {
  baseURL: `http://localhost:8080/api/`,
  withCredentials: true,
}

export const AxiosInstance = axios.create(axiosConfig)