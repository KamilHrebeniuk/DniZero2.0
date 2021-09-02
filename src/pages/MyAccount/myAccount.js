import React, { useState } from "react";
import Counselor from "./counselor";
import Classes from "./classes";
import Teams from "./teams";
import {getCounselor} from "../../actions/MyAccount/userActions"
import {resp} from "../HomePage/loginPage";
import {useHistory} from "react-router-dom";
import Contact from "./contact";
import Points from "./points";
import NightGame from "./NightGame";

export default function MyAccount({qr_code}) {
  const [currentTab, setCurrentTab] = useState("counselor");

  const accountContentUser = () => {
    switch (currentTab) {
      case "counselor": {

        if(localStorage.getItem("counselor") === null ){
          getCounselor();
        }
        return <Counselor />;
      }
      case "classes": {
        return <Classes/>
      }
      case "teams": {
        return <Teams/>;
      }
      default: {
        return <Counselor />;
      }
    }
  };
  const accountContentAdmin = () =>{
    switch (currentTab) {
      case "night": {
        return <NightGame />;
      }
      case "contact": {
        return <Contact />;
      }
      case "classes": {
        return <Classes/>
      }
      case "teams": {
        return <Teams/>;
      }
      case "points":{
        return <Points/>;
      }
      default: {
        return <Contact />;
      }
    }
  };
  const adminButtons = () =>{
    return(
        <>
          <div className="account-content">{accountContentAdmin()}</div>
          <div className="account-menu">
            <button
                className="account-button"
                onClick={() => setCurrentTab("night")}
            >
              <span>Gra nocna</span>
            </button>
            <button
                className="account-button"
                onClick={() => setCurrentTab("contact")}
            >
              <span>Kontakt</span>
            </button>
            <button
                className="account-button"
                onClick={() => setCurrentTab("points")}
            >
              <span>Dodanie punktów</span>
            </button>
            <button
                className="account-button"
                onClick={() => setCurrentTab("classes")}
            >
              <span>Warsztaty</span>
            </button>
            <button
                className="account-button"
                onClick={() => setCurrentTab("teams")}
            >
              <span>Drużyny</span>
            </button>

            <button className="account-button" onClick={clickHandle} id="close">
              <span>Zamknij</span>
            </button>
            <div className="account-number">
              <p>ID uczestnika: {user_code}</p>
            </div>
          </div>
        </>
    )
  };
  const userButtons = () => {
    return(
      <>
        <div className="account-content">{accountContentUser()}</div>
        <div className="account-menu">
          <button
              className="account-button"
              onClick={() => setCurrentTab("counselor")}
          >
            <span>Opiekun i kontakt</span>
          </button>
          <button
              className="account-button"
              onClick={() => setCurrentTab("classes")}
          >
            <span>Warsztaty</span>
          </button>
          <button
              className="account-button"
              onClick={() => setCurrentTab("teams")}
          >
            <span>Drużyny</span>
          </button>

          <button className="account-button" onClick={clickHandle} id="close">
            <span>Zamknij</span>
          </button>
          <img className="qr-code" src={qr_code} alt={user_code} />
          <div className="account-number">
            <p>ID uczestnika: {user_code}</p>
          </div>
        </div>
      </>
    )
  };
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }
  const user_code = resp['id'];
  return (
    <div className="account">
      {resp['role'] === 1 ? adminButtons() : userButtons()}
    </div>
  );
}

