import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {buyProduct} from "../../models/Product.modal";
import {toast} from "react-toastify";

export interface CartState {
    cartArr: buyProduct[],
    cartTotalQuantity: number,
    cartTotalAmount: number
}

const initialState: CartState = {
    cartArr: JSON.parse(localStorage.getItem("cartProduct") as string) || [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: "prodcut",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<buyProduct>) => {
            const productIndex = state.cartArr.findIndex((products) =>
                products.id === action.payload.id && products.sizeBuy === action.payload.sizeBuy
            )
            if (productIndex >= 0) {
                state.cartArr[productIndex].quantity += 1;
                toast.info(`Increased ${action.payload.Name} quantity`, {
                    position: "bottom-left"
                })
            } else {
                state.cartArr.push(action.payload)
                toast.success(`Add ${action.payload.Name} to cart`, {
                    position: "bottom-left"
                })
            }
            state.cartTotalQuantity += 1;
            // const numberWithCommas = product.Price;
            // const regex = /,/g;
            // const numberWithoutCommas = numberWithCommas.replace(regex, "");
            // const actualNumber = parseFloat(numberWithoutCommas);
            // state.cartTotalAmount += actualNumber;

            localStorage.setItem("cartProduct", JSON.stringify(state.cartArr));
        },
        deleteProduct: (state, action: PayloadAction<buyProduct>) => {
            const updatedCartArr = state.cartArr.filter(
                (product) => product.id !== action.payload.id || product.sizeBuy !== action.payload.sizeBuy
            );

            state.cartArr = updatedCartArr;

            toast.error(`Remove ${action.payload.Name} to cart`, {
                position: "bottom-left"
            });

            localStorage.setItem("", JSON.stringify(state.cartArr));
        }
    }
})

const cartReducer = cartSlice.reducer
export const {addProduct, deleteProduct} = cartSlice.actions
export default cartReducer;