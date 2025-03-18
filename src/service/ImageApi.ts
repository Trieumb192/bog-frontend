import { BASE_URL_IMAGE } from "../constants/baseUrl";
import { ImageDto } from "../types/Dto";
import axios from "./axiosInstance";

interface IImageApi {
  getImages(): Promise<{ statusCode: number; data: ImageDto[] }>;
}

export const ImageApi: IImageApi = {
  async getImages() {
    const res = await axios.post<{ statusCode: number; data: ImageDto[] }>(`${BASE_URL_IMAGE}/create`);
    return res.data;
  },

};


