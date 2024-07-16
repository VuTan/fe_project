import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../models/Product.modal";

export const productApi = createApi({
    reducerPath: 'productApi',
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3031/"}),
    endpoints: (build) => ({
        getAllProduct: build.query<Product[], void>({
            query: () => 'product'
        }),
        getLengthProduct: build.query<Product[], string>({
            query: (string) => ({
                url: `/product?${string}`,
                transformResponse: (response: Product[]) => {
                    return response.length;
                },
            }),
        }),
        getProducts: build.query<Product[], number>({
            query: (page = 1) => `product?_page=${page}&_limit=10`,
        }),
        getProductById: build.query<Product, string>({
            query: (string) => ({
                url: `product/${string}`,
            }),
        }),
        getProductFilter: build.query<Product[], string>({
            query: (string) => ({
                url: `/product?${string}`
            }),
        }),
        getProductFilterPerPage: build.query<Product[], { query: string, page: number, limit: number }>({
            query: ({query, page, limit}) => ({
                url: `/product?${query}&_page=${page}&_limit=${limit}`
            }),
            providesTags(result) {
                if (result) {
                    const final = [...result.map(({id}) => ({type: "Product" as const, id})), {
                        type: "Product" as const,
                        id: "List"
                    }]
                    return final;
                }
                return [{type: "Product" as const, id: 'List'}]
            }
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
            invalidatesTags: (result, error, body) => [{type: "Product", id: "List"}]
        }),
        getRandomProducts: build.query <Product[], number>({
            query: (count) => {
                return {
                    url: `products?_limit=${count}`, // Endpoint để lấy 'count' sản phẩm ngẫu nhiên
                    transformResponse: (response: Product[]) => {
                        // Trả về một mảng các sản phẩm ngẫu nhiên từ danh sách
                        const shuffled = response.sort(() => 0.5 - Math.random());
                        return shuffled.slice(0, count);
                    },
                };
            },
        }),
    })
})

export const {
    useGetProductFilterQuery,
    useGetProductByIdQuery,
    useSearchProductQuery,
    useAddProductMutation,
    useGetProductFilterPerPageQuery,
    useGetRandomProductsQuery
} = productApi
