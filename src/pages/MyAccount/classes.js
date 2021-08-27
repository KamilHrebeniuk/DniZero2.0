import {schedule} from "../HomePage/loginPage";
import {resp} from "../HomePage/loginPage";
import {signout, getClasses} from "../../actions/MyAccount/userActions"
import React from "react";


function Classes (){
    getClasses();
    const classes = JSON.parse(localStorage.getItem("classes"));
    return (classes != null ?   <Enrolled array={classes}/> : <NotEnrolled/> );

}

const Class = ({id,title, description, place, hour}) =>{
    return(
        <>
            <div className="class-title">
                {title}{place}{hour}
            </div>
            <div className="class-content">
                {description}
            </div>
            <button onClick={()=>signout(id,resp['id'])}>wypisz sie</button>
        </>
    );
}
const Enrolled = ({array}) =>{
    return(
        <>
            <h1>Warsztaty</h1>
            <div className="class">
                {schedule.filter((ev)=> array.some(r => ev[0]===r[0])).map((subject)=>(
                 <Class id={subject.event_id} title={subject.title} description={subject.description} place={subject.place} hour={subject.start_datetime}/>
                ))}
            </div>
        </>
    );
}
const NotEnrolled = () =>{
        return(
            <>
                <h1>Warsztaty</h1>
                <div className="class">
                    <p>Nie zapisano sie na zadne zajęcia</p>
                </div>
            </>
        );
}




export default Classes;