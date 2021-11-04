import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const API = axios.create({
    baseURL: BASE_URL,
});

export default API;