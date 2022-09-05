import axios from "axios";
import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILED
} from "./ItemsConstant";

export const getAllItems = () => async (dispatch) => {
    dispatch({ type: GET_ITEMS_REQUEST });
    try {
        const res = await axios.get("https://knot-business-solution-server.herokuapp.com/addProduct");
        dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: GET_ITEMS_FAILED, payload: error.message });
    }
};