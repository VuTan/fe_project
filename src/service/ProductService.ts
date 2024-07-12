import axios from "./axios";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../models/Product.modal";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3031/"}),
    endpoints: (build) => ({
        getAllProduct: build.query<Product[], void>({
            query: () => 'product'

        }),
        getProductPerPage: build.query<Product[], { page: number; perPage: number }>({
            query: ({page, perPage}) => ({
                url: 'product',
                params: {
                    _page: page,
                    _limit: perPage,
                },
            }),
        }),
        getProductById: build.query<Product, { id: string | undefined }>({
            query: ({id}) => ({
                url: `product/${id}`,
            }),
        }),
        getProductSortBy: build.query<Product[], { sort: string, lowToHigh: boolean, page: number, perPage: number }>({
            query: ({sort, lowToHigh, page, perPage}) => ({
                url: '/product', // Assuming your API endpoint for sorting
                params: {
                    _sort: sort, // Adjust field for sorting
                    _order: lowToHigh ? 'asc' : 'desc',
                    _page: page,
                    _limit: perPage,
                },
            }),
        }),
        searchProduct: build.query<Product[], { search: string }>({
            query: ({ search }) => {
                if (search) {
                    return `/product?Name_like=${search}`; // Construct URL with search term
                } else {
                    return ''; // Or return an empty string to avoid unnecessary rendering
                }
            },
        }),
    })
})

const fetchProductSortByPrice = (lowToHigh: boolean) => {
    return axios.get(`/product?product?_sort=Price&_order=${lowToHigh ? "asc" : "desc"}`);
}

export const {
    useGetProductPerPageQuery,
    useGetProductSortByQuery,
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useSearchProductQuery
} = productApi
