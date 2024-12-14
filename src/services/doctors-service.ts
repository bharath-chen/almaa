import create from "./http-service";

export interface IDoctor {
  doctor_id: string;
  name: string;
  specialization: string;
  qualification: string;
  profile_picture: string;
  experience: string;
  highlights: string;
  status: string;
  mobile: string;
  whatsapp: string;
}

export default create("?gofor=doctorslist");
