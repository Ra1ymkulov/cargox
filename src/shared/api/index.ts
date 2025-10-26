import axios from "axios";

export const USER_API = axios.create({
  baseURL: "http://localhost:5000/api/user",
});

export const AUTH_API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const ORDER_API = axios.create({
  baseURL: "http://localhost:5000/api/order",
});

export const SERVICE_API = axios.create({
  baseURL: "http://localhost:5000/api/user",
});
