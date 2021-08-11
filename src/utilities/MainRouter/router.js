import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PopUp from "../../components/PopUp/popUp";
import PopUpTypes from "../../components/PopUp/types";
import IsMobile from "../../hooks/isMobile";

const MainRouter = () => {
  const isMobile = IsMobile();

  return (
    <>
      <HomePage />
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
    </>
  );
};

export default MainRouter;
