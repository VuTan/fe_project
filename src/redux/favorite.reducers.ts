import {Product} from "../models/Product.modal";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FavoriteSate {
    favArr: Product[],
}

const initialState: FavoriteSate = {
    favArr: JSON.parse(localStorage.getItem("favorite") as string) || [],
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Product>) => {
            state.favArr.push(action.payload)
        },

    }
})

const favoriteReducer = favoriteSlice.reducer
export const {addFavorite} = favoriteSlice.actions
export default favoriteReducer;