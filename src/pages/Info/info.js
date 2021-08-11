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
          <p className="info-description-text">
            Obóz studentów PWr to tydzień niesamowitych warsztatów, szkoleń
            i&nbsp;integracji studentów naszej uczelni. Mimo, że to wydarzenie
            skierowane jest głównie do nowo przyjętych studentów, udział
            w&nbsp;nim może wziąć każdy student Politechniki. Co roku
            w&nbsp;obozie bierze udział ponad dwustu uczestników przeżywających
            wspaniałą, tygodniową przygodę. Kadra złożona
            z&nbsp;najaktywniejszych studentów prowadzi warsztaty z&nbsp;różnych
            dziedzin – w&nbsp;tym wprowadzi Was w&nbsp;tajniki działania naszej
            Uczelni.
          </p>
          Każdy pirat chce wiedzieć za co płaci tak więc w&nbsp;cenie obozu:
          <ul>
            <li>Trzy posiłki dziennie (śniadanie, obiad, kolacja)</li>
            <li>Pięciodniowe zakwaterowanie w&nbsp;6-10-osobowych domkach</li>
            <li>Liczne warsztaty i&nbsp;atrakcje</li>
            <li>pamiątkowa koszulka i&nbsp;Obozowe gadżety</li>
            <li>Zdjęcia w&nbsp;formie cyfrowej zrobione przez fotografa</li>
          </ul>
          Dodatkowo płatne (80zł):
          <ul>
            <li>Transport w&nbsp;dwie strony z/do Wrocławia</li>
          </ul>
        </div>

        <div className="info-place">
          <img className="place" src={trzyjeziora} alt="Ośrodek" />
        </div>

        <p className="info-footer">Do zobaczenia!</p>
      </div>
    </div>
  );
}
