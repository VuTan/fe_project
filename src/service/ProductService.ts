import axios from "./axios";


const fetchAllProduct = () => {
    return axios.get("/product");
}

const fetchProductById = (id: string | undefined) => {
    return axios.get(`/product?id=${id}`);
}


const fetchProductPerPage = (page: number, perPage: number) => {
    return axios.get(`/product?_page=${page}&_limit=${perPage}`);
}

const fetchProductSortByPrice = (lowToHigh: boolean) => {
    return axios.get(`/product?product?_sort=Price&_order=${lowToHigh ? "asc" : "desc"}`);
}



export {fetchAllProduct, fetchProductPerPage, fetchProductById};