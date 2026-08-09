import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://api-devfolio-cms.antisolbd.com",
});
