import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

const initialState = {
  isAuth: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      state = {
        ...state,
        isAuth: true,
      };
      break;
    case SET_UNAUTHENTICATED:
      state = {
        ...state,
        isAuth: false,
      };
      break;
    default:
      return state;
  }

  return state;
};

export default userReducer;
