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
        <p className="register-info-title">Już prawie gotowe...</p>
        <p className="register-info-email-info">
          Wysłaliśmy na Twoją skrzynkę mailową potwierdzenie rejestracji.
          Znajdziesz tam szczegółowe informacje co do płatności za Obóz.
          <br />
          <br />W związku z dużym zainteresowaniem w dniu otwarcia zapisów mogą
          pojawić się opóźnienia w dostarczaniu maili. Jeśli po 2 godzinach
          nadal nie dostałeś powiadomienia, sprawdź zakładkę spam lub w
          przypadku użytkowników Gmaila również kartę "Oferty". Jeśli mail nie
          został dostarczony, skontaktuj się z nami na oboz@samorzad.pwr.edu.pl
          lub za pośrednictwem portali społecznościowych.
        </p>
      </div>
    </div>
  );
};

export default RegisterSuccess;
