import React from "react";

export default function MyAccount({name, guardian_picture, guardian_name, guardian_number, qr_code,user_code}) {
    return (
        <div className="account">
            <div className="account-content">
                <h2>Witaj, {name}</h2>
                <h3>Twój opiekun:</h3>
                <img className="guardian-picture" src={guardian_picture} alt={guardian_name}/>
                <h4>Imie i Nazwisko: {guardian_name}</h4>
                <h4>Numer telefonu: {guardian_number}</h4>
                <div className="account-contact">
                    <div className="contact">
                        <h5 >Koordynator ds. Uczestników:</h5>
                        <h3> 123456789</h3>
                    </div>
                    <div className="contact">
                        <h5 >Koordynator ds. Programu: </h5>
                        <h3> 123456789</h3>
                    </div>
                    <div className="contact">
                        <h5 >Koordynator ds. Ciężkich: </h5>
                        <h3> 123456789</h3>
                    </div>
                    <div className="contact">
                        <h5 >Pogotowie (klinowe): </h5>
                        <h3> 123456789</h3>
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

