import React from "react";
import LandingPage from "./landingPage";
import HomePage from "./homePage";
import LoginPage from "../LoginPage";
import {isLoggedIn} from "../LoginPage/loginPage";

const Container = () => {

  return <>{isLoggedIn ? <HomePage /> : <LoginPage />}</>;
};

export default Container;
