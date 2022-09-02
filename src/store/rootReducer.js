import { combineReducers } from "redux";
import authReducer from "../Redux/Auth/AuthReducer";
import NotificationReducer from "../Redux/notification/NotificationReducer";
import ItemsReducer from "../Redux/SalesManagement/SalesItems/ItemsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    notification: NotificationReducer,
    items: ItemsReducer,
});
