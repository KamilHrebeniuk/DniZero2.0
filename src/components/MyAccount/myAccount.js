import React from "react";

export default function MyAccount({name, guardian_picture, guardian_name, guardian_number, qr_code,user_code}) {
    return (
        <div className="account">
            <div className="account-content">
                <h2>Witaj, {name}</h2>
                <p>Twój opiekun:</p>
                <img className="guardian-picture" src={guardian_picture} alt={guardian_name}/>
                <p>Imie i Nazwisko: {guardian_name}</p>
                <span>Numer telefonu: {guardian_number}</span>
                <div className="account-contact">
                    <div className="contact">
                        <p >Koordynator ds. Uczestników:</p>
                        <span> 123456789</span>
                    </div>
                    <div className="contact">
                        <p >Koordynator ds. Programu: </p>
                        <span> 123456789</span>
                    </div>
                    <div className="contact">
                        <p >Koordynator ds. Ciężkich: </p>
                        <span> 123456789</span>
                    </div>
                    <div className="contact">
                        <p >Pogotowie (klinowe): </p>
                        <span> 123456789</span>
                    </div>
                </div>
                <div className="account-footer">
                    <p>Kliknij po za oknem by zamknąć</p>
                </div>
            </div>
            <div className="account-menu">
                <button className="account-button"><span>Opiekun i kontakt</span></button>
                <button className="account-button"><span>Warsztaty</span></button>
                <button className="account-button"><span>Drużyny</span></button>
                <button className="account-button"><span>Historia akcji</span></button>
                <button className="account-button" id="close"><span>Zamknij</span></button>
                <img className="qr-code" src={qr_code} alt={user_code}/>
                <div className="account-number">
                    <p>Uczestnik: {user_code}</p>
                </div>
            </div>
        </div>

    )


}

