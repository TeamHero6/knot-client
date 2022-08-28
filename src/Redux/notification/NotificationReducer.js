const initialState = {
    isOpen: false,
};

const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NOTIFICATION":
            return {
                ...state,
                isOpen: action.payload,
            };

        default:
            return state;
    }
};

export default NotificationReducer;
