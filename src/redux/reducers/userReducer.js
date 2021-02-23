import { ADD_USER } from "../constant";

const initialState = [];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userDetail: [...state.payload, action.payload],
      };

    default:
      return state;
  }
};
