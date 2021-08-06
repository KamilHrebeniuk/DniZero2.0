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
            Tegoroczna edycja Obozu Studenckiego PWr zbliża się wielkim krokami.
            Wypłyń z nami na „Kurs w Nieznane”, który wspominać będziesz do
            końca życia. Podczas tej niezapomnianej przygody inspirowaną
            Piratami z Karaibów, oprócz integracji z innymi nowoprzyjętymi
            studentami, będziesz miał szansę wziąć udział w licznych warsztatach
            prowadzonych przez naszych najaktywniejszych studentów! Przygotują
            Cię one do wyruszenia w przygodę, jaką są studia. Jest to niezwykła
            okazja, aby nawiązać nowe relacje z obozową załogą i spędzić
            ostatnie dni wakacji, w jakże interesujący, a zarazem studencki
            sposób.
          </div>
        </div>

        <div className="info-place">
          <span>
            Tegoroczny Obóz Studentów PWr będzie miał miejsce w ośrodku
            Trzyjeziora w samym sercu Przemęckiego Parku Krajobrazowego w
            Wieleniu Zaobrzańskim. Ośrodek ten położony jest nad malowniczymi
            jeziorami w otoczeniu lasów oraz łąk. W okolicy ośrodka znajdują się
            doskonałe miejsca na rowerowe wyprawy. W ośrodku znajduje się
            szerokie zaplecze sportowe, boiska do gry w piłkę siatkową, nożną i
            tenisa, na których odbywać się będzie wiele ciekawych i zwariowanych
            konkursów. Dodatkowo na terenie ośrodka istnieje możliwość
            wypożyczenia kajaków, rowerków wodnych czy rowerów.
            <p>
              Po więcej informacji zajrzyj na stronę ośrodka:{" "}
              <a
                href="https://www.trzyjeziora.com"
                rel="noreferrer"
                target="_blank"
              >
                www.trzyjeziora.com
              </a>
              .
            </p>
          </span>
        </div>
        <img className="place" src={trzyjeziora} alt="Ośrodek" />
        <p>
          <center>Do zobaczenia!</center>
        </p>
      </div>
    </div>
  );
}
