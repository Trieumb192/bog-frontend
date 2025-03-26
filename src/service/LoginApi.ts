import { BASE_URL_AUTH } from '../constants/baseUrl';
import { ResUserDto, UserDto, UserLoginRqDto } from '../types/User';
import axios from './axiosInstance';

interface IAuthApi {
  login(request: UserLoginRqDto): Promise<{ statusCode: number; data: ResUserDto }>;
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
