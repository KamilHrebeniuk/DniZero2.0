import React from "react";
import { AgendaItemText } from "../../components/AgendaItem";
import { AgendaItemTextImage } from "../../components/AgendaItem";
import BackgroundImage from "../../components/BackgroundImage/backgroundImage";

const HomePage = ({ logOut }) => {
  return (
    <>
      <BackgroundImage />
      <section className="home">
        <p onClick={() => logOut()}> Log Out </p>
        <div className="home-main">
          <p>Lorem ipsum dolor sit amet</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </span>
          <br />
          <button>Szczegóły &rarr;</button>
        </div>
        <div className="home-content" onLoad={horizontalScroll}>
          {/* TO DO: title and content as variables */}
          <AgendaItemText
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
          />
          <AgendaItemTextImage
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
          />
          <AgendaItemText
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
          />
          <AgendaItemTextImage
            title="Lorem ipsum dolor sit amet"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
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
