import { combineReducers } from "redux";
import authReducer from "../Redux/Auth/AuthReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
});
