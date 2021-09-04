import {resp} from "../HomePage/loginPage";
import {quitTeam, getTeams} from "../../actions/MyAccount/userActions";
import {teamCreation} from "../../actions/MyAccount/teamCreation";
import React from "react";
import back from "../../assets/placeholders/goback.png";


function Teams (){
    getTeams();
    const teams = JSON.parse(localStorage.getItem("teams"));
    return (Array.isArray(teams) && teams.length !== 0 ?   <InTeams array={teams}/> : <WithoutTeam/> );

}

function registerTeam(){
    getTeams();
    const teams =  JSON.parse(localStorage.getItem("teams"));
    return(
        <>
            <h1>Druzyny</h1>
            <div className="team">
                {teams.filter((team) => team[3] === 0).map((data)=>(
                    <Team id={data.team_id} name={data.team_name} type={data.type} />
                ))}
            </div>
        </>
    );
}

const Team = ({id, name, type}) =>{
    let logo = "";
    if(type === 0){
        logo = require(`../../assets/logos/${name}.png`).default;
    }

    return( type ===0 ?
        <>
            <h2>Twój domek to:</h2>
            <div className="team-house">
                 <div className="team-house-title">
                     {name}
                 </div>
                <div className="team-house-logo">
                    <img
                        className="team-house-logo-img"
                        src={logo}
                        alt={name}
                    />
                </div>
            </div>

        </> :
        <>
            <div className="team-created">
                <div className="team-created-title">
                   Drużyna: {name}
                </div>
                <div className="team-created-button">
                    <button className="button-container-primary" onClick={()=>quitTeam(id)}>Wypisz się</button>
                </div>
            </div>

            {/*role === 0 ? <button onClick={()=> delTeam(id)}>Usun druzyne</button>:null*/}
        </>
    );
}
const InTeams = ({array}) =>{
    return(
        <>
            <h1>Druzyny</h1>
            <div className="team">
                {array.map((data)=>(
                    <Team id={data.team_id} name={data.team_name} type={data.type} />
                ))}
            </div>
            <div className="team-creation-content">
                <div className="team-creation-content-title">
                    Stwórz swoją drużynę!
                </div>
                {teamCreation()}
            </div>
        </>
    );
}
const WithoutTeam = () =>{
    return(
        <>
            <h1>Druzyny</h1>
            <div className="team">
                <p>Nie jesteś aktualnie w żadnej drużynie</p>
            </div>
            <div className="team-creation">
                <div className="team-creation-title">
                    <p>Stworz drużyne!</p>
                </div>
                <div className="team-creation-content">
                    {teamCreation()}
                </div>
            </div>
        </>
    );
}




export default Teams;