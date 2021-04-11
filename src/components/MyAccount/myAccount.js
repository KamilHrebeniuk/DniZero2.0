import React from "react";

export default function MyAccount({name, guardian_picture, guardian_name, guardian_number}) {
    return (
        <div className="account">
            <div className="account-content">
                <h1>Witaj, {name}</h1>
                <h2>Twój opiekun:</h2>
                <img className="guardian-picture" src={guardian_picture} alt={guardian_name}/>
                <h2>{guardian_name}</h2>
                <h3>Numer telefonu: {guardian_number}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="account-menu">
                        <button className="account-button">Lista moich warsztatów</button>
                        <button className="account-button">Lista moich drużyn</button>
                        <button className="account-button">Historia akcji</button>
                        <button className="account-close_button">Zamknij</button>
                </div>
                <div className="account-footer">
                    <p>Kliknij po za oknem by zamknąć</p>
                </div>
            </div>

        </div>

    )


}

