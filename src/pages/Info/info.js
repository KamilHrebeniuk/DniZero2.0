import React from "react";
import trzyjeziora from "../../assets/placeholders/trzyjeziora.png";
import { Link } from "react-router-dom";
import exit from "../../assets/placeholders/exit.jpg";

export default function Info() {
  return (
    <div className="info">
      <div className="info-content">
        <div className="info-close">
          <Link to="/">
            <img className="register-close-icon" src={exit} alt={"Exit"} />
          </Link>
        </div>

        <div className="info-description">
          <p className="info-title">Obóz na horyzoncie!!</p>
          Każdy pirat chce wiedzieć za co płaci tak więc w cenie obozu:
          <ul>
            <li>Trzy posiłki dziennie (śniadanie, obiad, kolacja)</li>
            <li>Pięciodniowe zakwaterowanie w 6-10-osobowych domkach</li>
            <li>Liczne warsztaty i atrakcje</li>
            <li>pamiątkowa koszulka i Obozowe gadżety</li>
            <li>Zdjęcia w formie cyfrowej zrobione przez fotografa</li>
          </ul>
          Dodatkowo płatne(80zł):
          <ul>
            <li>Transport w dwie strony z/do Wrocławia</li>
          </ul>
        </div>

        <div className="info-place">
          <img className="place" src={trzyjeziora} alt="Ośrodek" />
        </div>

        <p>
          <center>Do zobaczenia!</center>
        </p>
      </div>
    </div>
  );
}
