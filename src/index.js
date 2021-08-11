import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./css/index.css";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import MainRouter from "./utilities/MainRouter";

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MainRouter />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </Provider>,
  document.getElementById("root")
);
