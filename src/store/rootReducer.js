import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../Redux/Authentication/slice";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
});
