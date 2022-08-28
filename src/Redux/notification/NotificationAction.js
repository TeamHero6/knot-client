export const NotifiyStatusUpdate = (status) => {
    return {
        type: "NOTIFICATION",
        payload: status,
    };
};
