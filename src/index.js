import React from "react";
import ReactDOM from "react-dom";


import {Provider} from "react-redux"
import { store } from "./store"

import "./css/index.css"
import Navigation from "./components/Navigation";


export function App() {
    return (
       <Navigation/>
    );
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root")
);
