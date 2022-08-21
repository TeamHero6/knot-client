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

export const updatePhoto = (imgLink) => {
    return {
        type: "UPDATEPROFILEPHOTO",
        payload: imgLink,
    };
};

export const updateName = (name) => {
    return {
        type: "UPDATENAME",
        payload: name,
    };
};
