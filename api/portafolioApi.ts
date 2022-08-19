import axios from "axios";

const portafolioApi = axios.create({
  baseURL: "/api",
});

export default portafolioApi;
