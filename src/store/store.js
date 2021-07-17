import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { initialSpaceXState, SpaceXReducer } from "./space-x/space-x-reducers";
import { initialUserState, UserReducer } from "./user/user-reducers";

export const initialState = {
  spaceX: initialSpaceXState,
  user: initialUserState
};

const rootReducer = combineReducers({
  spaceX: SpaceXReducer,
  user: UserReducer
});

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
