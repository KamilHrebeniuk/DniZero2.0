import React from "react";
import { Link, useHistory } from "react-router-dom";

export function DayCell({ id, hours, place, title, description, hei }) {
  const height = { flex: hei };
  let history = useHistory();

  function clickHandle() {
      let url = "/eventDescription/" + id.toString();
      history.push(url);
  }
  return (
      hei === 1 ? (
          <div className="cell" style={height} onClick={clickHandle}>
              <p className="cell-title">{title}</p>
          </div>
      ):(
          <div className="cell" style={height} onClick={clickHandle}>
              <p className="cell-hour_place">{hours.split(" ")[1].slice(0,5)} {place}</p>
              <p className="cell-title">{title}</p>
          </div>
      )

  );
}
export function EmptyCell({hei}){
    const height = { flex: hei };

    return (
            <div className="cell-empty" style={height} >
            </div>
    );
}

export function ColumnTitle({title, hei}){
    const height = { flex: hei };
    return(
        <div className="column-title" style={height}>
            <p className="column-title-content">{title}</p>
        </div>
    );
}
export function TimeCell({title, hei}){
    const height = { flex: hei };
    return(
        <div className="cell-time" style={height}>
            <p className="cell-time-content">{title}</p>
        </div>
    );
}