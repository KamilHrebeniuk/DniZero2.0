import React, { useState } from "react";
import Counselor from "./counselor";
import Classes from "./classes";
import Teams from "./teams";
import {getCounselor} from "../../actions/MyAccount/userActions"

export default function MyAccount({qr_code, user_code }) {
  const [currentTab, setCurrentTab] = useState("counselor");

  const accountContent = () => {
    switch (currentTab) {
      case "counselor": {

        if(localStorage.getItem("counselor") === null ){
          getCounselor();
          console.log("Nie bylo w local storage");
        }
        return <Counselor />;
      }
      case "classes": {
        return <Classes/>
      }
      case "teams": {
        return <Teams/>;
      }
      case "actions": {
        return <h1>Historia Akcji</h1>;
      }
      default: {
        return <Counselor />;
      }
    }
  };

  return (
    <div className="account">
      <div className="account-content">{accountContent()}</div>
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
        <button
          className="account-button"
          onClick={() => setCurrentTab("actions")}
        >
          <span>Historia akcji</span>
        </button>
        <button className="account-button" id="close">
          <span>Zamknij</span>
        </button>
        <img className="qr-code" src={qr_code} alt={user_code} />
        <div className="account-number">
          <p>Uczestnik: {user_code}</p>
        </div>
      </div>
    </div>
  );
}

