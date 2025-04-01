import axios from 'axios';
import { message } from 'antd';
import { BASE_URL } from '../constants/baseUrl';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    message.error(error.response?.message || 'Đã có lỗi xảy ra!');
    return Promise.reject(error);
  }
);

export default instance;
