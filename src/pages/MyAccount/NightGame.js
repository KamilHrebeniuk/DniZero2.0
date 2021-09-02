import React from "react";
import {getStation} from "../../actions/MyAccount/userActions";

function NightGame(){
    getStation();
    const NightGame = JSON.parse(localStorage.getItem("station"));
    return (NightGame != null ? <Game station={NightGame[0]}/> : null);
}
const Game = ({station}) =>{
    console.log(JSON.stringify(station))
        return(
            <div className="gameNight">
                <div className="gameNight-number">
                    <p>Stacja numer: {station["id_stacji"]} </p>
                </div>
                <div className="gameNight-place">
                    <p>Miejsce: {station["place"]}</p>
                </div>
                <div className="gameNight-description">
                    {station["opis_fabularny"]}
                    {station["opis_stacji"]}
                </div>
                <div className="gameNight-time">
                    {station["time"]}
                </div>
                <div className="gameNight-hints">
                    {station["hints"]}
                </div>
                <div className="gameNight-needed">
                    {station["needed"]}
                </div>
                <div className="gameNight-scoring">
                    {station["scoring"]}
                </div>
            </div>
        )
}
export default NightGame;