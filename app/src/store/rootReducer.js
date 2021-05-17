import { combineReducers } from "redux";

import users from "../pages/EmployeesPage/reducers";

const rootReducer = combineReducers({
  users
});

export default rootReducer;
