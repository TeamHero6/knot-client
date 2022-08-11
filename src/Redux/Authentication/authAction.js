import { authSlice } from "./slice";

const { actions: slice } = authSlice;

//Login action
export const loginAction = (loggerInfo) => (dispatch) => {
    dispatch(slice.setLogin(loggerInfo));
};
