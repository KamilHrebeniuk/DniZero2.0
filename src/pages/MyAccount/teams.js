import {resp} from "../HomePage/loginPage";
import {quitTeam, getTeams} from "../../actions/MyAccount/userActions";
import {teamCreation} from "../../actions/MyAccount/teamCreation";
import React from "react";


function Teams (){
    getTeams();
    const teams = JSON.parse(localStorage.getItem("teams"));
    return (teams != null ?   <InTeams array={teams}/> : <WithoutTeam/> );

}

const Team = ({id, name, type, role}) =>{


    return( type ===0 ?
        <>
            <div className="team-house">
                Twój domek to: {name}
            </div>

        </> :
        <>
            <div className="team-created">
                {name}
            </div>
            <button onClick={()=>quitTeam(id)}>Wypisz się</button>
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
                    <Team id={data.team_id} name={data.team_name} type={data.type} role={data.person_type} />
                ))}
            </div>
            <div className="team-creation-content">
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