import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {buyProduct} from "../models/Product.modal";
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
    name: "product",
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

            localStorage.setItem("cartProduct", JSON.stringify(state.cartArr));
        },
        decrementQuantity: (state, action: PayloadAction<buyProduct>) => {
            state.cartArr.map((product, index) => {
                if (product.id === action.payload.id && product.sizeBuy === action.payload.sizeBuy) {
                    if (product.quantity === 1) {
                        const updatedCartArr = state.cartArr.filter(
                            (product) => product.id !== action.payload.id || product.sizeBuy !== action.payload.sizeBuy
                        );
                        state.cartArr = updatedCartArr;
                        toast.error(`Remove ${action.payload.Name} to cart`, {
                            position: "bottom-left"
                        });
                    } else {
                        product.quantity -= 1
                    }
                }
            })

            localStorage.setItem("cartProduct", JSON.stringify(state.cartArr));
        },
        incrementQuantity: (state, action: PayloadAction<buyProduct>) => {
            state.cartArr.map((product) => {
                if (product.id === action.payload.id && product.sizeBuy === action.payload.sizeBuy) {
                    product.quantity += 1;
                }
            })

            localStorage.setItem("cartProduct", JSON.stringify(state.cartArr));
        },
        getTotals: (state) => {
            let {total, quantity} = state.cartArr.reduce((cartTotal, cartProduct) => {
                const {Price, quantity} = cartProduct;
                const productTotal = +Price * quantity;

                cartTotal.total += productTotal;
                cartTotal.quantity += quantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0,
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

            localStorage.setItem("cartProduct", JSON.stringify(state.cartArr));
        }
    }
})

const cartReducer = cartSlice.reducer
export const {addProduct, deleteProduct, decrementQuantity, incrementQuantity, getTotals} = cartSlice.actions
export default cartReducer;