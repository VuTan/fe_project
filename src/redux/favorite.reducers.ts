import { Product } from "../models/Product.modal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
    favArr: Product[];
}

const initialState: FavoriteState = {
    favArr: JSON.parse(localStorage.getItem("favorite") as string) || [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Product>) => {
            state.favArr.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<Product>) => {
            state.favArr = state.favArr.filter(product => product.id !== action.payload.id);
        },
    },
});

const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteReducer;
