import { combineReducers } from "redux";

import AuthReducer from "./auth/auth-reducers";
import userReducers from "./user/user-reducers";
//import systemValuesReducer from './system-values/system-values-reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: userReducers,
  // systemValues: systemValuesReducer,
});

export default rootReducer;
