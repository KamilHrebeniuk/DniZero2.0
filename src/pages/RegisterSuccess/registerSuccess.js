import React from "react";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

const RegisterSuccess = () => {
  return (
      <div className="register">
        <p className="title">Zostałeś dopisany do listy rezerwowej!</p>
        <div className="register-close">
          <Link to="/">
            <img className="register-close-icon" src={exit} alt={"Exit"} />
          </Link>
        </div>
        <div className="register-content">
            <p className="register-info-email-info">Zostałeś dopisany do listy rezerwowej. W przypadku zwolnienia się miejsca na Obozie poinformujemy Cię mailowo</p>
        </div>
      </div>
  );
}

export default RegisterSuccess;
