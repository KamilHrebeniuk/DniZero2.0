import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PopUp from "../../components/PopUp/popUp";
import PopUpTypes from "../../components/PopUp/types";
import IsMobile from "../../hooks/isMobile";
import loginTypes from "../../actions/HomePage/types";
import { connect } from "react-redux";

const MainRouter = ({ loginState }) => {
  const isMobile = IsMobile();



  return (
    <>
      <HomePage />
      {loginState === loginTypes.logged ? (
        <Route path="/TimeTable">
          {isMobile ? (
            <PopUp popUpContentType={PopUpTypes.popUpTimeTable} />
          ) : (
            <PopUp
              popUpContentType={PopUpTypes.popUpTimeTable}
              popUpWidth="1000px"
            />
          )}
        </Route>
      ) : null}
      {loginState === loginTypes.logged ? (
        <Route path="/MyAccount">
          {isMobile ? (
            <PopUp popUpContentType={PopUpTypes.popUpMyAccount} />
          ) : (
            <PopUp
              popUpContentType={PopUpTypes.popUpMyAccount}
              popUpWidth="700px"
            />
          )}
        </Route>
      ) : null}
      <Route path="/Register">
        {isMobile ? (
          <PopUp popUpContentType={PopUpTypes.popUpRegister} />
        ) : (
          <PopUp
            popUpContentType={PopUpTypes.popUpRegister}
            popUpWidth="650px"
          />
        )}
      </Route>
      <Route path="/Info">
        {isMobile ? (
          <PopUp popUpContentType={PopUpTypes.popUpInfo} />
        ) : (
          <PopUp popUpContentType={PopUpTypes.popUpInfo} popUpWidth="700px" />
        )}
      </Route>
      <Route path="/RegisterSuccess">
        {isMobile ? (
          <PopUp popUpContentType={PopUpTypes.popUpRegisterSuccess} />
        ) : (
          <PopUp
            popUpContentType={PopUpTypes.popUpRegisterSuccess}
            popUpWidth="700px"
          />
        )}
      </Route>
      <Route path="/RegisterFail">
        {isMobile ? (
          <PopUp popUpContentType={PopUpTypes.popUpRegisterFail} />
        ) : (
          <PopUp
            popUpContentType={PopUpTypes.popUpRegisterFail}
            popUpWidth="700px"
          />
        )}
      </Route>
      <Route path="/eventDescription/:id">
        {isMobile ? (
          <PopUp popUpContentType={PopUpTypes.popUpEventDescription} />
        ) : (
          <PopUp
            popUpContentType={PopUpTypes.popUpEventDescription}
            popUpWidth="1000px"
          />
        )}
      </Route>
    </>
  );
};

const putStateToProps = (state) => {
  return {
    loginState: state.homePage.loginState,
  };
};

export default connect(putStateToProps)(MainRouter);
