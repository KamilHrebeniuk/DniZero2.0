import logo from "../../assets/logo.png";
import {resp} from "../HomePage/loginPage";
import React from "react";

const Counselor = () => {
  const counselor = JSON.parse(localStorage.getItem("counselor"));
  const name = resp['name'];
  const picture = logo;
  const counselorName = counselor[0]["imie_i_nazwisko"];
  const counselorNumber = counselor[0]["phone"];

  return (
    <>
      <h2>Witaj, {name}</h2>
      <p>Twoi opiekunowie:</p>
      <div className="guardians">
          {counselor.map((person)=> (
              <Guardian name={person.imie_i_nazwisko} phone={person.phone} />
          ))}
      </div>
      <div className="account-contact">
          <div className="contact">
              <p>Organizator:</p>
              <span>886811886</span>
          </div>
          <div className="contact">
              <p>Koordynator ds. Uczestników:</p>
              <span>691934995</span>
          </div>
          <div className="contact">
              <p>Koordynator ds. Ciężkich: </p>
              <span>886811886</span>
          </div>
          <div className="contact">
              <p>Pogotowie (klinowe): </p>
              <span> 123456789</span>
          </div>
          <div className="contact">
              <p>Fotograf 1: </p>
              <span>668751336</span>
          </div>
          <div className="contact">
              <p>Fotograf 2: </p>
              <span>530508106</span>
          </div>
      </div>
      <div className="account-footer">
        <p>Kliknij po za oknem by zamknąć</p>
      </div>
    </>
  );
};
const Guardian = ({name, phone, img}) =>{
    return(
        <div className="guardian">
             <img className="guardian-picture" src={img} alt={name} />
             <p>Imie i Nazwisko: {name}</p>
             <span>Numer telefonu: {phone}</span>
        </div>

    );

}
export default Counselor;
