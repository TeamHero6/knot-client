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
        case "UPDATEPROFILEPHOTO":
            return {
                ...state,
                loggerInfo: {
                    ...state.loggerInfo,
                    userPhoto: action.payload,
                },
            };
        case "UPDATENAME":
            return {
                ...state,
                loggerInfo: {
                    ...state.loggerInfo,
                    name: action.payload,
                },
            };

        default:
            return state;
    }
};

export default authReducer;
