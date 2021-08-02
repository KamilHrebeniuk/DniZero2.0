import { combineReducers } from "redux";
import general from "./general";
import popUp from "./popUp";
import homePage from "./homePage";
import timeTable from "./timeTable";
import myAccount from "./myAccount";

export default combineReducers({
  general,
  popUp,
  homePage,
  timeTable,
  myAccount,
});
