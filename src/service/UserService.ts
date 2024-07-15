import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "../models/User.modal";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3031/"}),
    endpoints: (build) => ({
        getUser: build.query <User, string>({
            query: (string) => `user?email=${string}`,
            transformResponse: (response: any) => {
                return response[0];
            }
        }),
        registerUser: build.mutation<User, User>({
            query(body) {
                return {
                    url: 'user',
                    method: 'POST',
                    body
                };
            },
        }),
    })
});

export const {useGetUserQuery, useRegisterUserMutation} = userApi
