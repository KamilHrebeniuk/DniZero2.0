import {resp} from "../HomePage/loginPage";
import {quitTeam, getTeams} from "../../actions/MyAccount/userActions"
import React from "react";


function Teams (){
    getTeams();
    const teams = JSON.parse(localStorage.getItem("teams"));
    return (teams != null ?   <InTeams array={teams}/> : <WithoutTeam/> );

}

const Team = ({id, name, type}) =>{


    return( type ===0 ?
        <>
            <div className="team-house">
                Twój domek to: {name}
            </div>

        </> :
        <>
            <div className="team-create">
                {name}
            </div>
            <button onClick={()=>quitTeam(id)}>Wypisz się</button>
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
        </>
    );
}
const WithoutTeam = () =>{
    return(
        <>
            <h1>Druzyny</h1>
            <div className="class">
                <p>Nie zapisano sie na zadne zajęcia</p>
            </div>
        </>
    );
}




export default Teams;