const initialState = {
    loggerInfo: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                loggerInfo: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                loggerInfo: null,
            };

        default:
            return state;
    }
};

export default authReducer;
