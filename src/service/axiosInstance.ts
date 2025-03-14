import axios from "axios";
import { message } from "antd";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.response.use(
  response => response,
  error => {
    message.error(error.response?.message || "Đã có lỗi xảy ra!");
    return Promise.reject(error);
  }
);

export default instance;
