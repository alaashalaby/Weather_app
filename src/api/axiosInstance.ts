import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL as string;
const axiosInstance = axios.create({
    baseURL: apiURL,
    params: {
        units: "metric",
    }
});
axiosInstance.interceptors.response.use((response) => response.data);
export default axiosInstance;
