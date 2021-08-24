import React from "react";
import back from "../../assets/placeholders/goback.png";
import { useHistory, useParams } from "react-router-dom";
import { schedule } from "../../pages/LoginPage/loginPage";
import {DayCell} from "../DayColumn";

const EventDescContent = ({title, hours, place, description}) => {
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }
  return(
      <div className="eventDescription-content">
        <div className="eventDescription-content-description">
          <div className="eventDescription-content-description-title">
            <p>{title}</p>
          </div>
          <div className="eventDescription-content-description-picture">
            <div className="eventDescription-content-description-place">
              {hours} {place}
            </div>
          </div>
          <div className="eventDescription-content-description-info">
            {description}
          </div>
        </div>
        <div className="eventDescription-content-register">
    <div className="eventDescription-content-description-title">
      <img
          className="eventDescription-content-close"
          src={back}
          alt={"Go back"}
          onClick={() => clickHandle()}
      />
    </div>
    <div className="eventDescription-content-register-required">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div className="eventDescription-content-register-option">
      <div className="eventDescription-content-register-participant">
        <div
            id="team"
            onClick={() => content("team-content")}
            className="eventDescription-content-register-team-title"
        >
          Zapisz swoją drużynę
        </div>
        <div
            id="team-content"
            style={{ display: "none" }}
            className="eventDescription-content-register-team-content"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="eventDescription-content-register-participant">
        <div
            id="newteam"
            onClick={() => content("newteam-content")}
            className="eventDescription-content-register-newteam-title"
        >
          Stwórz nową drużynę
        </div>
        <div
            id="newteam-content"
            style={{ display: "none" }}
            className="eventDescription-content-register-newteam-content"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className="eventDescription-content-register-participant">
        <div
            id="solo"
            onClick={() => content("solo-content")}
            className="eventDescription-content-register-solo-title"
        >
          Znajdzcie mi druzyne
        </div>
        <div
            id="solo-content"
            style={{ display: "none" }}
            className="eventDescription-content-register-solo-content"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  </div>
      </div>
  );
};

export default function EventDescription() {

  const { id } = useParams();
  var number = parseInt(id);

  return (
        schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) =>(
          <EventDescContent title={filteredEvent.title} hours={filteredEvent.start_datetime} place={"oboz"} description={filteredEvent.description}/>
      )
  ))
}
function content(clicked_id) {
  var target = document.getElementById(clicked_id.toString());
  var divs = ["team-content", "newteam-content", "solo-content"];
  for (var i = 0; i < 3; i++) {
    if (divs[i] === clicked_id.toString()) {
      if (target.style.display === "none") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
    } else {
      document.getElementById(divs[i]).style.display = "none";
    }
  }
}
