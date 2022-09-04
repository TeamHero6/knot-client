import { GET_ITEMS_FAILED, GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from "./ItemsConstant";

const initialState = {
    isLoading: false,
    itemList: [],
    error: null
};

const ItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ITEMS_SUCCESS:
            return {
                isLoading: false,
                itemList: action.payload,
                error: null,
            };
        case GET_ITEMS_FAILED:
            return {
                isLoading: false,
                itemList: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default ItemsReducer;