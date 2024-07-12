import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cart.reducers";
import favoriteReducer from "./favorite.reducers";
import userReducer from "./user.reducer";
import {productApi} from "../service/ProductService";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
        user: userReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch