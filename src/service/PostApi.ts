import { BASE_URL_POST } from "../constants/baseUrl";
import { Post } from "../types/Post";
import axios from "./axiosInstance";

export const getPosts = async (): Promise<Post[]> => {
  const res = await axios.get<Post[]>(BASE_URL_POST);
  return res.data;
};

export const createPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const res = await axios.post<Post>(BASE_URL_POST, post);
  return res.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL_POST}/${id}`);
};