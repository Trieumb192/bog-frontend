import { BASE_URL_AUTH } from '../constants/baseUrl';
import { ResUserDto, UserDto } from '../types/User';
import axios from './axiosInstance';

interface IAuthApi {
  login(request: UserDto): Promise<{ statusCode: number; data: ResUserDto }>;
}

export const AuthApi: IAuthApi = {
  async login(request: UserDto) {
    const res = await axios.post<{ statusCode: number; data: ResUserDto }>(
      `${BASE_URL_AUTH}/login`,
      request
    );
    return res.data;
  },
};
