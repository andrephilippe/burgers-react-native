import { SET_ITEM } from "../constants/assemblerConstants";

export const setItem = (item, callBack) => {
    return dispatch => {
        dispatch({
            type: SET_ITEM,
            payload: item
        });
        callBack();
    }
}