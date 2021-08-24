import React from "react";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

const RegisterFail = () => {
  return (
    <div className="register">
      <p className="title">Rejestracja nie udana!</p>
      <div className="register-close">
        <Link to="/">
          <img className="register-close-icon" src={exit} alt={"Exit"} />
        </Link>
      </div>
      <div className="register-content">
        <p className="register-info-title">Coś poszło nie tak..</p>
        <p className="register-info-email-info">
          Wystąpił nieoczekiwany błąd, spróbuj ponownie za jakiś czas.
        </p>
        <p id="Error"></p>
      </div>
    </div>
  );
};

export default RegisterFail;
