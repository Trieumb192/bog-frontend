import { BlogDto } from "@/types/Dto";
import { BASE_URL_BLOG } from "../constants/baseUrl";
import axios from "./axiosInstance";

interface IBlogApi {
  create(request: BlogDto): Promise<{ statusCode: number; data: BlogDto }>;
  getBlogs(): Promise<{ statusCode: number; data: BlogDto[] }>;
}

export const BlogApi: IBlogApi = {
  async create(request: BlogDto) {
    const res = await axios.post<{ statusCode: number; data: BlogDto }>(
      `${BASE_URL_BLOG}/create`,
      request
    );
    return res.data;
  },

  async getBlogs() {
    const res = await axios.post<{ statusCode: number; data: BlogDto[] }>(
      `${BASE_URL_BLOG}/find-all`
    );
    return res.data;
  },
  
};