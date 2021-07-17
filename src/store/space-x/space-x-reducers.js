import { FETCH_ROCKETS_LAUNCHES_SUCCESS } from "./space-x-types";

export const initialSpaceXState = {
  rockets: [],
  launches: []
};

export function SpaceXReducer(state = initialSpaceXState, action) {
  switch (action.type) {
    case FETCH_ROCKETS_LAUNCHES_SUCCESS:
      return {
        ...state,
        rockets: action.rockets,
        launches: action.launches
      };
    default:
      return state;
  }
}
