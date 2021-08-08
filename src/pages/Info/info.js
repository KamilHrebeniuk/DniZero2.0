import React from "react";
import logo from "../../images/placeholders/logo.png";
import trzyjeziora from "../../images/placeholders/trzyjeziora.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info-content">
        <div className="info-description">
          <img className="logo" src={logo} alt="Oboz PWr" />
          <p>Obóz na horyzoncie!!</p>
          <div>
            Każdy pirat chce wiedzieć za co płaci tak więc w cenie obozu:
            <br />
            <ul>
              <li>Trzy posiłki dziennie (śniadanie, obiad, kolacja)</li>
              <li>Pięciodniowe zakwaterowanie w 6-10-osobowych domkach</li>
              <li>Liczne warsztaty i atrakcje</li>
              <li>pamiątkowa koszulka i Obozowe gadżety</li>
              <li>Zdjęcia w formie cyfrowej zrobione przez fotografa</li>
            </ul>
            <br />
            Dodatkowo płatne(80zł):
            <br />
            <ul>
              <li>Transport w dwie strony z/do Wrocławia</li>
            </ul>
            <br />
          </div>
        </div>

        <div className="info-place">
          <span></span>
        </div>
        <img className="place" src={trzyjeziora} alt="Ośrodek" />
        <p>
          <center>Do zobaczenia!</center>
        </p>
      </div>
    </div>
  );
}
