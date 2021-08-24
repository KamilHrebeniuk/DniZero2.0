import React from "react";
import { AgendaItemText } from "../../components/AgendaItem";
import { AgendaItemTextImage } from "../../components/AgendaItem";

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-main">
        <p>Lorem ipsum dolor sit amet</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
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

export let schedule;
window.onload = function init() {
  con();
};
function con() {
  const xhttp = new XMLHttpRequest();
  var url = "https://dev.obozpwr.pl/session.php";
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        array["SID"] = document.cookie;
        getData();
      }
    }
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
}
let array = {
  what: "*",
  src: "OBOZ_harmonogram",
  opt: "",
  ch: 1,
  SID: "",
};
function getData() {
  const xhtps = new XMLHttpRequest();
  var url = "https://dev.obozpwr.pl/gettingData.php";
  xhtps.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        schedule = JSON.parse(this.response);
      }
    }
  };
  xhtps.open("POST", url, true);
  xhtps.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhtps.send(JSON.stringify(array));
}
export default HomePage;
