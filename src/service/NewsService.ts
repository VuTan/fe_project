import axios from "./axios";

const fetchAllNews = () => {
    return axios.get("/news");
}

export {fetchAllNews}