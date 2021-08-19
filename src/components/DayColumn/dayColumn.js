import React from "react";
import {connect} from "react-redux";

const DayCell = ({id, hours, place, title}) => {
    return(
        <div className="cell" id={id}>
            <p className="cell-hour_place">{hours}{place}</p>
            <p className="cell-title">{title}</p>
        </div>
    );
};

const DayColumn = ({day}) => {

    const events = day =>{
        let array = [];
        for(var ev=0; ev<day.length; ev++){
            array[ev] = {
                id: day[ev][0],
                hours: day[ev][1].split(" ")[1],
                place: day[ev][3],
                title: day[ev][4],
            }
        }
        return array;
    }
    return(
        <div className="column">
            {events(day).map((cell)=>
                <DayCell id={cell.id} hours={cell.hours} place={cell.place} title={cell.title}/>
                )}
        </div>

    );
}
export default connect(DayColumn);