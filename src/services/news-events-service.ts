import { MetaTag } from "shared/MetaTags/MetaTags";
import create from "./http-service";

export interface INewsAndEvents extends MetaTag {
  event_id: string;
  title: string;
  description: string;
  event_date: string;
  status: string;
  image_url: string;
  url_name?: string;
}

export default create(null);
