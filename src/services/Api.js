import axios from "axios";

const Api = axios.create({
  baseURL: "https://anton.learndev.my.id/api",
  // baseURL: "http://fp-backend-shop.test/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default Api;
