import { SET_USERNAME } from "./user-types";

export const initialUserState = {
  username: ""
};

export function UserReducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.name
      };
    default:
      return state;
  }
}
