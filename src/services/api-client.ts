import axios from "axios";

export default axios.create({
  baseURL: "http://54.204.148.235:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
