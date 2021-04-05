import { combineReducers } from "redux";
import homePage from "./homePage"
import timeTable from "./timeTable"
import myAccount from "./myAccount"

export default combineReducers({
    homePage,
    timeTable,
    myAccount
})