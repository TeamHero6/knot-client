import { combineReducers } from "redux";
import authReducer from "../Redux/Auth/AuthReducer";
import NotificationReducer from "../Redux/notification/NotificationReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    notification: NotificationReducer,
});
