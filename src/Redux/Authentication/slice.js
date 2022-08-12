import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuth: false,
        loggerInfo: null,
    },
    reducers: {
        setLogin: (state, action) => {
            state.isAuth = true;
            state.loggerInfo = action.payload;
        },
    },
});

console.log("auth", authSlice);
