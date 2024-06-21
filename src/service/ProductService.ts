import axios from "./axios";

const fetchAllProduct = ()=>{
        return axios.get("/product");
}

export {fetchAllProduct};