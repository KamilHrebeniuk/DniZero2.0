import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { store } from "./store"

import HomePage from "./components/HomePage/homePage";
import TimeTable from "./components/TimeTable/timeTable";
import MyAccount from "./components/MyAccount/myAccount";

import "./css/index.css"

import ico_home from "./images/icons/home.png"
import ico_timetable from "./images/icons/timetable.png"
import ico_account from "./images/icons/account.png"

export function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/TimeTable">
                <TimeTable/>
            </Route>
            <Route path="/MyAccount">
                <MyAccount/>
            </Route>
            <nav className="navigation">
                <div className="navigation-element">
                    <NavLink exact to="/"><img className="navigation-icon" src={ico_home} alt="Home"/></NavLink>
                </div>
                <div className="navigation-element">
                    <NavLink to="/TimeTable"><img className="navigation-icon" src={ico_timetable} alt="Timetable"/></NavLink>
                </div>
                <div className="navigation-element">
                    <NavLink to="/MyAccount"><img className="navigation-icon" src={ico_account} alt="Account"/></NavLink>
                </div>
            </nav>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);