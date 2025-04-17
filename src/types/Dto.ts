import moment from "moment";

export interface ImageDto {
  id: number;
  url: string;
  tag: string;
  type: string;
  createdAt?: string;
}

export interface ImageRqDto {
  url: string;
  tag: string;
  type: string;
}

export interface PhilosophyDto {
  id: number;
  content: string;
  author: string;
}

export interface BlogDto {
  id: number;
  content: string;
  title: string;
  createdAt: moment.Moment;
  updatedBy: string;
}


