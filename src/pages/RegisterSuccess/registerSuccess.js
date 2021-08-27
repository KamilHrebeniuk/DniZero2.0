import React from "react";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

const RegisterSuccess = () => {
  return (
      <div className="register">
        <p className="title">Rejestracja udana!</p>
        <div className="register-close">
          <Link to="/">
            <img className="register-close-icon" src={exit} alt={"Exit"} />
          </Link>
        </div>
        <div className="register-content">
            <p className="register-info-title">Zapisałeś się na liste rezerwową</p>
            <p className="register-info-email-info">Cześć! Niestety nasze statki są pełne i nie pomieszczą już więcej poszukiwaczy przygód. Ale nie martw się! Damy Ci znać, jeżeli ktoś wypadnie za burtę</p>
        </div>
      </div>
  );
}

export default RegisterSuccess;
