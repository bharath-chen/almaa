import create from "./http-service";

export interface INewsAndEvents {
  event_id: string;
  title: string;
  description: string;
  event_date: string;
  status: string;
}

export default create("?gofor=newseventslist");
