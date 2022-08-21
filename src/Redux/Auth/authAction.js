export const authAction = (loggerInfo) => {
    return {
        type: "LOGIN",
        payload: loggerInfo,
    };
};

export const logout = () => {
    return {
        type: "LOGOUT",
    };
};
