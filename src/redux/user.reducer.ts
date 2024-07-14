import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../models/User.modal";

export interface UserState {
    user: User | null,
}

const initialState: UserState = {
    user: JSON.parse(localStorage.getItem("user") as string) || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logout: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
})

const userReducer = userSlice.reducer
export const {login, logout} = userSlice.actions
export default userReducer;
