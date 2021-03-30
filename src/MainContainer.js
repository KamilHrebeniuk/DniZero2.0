import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { TimeTable } from "./TimeTable";
import { MyAccount } from "./MyAccount";

export function MainContainer() {
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
            <navigation>
                <div><NavLink exact to="/">Strona główna</NavLink></div>
                <div><NavLink to="/TimeTable">Harmonogram</NavLink></div>
                <div><NavLink to="/MyAccount">Moje konto</NavLink></div>
            </navigation>
        </BrowserRouter>
    );
}