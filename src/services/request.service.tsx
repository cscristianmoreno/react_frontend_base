import axios, { AxiosInstance } from "axios";

const RequestService: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080"
});

export default RequestService;