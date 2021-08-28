import React from "react";
import { AgendaItemText } from "../../components/AgendaItem";
import { AgendaItemTextImage } from "../../components/AgendaItem";
import BackgroundImage from "../../components/BackgroundImage/backgroundImage";
import { schedule } from "./loginPage";

const HomePage = ({ logOut }) => {
  return (
    <>
      <BackgroundImage />
      <section className="home">
        <p onClick={() => logOut()}> Log Out </p>
        <div className="home-main">
          <p>{schedule[0][3]}</p>
          <span>
            {schedule[0][4]}
          </span>
          <br />
          <button>Szczegóły &rarr;</button>
        </div>
        <div className="home-content" onLoad={horizontalScroll}>
          {/* TO DO: title and content as variables */}
          <AgendaItemText
            title={schedule[1][3]}
            content={schedule[1][4]}
          />
          <AgendaItemTextImage
              title={schedule[2][3]}
              content={schedule[2][4]}
          />
          <AgendaItemText
              title={schedule[3][3]}
              content={schedule[3][4]}
          />
          <AgendaItemTextImage
              title={schedule[4][3]}
              content={schedule[4][4]}
          />
        </div>
      </section>
    </>
  );
};

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
