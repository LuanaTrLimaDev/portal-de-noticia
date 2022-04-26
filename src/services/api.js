import axios from "axios";

const api = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines"
})

export default api