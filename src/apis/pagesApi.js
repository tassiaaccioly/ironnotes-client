import axios from "axios";

const DEV_API = "http://localhost:1234/api";
const PROD_API = "https://ironnotes.herokuapp.com/api";

const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? PROD_API : DEV_API,
});

const storedUser = localStorage.getItem("loggedInUser");

const loggedInUser = JSON.parse(storedUser || '""');

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  return config;
});

export default api;
