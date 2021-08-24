import React from "react";
import LandingPage from "./landingPage";
import HomePage from "./homePage";

const Container = () => {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <HomePage /> : <LandingPage />}</>;
};

export default Container;
