import { combineReducers } from "redux";
import loaderReducer from "../reducers/loaderReducer";

const reducers = combineReducers({
  loader: loaderReducer,
});

export default reducers;

export type AppState = ReturnType<typeof reducers>;
