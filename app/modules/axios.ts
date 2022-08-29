import axios from "axios";

export const api = axios.create({
  baseURL: "https://yts.mx/api/v2/",
});
