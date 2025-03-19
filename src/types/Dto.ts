export interface ImageDto {
  id: number;
  url: string;
  tag: string;
  type: string;
  createdAt?: string;
}

export interface PhilosophyDto {
  id?: number;
  content: string;
  author: string;
}