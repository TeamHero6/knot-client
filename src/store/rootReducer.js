import { combineReducers } from "redux";
import authReducer from "../Redux/Auth/AuthReducer";
import FaqReducer from "../Redux/Faq/FaqReducer";
import NotificationReducer from "../Redux/notification/NotificationReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    notification: NotificationReducer,
    faq: FaqReducer,
});
