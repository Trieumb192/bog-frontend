import { PhilosophyDto } from './../types/Dto';
import { BASE_URL_PHILOSOPHY } from "../constants/baseUrl";
import axios from "./axiosInstance";

interface IPhilosoPhyApi {
  create(request: PhilosophyDto): Promise<{ statusCode: number; message: string }>;
  get(): Promise<{ statusCode: number; data: PhilosophyDto[] }>;
}

export const PhilosoPhyApi: IPhilosoPhyApi = {
  async create(request: PhilosophyDto) {
    const res = await axios.post<{ statusCode: number; message: string }>(`${BASE_URL_PHILOSOPHY}/create`,request);
    return res.data;
  },

  async get() {
    const res = await axios.post<{ statusCode: number; data: PhilosophyDto[] }>(`${BASE_URL_PHILOSOPHY}/find-all`);
    return res.data;
  },

};
