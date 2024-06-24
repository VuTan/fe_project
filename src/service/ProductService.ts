import axios from "./axios";


const fetchAllProduct = () => {
    return axios.get("/product");
}

const fetchProductById = (id: string | undefined) => {
    return axios.get(`/product?id=${id}`);
}


const fetchProductPerPage = (page: number, perPage: number) => {
    return axios.get(`/product?_page=${page}&_per_page=${perPage}`);
}

const fetchProductSortByPrice = () => {
    return axios.get(`/product?product?_sort=Price  `);
}

export {fetchAllProduct, fetchProductPerPage, fetchProductById};