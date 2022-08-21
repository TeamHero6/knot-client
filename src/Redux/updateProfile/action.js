import { UPDATEIMAGE } from "./actionIdentifier";

export const updateImage = (image_link) => {
    return {
        type: UPDATEIMAGE,
        payload: image_link,
    };
};
