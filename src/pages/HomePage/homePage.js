import React from "react";
import { AgendaItemText } from "../../components/AgendaItem";
import { AgendaItemTextImage } from "../../components/AgendaItem";
import BackgroundImage from "../../components/BackgroundImage/backgroundImage";
import { schedule } from "./loginPage";
import {useHistory} from "react-router-dom";

const HomePage = ({ logOut }) => {
    let history = useHistory();

    function clickHandle(id) {
        let url = "/eventDescription/" + id.toString();
        history.push(url);
    }
  return (
    <>
      <BackgroundImage />
      <section className="home">

        <div className="home-main">
          <p>{schedule[34][3]}</p>
          <span>
            {schedule[34][4]}
          </span>
          <br />
          <button onClick={() => clickHandle(35)}>Szczegóły &rarr;</button>
        </div>
        <div className="home-content" onLoad={horizontalScroll}>
          {/* TO DO: title and content as variables */}
          {agenda()}
        </div>
      </section>
    </>
  );
};
function agenda(){
  var d = Date.now();
  for (var i = 0 ; i <49; i++){
    var time = Date.parse(schedule[i][1]);
    if(d<time){
      return (
        <>
          <AgendaItemText
              id={schedule[i][0]}
              title={schedule[i][3]}
              content={schedule[i][4]}
          />
          <AgendaItemTextImage
              id={schedule[i+1][0]}
              title={schedule[i+1][3]}
              content={schedule[i+1][4]}
          />
          <AgendaItemText
              id={schedule[i+2][0]}
              title={schedule[i+2][3]}
              content={schedule[i+2][4]}
          />
          <AgendaItemTextImage
              id={schedule[i+3][0]}
              title={schedule[i+3][3]}
              content={schedule[i+3][4]}
          />
        </>
      )
    }
  }
}
function horizontalScroll() {
  const scrollContainer = document.querySelector(".home-content");
  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }
}

export default HomePage;
