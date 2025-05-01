import { MetaTag } from "shared/MetaTags/MetaTags";
import create from "./http-service";

export interface ICaseStudy extends MetaTag {
  case_study_id: string;
  case_details: string;
  title: string;
  diagnosis: string;
  description: string;
  case_study_url: string;
  image_url: string;
  date: null;
  status: string;
  result: string;
  url_name?: string;
}

export default create(null);
