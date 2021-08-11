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
      </div>
  );
}

export default RegisterSuccess;
