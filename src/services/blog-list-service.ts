import create from "./http-service";

export interface IBlog {
  blog_id: string;
  title: string;
  content: string;
  author: string;
  published_date: string;
  status: string;
}

export default create("?gofor=blogslist");
