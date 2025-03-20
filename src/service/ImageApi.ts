import { BASE_URL_IMAGE } from '../constants/baseUrl';
import { ImageDto } from '../types/Dto';
import axios from './axiosInstance';

interface IImageApi {
  create(request: ImageDto): Promise<{ statusCode: number; message: string }>;
  getImages(): Promise<{ statusCode: number; data: ImageDto[] }>;
  delete(id: number): Promise<{ statusCode: number; message: string }>;
}

export const ImageApi: IImageApi = {
  async create(request: ImageDto) {
    const res = await axios.post<{ statusCode: number; message: string }>(
      `${BASE_URL_IMAGE}/create`,
      request
    );
    return res.data;
  },

  async getImages() {
    const res = await axios.post<{ statusCode: number; data: ImageDto[] }>(
      `${BASE_URL_IMAGE}/find-all`
    );
    return res.data;
  },

  async delete(id: number) {
    const res = await axios.delete<{ statusCode: number; message: string }>(
      `${BASE_URL_IMAGE}/delete`,
      {
        params: { id },
      }
    );
    return res.data;
  },
};
