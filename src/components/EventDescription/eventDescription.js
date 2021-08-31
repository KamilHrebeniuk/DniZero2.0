import React from "react";
import back from "../../assets/placeholders/goback.png";
import { useHistory, useParams } from "react-router-dom";
import { schedule } from "../../pages/HomePage/loginPage";

const EventDescContentTeams = ({ title, hours, place, description }) => {
  let history = useHistory();
  function clickHandle() {
    history.goBack();
  }
  return (
    <div className="eventDescription">
      <div className="eventDescription-content-title">
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
            <div className="eventDescription-content-description-place">
              {hours} {place}
            </div>
          </div>
          <div className="eventDescription-content-description-info">
            {description}
          </div>
        </div>
        <div className="eventDescription-content-register">
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
                <ClassDesc id={subject.event_id} title={subject.title} description={subject.description} place={"oboz"} person={subject.person} count={count}/>
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
          <div className="eventDescription-content-none-description-place">
            {hours} {place}
          </div>
        </div>
      </div>
  );
}

const ClassDesc = ({id, title, description, place,  person, count}) =>{

   const bck ={backgroundImage: "url(/static/media/trzyjeziora.2f3b4b14.png)"};
    return(
        <div className="ClassDesc-content" style={bck}>
          <div className="ClassDesc-content-person">
            <h2>{title}</h2>
            <h4>Miejsce: {place}</h4>
            <h4>Prowadzący: {person}</h4>
            <p>{description}</p>
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
              <EventDescContentNone title={filteredEvent.title} hours={filteredEvent.start_datetime} place={"oboz"} description={filteredEvent.description}/>
          ));
    }
    case 1:{
      var classes = schedule[id-1]['classes'];
      var classArray = classes.split(',');
      classArray = classArray.map(Number);
      console.log(JSON.stringify(classArray));
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentSolo title={filteredEvent.title} hours={filteredEvent.start_datetime} place={"oboz"} classes={classArray}/>
      ));
    }
    case 2: {
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentTeams title={filteredEvent.title} hours={filteredEvent.start_datetime} place={"oboz"} description={filteredEvent.description}/>
      ));
    }
    default: {
      return schedule.filter((eventDesc) => eventDesc[0] === number).map((filteredEvent) => (
          <EventDescContentNone title={filteredEvent.title} hours={filteredEvent.start_datetime} place={"oboz"} description={filteredEvent.description}/>
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
