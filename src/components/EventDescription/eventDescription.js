import React from "react";
import back from "../../assets/placeholders/goback.png";
import { useHistory, useParams } from "react-router-dom";
import {resp, schedule} from "../../pages/HomePage/loginPage";
import {teamCreation} from "../../actions/MyAccount/teamCreation";
import {getTeamsNotRegistered, searchingTeam, signup} from "../../actions/MyAccount/userActions";
import mapka from "../../assets/placeholders/mapka.jpg";
import placeholder from "../../assets/placeholders/background.png"

const EventDescContentTeams = ({ title, hours, place, description }) => {
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }
  getTeamsNotRegistered();
  const teams = JSON.parse(localStorage.getItem("teamsnotreg"));
  return (
    <div className="eventDescription">
      <div className="eventDescription-content-title" >
        <p>{title}</p>
        <img
            className="eventDescription-content-close"
            src={back}
            alt={"Go back"}
            onClick={() => clickHandle()}
        />
      </div>
      <div className="eventDescription-content">
        <div className="eventDescription-content-description">
          <div className="eventDescription-content-description-picture">
              <img
                  className="ClassDesc-content-person-picture"
                  src={mapka}
                  alt={"Mapka"}
              />
            <div className="eventDescription-content-description-place">
                <div>
                    {hours} {place}
                </div>
            </div>
          </div>
          <div className="eventDescription-content-description-info">
            {description}
          </div>
        </div>
        <div className="eventDescription-content-register">
          <div className="eventDescription-content-register-required">
           <h3>Potrzebne rzeczy: </h3>
              <ol>
                  <li>Alkohol</li>
                  <li>Dobry humor</li>
                  <li>... i więcej alkoholu</li>
              </ol>
          </div>
          <div className="eventDescription-content-register-option">
            <div className="eventDescription-content-register-participant">
              <div id="team" onClick={() => content("team-content")}
                  className="eventDescription-content-register-team-title">
                Zapisz swoją drużynę
              </div>
              <div id="team-content" style={{ display: "none" }}
                  className="eventDescription-content-register-team-content"
              >
                  {Array.isArray(teams) && teams.length !== 0 ?
                teams.filter((team) => team[3] === 0).map((data)=>(
                    <div className="team-created">
                      <div className="team-created-title">
                        Drużyna: {data.team_name}
                      </div>
                      <div className="team-created-button">
                        <button className="button-container-primary" onClick={()=>signup(35, data.team_id, 0)}>Zapisz drużynę</button>
                      </div>
                    </div>
                )) : <p>Jeszcze nie założyłeś swojej drużyny, pamiętaj by podać swoje ID jako pierwsze</p>}
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
                {teamCreation()}
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
                <p>Jeśli szukasz drużyny możemy Ci pomóc, wystarczy że naciśniesz ten przycisk</p>
                <button className="eventDescription-content-register-solo-content-button" onClick={()=> searchingTeam()}>Znajdzcie mi druzyne</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventDescContentSolo = ({ title, hours, place, classes }) =>{
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }
  var count = classes.length;
  return (
      <div className="eventDescription-content-solo">
        <div className="eventDescription-content-solo-title">
          <p>{title}</p>
          <img
              className="eventDescription-content-close"
              src={back}
              alt={"Go back"}
              onClick={() => clickHandle()}
          />
        </div>
        <div className="eventDescription-content-solo-description">
          {schedule.filter((ev)=> classes.some(r => ev[0]===r)).map((subject)=>(
                <ClassDesc id={subject.event_id} hour={subject.start_datetime} title={subject.title} description={subject.description} place={subject.place} person={subject.person} count={count}/>
            ))}

        </div>
      </div>
  );
}

const EventDescContentNone = ({ title, hours, place, description }) =>{
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }

  const img = require(`../../assets/places/${place}.png`).default;
  return (
      <div className="eventDescription-content-none">
        <div className="eventDescription-content-none-title">
          <p>{title}</p>
          <img
              className="eventDescription-content-close"
              src={back}
              alt={"Go back"}
              onClick={() => clickHandle()}
          />
        </div>
        <div className="eventDescription-content-none-description">
          <img
              className="eventDescription-content-none-picture"
              src={img}
              alt={place}
          />
            <div className="eventDescription-content-none-description-desc">
                {description}
            </div>
          <div className="eventDescription-content-none-description-place">
            {hours}<br/>{place}
          </div>
        </div>
      </div>
  );
}

const ClassDesc = ({id, title, description, hour, place,  person, count}) =>{
    const img = require(`../../assets/classes/${person}.jpg`).default;

    return(
        <div className="ClassDesc-content" style={{flex: 1}}>
          <img
              className="ClassDesc-content-person-picture"
              src={img}
              alt={person}
          />
          <div className="ClassDesc-content-person">
              <h2>{title}</h2>
              <h4>Miejsce: {place}</h4>
              <h4>Godzina: {hour}</h4>
              <h4>Prowadzący: {person}</h4>
              <p>{description}</p>
              <button className="button-container-primary" onClick={() => signup(id,resp['id'],1) }>Zapisz się!</button>
          </div>
        </div>
    );
}

export default function EventDescription() {
  const { id } = useParams();
  var number = parseInt(id);
  var type = schedule[id-1]['type'];

    switch (type){
    case 0:{
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
              <EventDescContentNone title={filteredEvent.title} hours={filteredEvent.start_datetime} place={filteredEvent.place} description={filteredEvent.description}/>
          ));
    }
    case 1:{
      var classes = schedule[id-1]['classes'];
      var classArray = classes.split(',');
      classArray = classArray.map(Number);

      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentSolo title={filteredEvent.title} hours={filteredEvent.start_datetime} place={filteredEvent.place} classes={classArray}/>
      ));
    }
    case 2: {
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentTeams title={filteredEvent.title} hours={filteredEvent.start_datetime} place={filteredEvent.place} description={filteredEvent.description}/>
      ));
    }
    default: {
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentNone title={filteredEvent.title} hours={filteredEvent.start_datetime} place={filteredEvent.place} description={filteredEvent.description}/>
      ));
    }
  }
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
function show(clicked_id) {
  var target = document.getElementById(clicked_id.toString());
      if (target.style.display === "none") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
}
