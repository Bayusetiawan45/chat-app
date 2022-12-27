import axios from "axios";

export const _AxiosService = axios.create({
  baseURL: 'http://192.168.100.213:4000/api/',
})