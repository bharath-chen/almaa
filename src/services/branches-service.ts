import create from "./http-service";

export interface IBranch {
  branch_id: string;
  branch_name: string;
  location: string;
  contact_number: string;
  status: string;
  map_link: string;
}

export default create("?gofor=brancheslist");
