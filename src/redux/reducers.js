import { combineReducers } from "redux";
import countReducer from "./example/countReducer";

export default combineReducers({
  example: countReducer,
});
