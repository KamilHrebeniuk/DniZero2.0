import React from "react";
import LoginPage from "./loginPage";
import HomePage from "./homePage";

const Container = () => {
  const isLoggedIn = false;
  console.log("Container");

  return <>{isLoggedIn ? <HomePage /> : <LoginPage />}</>;
};

export default Container;
