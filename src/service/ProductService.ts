import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../models/Product.modal";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3031/"}),
    endpoints: (build) => ({
        getAllProduct: build.query<Product[], void>({
            query: () => 'product'

        }),
        getProducts: build.query<Product[], number>({
            query: (page = 1) => `product?_page=${page}&_limit=10`,
        }),
        getProductById: build.query<Product, string>({
            query: (string) => ({
                url: `product/${string}`,
            }),
        }),
        getProduct: build.query<Product[], string>({
            query: (string) => ({
                url: `/product?${string}`
            }),
        }),
        searchProduct: build.query<Product[], string>({
            query: (string) => {
                if (string) {
                    return `/product?Name_like=${string}`; // Construct URL with search term
                } else {
                    return ''; // Or return an empty string to avoid unnecessary rendering
                }
            },
        }),
        addProduct: build.mutation<Product, Omit<Product, "id">>({
            query(body) {
                return {
                    url: 'product',
                    method: 'POST',
                    body
                };
            },
        }),
    })
})

export const {
    useLazySearchProductQuery,
    useGetProductsQuery,
    useGetProductQuery,
    useGetAllProductQuery,
    useGetProductByIdQuery,
    useSearchProductQuery,
    useAddProductMutation
} = productApi
