import axios from "axios";
const token = window.localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: `https://backend.ezycart.shop/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
  withCredentials: true,
});

export default axiosInstance;
// https://backend.ezycart.shop/api/v1
// 
// http://localhost:8080/api/v1