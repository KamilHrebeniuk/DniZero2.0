import {resp} from "../HomePage/loginPage";
import {quitTeam, getTeams} from "../../actions/MyAccount/userActions";
import {teamCreation} from "../../actions/MyAccount/teamCreation";
import React from "react";


function Teams (){
    getTeams();
    const teams = JSON.parse(localStorage.getItem("teams"));
    return (teams != null ?   <InTeams array={teams}/> : <WithoutTeam/> );

}

const Team = ({id, name, type}) =>{


    return( type ===0 ?
        <>
            <h2>Twój domek to:</h2>
            <div className="team-house">
                 <div className="team-house-title">
                     {name}
                 </div>
                <div className="team-house-logo">
                    logo
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
                    <p>Stworz druzyne!</p>
                </div>

            </div>
        </>
    );
}




export default Teams;