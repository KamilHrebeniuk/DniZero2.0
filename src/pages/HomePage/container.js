import React from "react";
import HomePage from "./homePage";
import LoginPage from "./loginPage";
import { bindActionCreators } from "redux";
import loginActions from "../../actions/HomePage/actions";
import loginTypes from "../../actions/HomePage/types";
import { connect } from "react-redux";

const Container = ({ logIn, logOut, loginState }) => {
  return (
    <>
      {loginState === loginTypes.logged ? (
        <HomePage logOut={logOut} />
      ) : (
        <LoginPage logIn={logIn} />
      )}
    </>
  );
};

const putActionsToProps = (dispatch) => {
  return {
    logIn: bindActionCreators(loginActions.logIn, dispatch),
    logOut: bindActionCreators(loginActions.logOut, dispatch),
  };
};

const putStateToProps = (state) => {
  return {
    loginState: state.homePage.loginState,
  };
};

export default connect(putStateToProps, putActionsToProps)(Container);
