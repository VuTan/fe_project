import {Product} from "../models/Product.modal";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

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
            const exist = state.favArr.find(product =>
                product.id === action.payload.id);

            if (!exist) {
                state.favArr.push(action.payload)
                toast.success(`Add ${action.payload.Name} to favorite`, {
                    position: "bottom-left"
                });
            } else
                toast.warning(`Add ${action.payload.Name} to favorite`, {
                    position: "bottom-left"
                });

            localStorage.setItem("favorite", JSON.stringify(state.favArr));
        },
        removeFavorite: (state, action: PayloadAction<Product>) => {
            const updatedFavArr = state.favArr.filter(
                (product) => product.id !== action.payload.id);

            state.favArr = updatedFavArr;

            toast.error(`Remove ${action.payload.Name} to favorite`, {
                position: "bottom-left"
            });

            localStorage.setItem("favorite", JSON.stringify(state.favArr));
        }

    }
})

const favoriteReducer = favoriteSlice.reducer
export const {addFavorite, removeFavorite} = favoriteSlice.actions
export default favoriteReducer;