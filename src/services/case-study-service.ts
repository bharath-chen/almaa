import create from "./http-service";

export interface ICaseStudy {
  case_study_id: string;
  title: string;
  description: string;
  case_study_url: string;
  date: null;
  status: string;
}

export default create("?gofor=casestudylist");
