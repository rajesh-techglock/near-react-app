import { combineReducers } from "redux";
import { auth } from "./../redux/auth/reducer";
const reducers = combineReducers({
  auth,
});
export default reducers;
