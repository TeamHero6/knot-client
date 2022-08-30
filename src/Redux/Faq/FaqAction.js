export const getAllFaq = (text) => {
    return {
        type: "FAQ",
        payload: text,
    };
};
