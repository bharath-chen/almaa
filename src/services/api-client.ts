import axios, { CanceledError } from "axios";

export default axios.create({ baseURL: "https://almaherbal.top/App/api.php" });

export { CanceledError };
