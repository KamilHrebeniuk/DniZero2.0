import { combineReducers } from "redux";
import general from "./general"
import homePage from "./homePage"
import timeTable from "./timeTable"
import myAccount from "./myAccount"

export default combineReducers({
    general,
    homePage,
    timeTable,
    myAccount
})