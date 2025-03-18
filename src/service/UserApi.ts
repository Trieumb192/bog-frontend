import { BASE_URL_USER } from "../constants/baseUrl";
import { UserDto } from "../types/User";
import axios from "./axiosInstance";

interface IUserApi {
    create(request: UserDto): Promise<{ statusCode: number; message: string }>;
}

export const UserApi: IUserApi = {
  async create(request: UserDto) {
    const res = await axios.post<{ statusCode: number; message: string }>(`${BASE_URL_USER}/create`,request);
    return res.data;
  },

};
