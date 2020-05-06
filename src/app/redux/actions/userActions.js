import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

export const setAuth = (data) => (dispatch) => {
  if (data) {
    dispatch({ type: SET_AUTHENTICATED });
  } else {
    dispatch({ type: SET_UNAUTHENTICATED });
  }
};
