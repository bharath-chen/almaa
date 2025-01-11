import create from "./http-service";

export interface NatProduct {
  natprod_id: string;
  natcode: string;
  name: string;
  status: string;
  created_date: string;
  tagline: string;
  image: string;
}

export default create("?gofor=natprodlist");
