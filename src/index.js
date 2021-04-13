import React from "react";
import ReactDOM from "react-dom";


import { Provider } from "react-redux"
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { store } from "./store"

import PopUp from "./components/PopUp/popUp"
// import HomePage from "./components/HomePage/homePage";
import TimeTable from "./components/TimeTable/timeTable";
import MyAccount from "./components/MyAccount/myAccount";


import "./css/index.css"
import "reactjs-popup/dist/index.css"

import ico_home from "./images/icons/home.png"
import ico_timetable from "./images/icons/timetable.png"
import ico_account from "./images/icons/account.png"


export function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                {/*<HomePage/>*/}
                <PopUp/>
            </Route>
            <Route path="/TimeTable">
                <TimeTable/>
            </Route>

            <nav className="navigation">
                <div className="navigation-element">
                    <NavLink exact to="/"><img className="navigation-icon" src={ico_home} alt="Home"/></NavLink>
                </div>
                <div className="navigation-element">
                    <NavLink to="/TimeTable"><img className="navigation-icon" src={ico_timetable} alt="Timetable"/></NavLink>
                </div>
                <div className="navigation-element" >
                    <NavLink exact to="/"><img onClick={onClickHandler} id="myaccount" className="navigation-icon" src={ico_account} alt="Account"/></NavLink>
                        <MyAccount guardian_picture={ico_home} name="test" guardian_name="Kamil Hrebeniuk" guardian_number="123456789"/>
                    <br/>
                    <span>Moje konto</span>
                </div>
            </nav>
        </BrowserRouter>
    );
}
function onClickHandler(){
    const accountbtn = document.getElementById("myaccount");
    const accountwindow = document.getElementsByClassName("account")[0];
    const accountclose = document.getElementsByClassName("account-close_button")[0];

    accountbtn.onclick = function(){
        accountwindow.style.display= "flex";
    }

    window.onclick = function (event){
        if (event.target === accountwindow){
            accountwindow.style.display = "none";
        }
    }
    accountclose.onclick = function(){
        accountwindow.style.display= "none";
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);
