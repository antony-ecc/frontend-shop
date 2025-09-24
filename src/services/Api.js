import axios from "axios";

const Api = axios.create({
  baseURL: "https://test.learndev.my.id/api",
  // baseURL: "http://backend-shop.test/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default Api;
