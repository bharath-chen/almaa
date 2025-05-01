import { MetaTag } from "../shared/MetaTags/MetaTags";

export interface BlogDetail extends MetaTag {
  blog_id: string;
  title: string;
  image_url: string;
  content: string;
  category: string | null;
  author: string;
  published_date: string;
  status: string;
}
