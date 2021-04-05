import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { store } from "./store"
import HomePage from "./components/HomePage/homePage";
import TimeTable from "./components/TimeTable/timeTable";
import MyAccount from "./components/MyAccount/myAccount";
import "./css/index.css"

export function App() {
    return (
        <BrowserRouter>
            <section className="HomePage">
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/TimeTable">
                    <TimeTable/>
                </Route>
                <Route path="/MyAccount">
                    <MyAccount/>
                </Route>
            </section>
            <nav>
                <div><NavLink exact to="/">Strona główna</NavLink></div>
                <div><NavLink to="/TimeTable">Harmonogram</NavLink></div>
                <div><NavLink to="/MyAccount">Moje konto</NavLink></div>
            </nav>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);