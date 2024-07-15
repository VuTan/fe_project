import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {User} from "../models/User.modal";

export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            const userJSON = JSON.stringify(action.payload);

            const expiresAt = new Date();
            expiresAt.setMinutes(expiresAt.getMinutes() + 10);
            Cookies.set("user", userJSON, {expires: expiresAt, path: "/"});
        },
        logout: (state) => {
            state.user = null;
            Cookies.remove("user");
        },
    },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
