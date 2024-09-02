import create from "./http-service";

export interface NatProduct {
  natprod_id: string;
  name: string;
  status: string;
  created_date: string;
}

export default create("?gofor=natprodlist");
