import logo from "../../assets/logo.png";
import {resp} from "../HomePage/loginPage";

const Counselor = () => {
  const counselor = JSON.parse(localStorage.getItem("counselor"));
  const name = resp['name'];
  const picture = logo;
  const counselorName = counselor[0]["imie_i_nazwisko"];
  const counselorNumber = counselor[0]["phone"];

  return (
    <>
      <h2>Witaj, {name}</h2>
      <div className="guardian">
         <p>Twój opiekun:</p>
         <img className="guardian-picture" src={picture} alt={name} />
         <p>Imie i Nazwisko: {counselorName}</p>
         <span>Numer telefonu: {counselorNumber}</span>
      </div>
      <div className="account-contact">
        <div className="contact">
          <p>Koordynator ds. Uczestników:</p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Koordynator ds. Programu: </p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Koordynator ds. Ciężkich: </p>
          <span> 123456789</span>
        </div>
        <div className="contact">
          <p>Pogotowie (klinowe): </p>
          <span> 123456789</span>
        </div>
          <div className="contact">
              <p>Fotograf 1: </p>
              <span> 123456789</span>
          </div>
          <div className="contact">
              <p>Fotograf 2: </p>
              <span> 123456789</span>
          </div>
      </div>
      <div className="account-footer">
        <p>Kliknij po za oknem by zamknąć</p>
      </div>
    </>
  );
};

export default Counselor;
