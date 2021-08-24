import React from "react";
import LandingPage from "./landingPage";
import HomePage from "./homePage";
import LoginPage from "../LoginPage";

const Container = () => {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <HomePage /> : <LoginPage />}</>;
};

export default Container;
