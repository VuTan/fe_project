import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cart.reducers";
import favoriteReducer from "./favorite.reducers";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch