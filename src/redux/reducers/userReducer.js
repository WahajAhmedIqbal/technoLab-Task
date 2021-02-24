import { ADDUSER } from "../constant";

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
