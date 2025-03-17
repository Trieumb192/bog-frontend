import { BASE_URL_IMAGE } from "../constants/baseUrl";
import { ImageDto } from "../types/Dto";
import axios from "./axiosInstance";


export const getImages = async (): Promise<{ statusCode: number; data: ImageDto[] }> => {
  const res = await axios.post<{ statusCode: number; data: ImageDto[] }>(`${BASE_URL_IMAGE}/find-all`);
  return res.data;
};


