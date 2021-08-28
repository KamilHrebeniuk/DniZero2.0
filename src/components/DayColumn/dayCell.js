import React from "react";
import { Link, useHistory } from "react-router-dom";

export function DayCell({ id, hours, place, title, description, hei }) {
  const height = { flex: hei };
  let history = useHistory();

  function clickHandle() {
    if (id > 0) {
      let url = "/eventDescription/" + id.toString();
      history.push(url);
    } else {
      return false;
    }
  }
  return (
      hei === 1 ? (
          <div className="cell" style={height} onClick={clickHandle}>
              <p className="cell-hour_place">
              </p>
              <p className="cell-title">{title}</p>
          </div>
      ):(
          <div className="cell" style={height} onClick={clickHandle}>
              <p className="cell-hour_place">
                  {hours}
                  {place}
              </p>
              <p className="cell-title">{title}</p>
          </div>
      )

  );
}
