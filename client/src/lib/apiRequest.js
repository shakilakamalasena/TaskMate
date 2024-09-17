import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://taskmate-api.vercel.app/api",
    withCredentials: true,
});

export default apiRequest;
