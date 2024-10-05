import axios, { CanceledError } from "axios";
import { environment } from "../environments/environment.prod";

export default axios.create({ baseURL: `${environment.apiUrl}/api.php` });

export { CanceledError };
