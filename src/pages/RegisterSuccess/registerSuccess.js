import React from "react";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

const RegisterSuccess = () => {
  return (
    <div className="register">
      <p className="title">Rejestracja udana123!</p>
      <div className="register-close">
        <Link to="/">
          <img className="register-close-icon" src={exit} alt={"Exit"} />
        </Link>
      </div>
      <div className="register-content">
        <p className="register-success-title">Już prawie gotowe...</p>
        <p className="register-success-email-info">
          Wysłaliśmy na Twoją skrzynkę mailową potwierdzenie rejestracji.
          Znajdziesz tam szczegółowe informacje co do płatności za Obóz.
        </p>
        <p className="register-success-email-info">
          W przypadku braku powiadomienia o mailu w przeciągu 5 minut, sprawdź
          zakładkę spam lub w przypadku urzytkowników Gmaila również kartę
          "Oferty". Jeśli mail nie został dostarczony, skontaktuj się z nami na
          oboz@samorzad.pwr.edu.pl lub za pośrednictwem portali
          społecznościowych.
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccess;
