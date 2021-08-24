import React, { useEffect, useState } from "react";
import SS_logo from "../../assets/sponsors/SS_logo.png";
// import PKO_logo from "../../assets/sponsors/PKO_logo.png";
import C13_logo from "../../assets/sponsors/C13_logo.png";
import Szamani_logo from "../../assets/sponsors/Szamani_logo.png";
import Neobab_logo from "../../assets/sponsors/Neobab_logo.png";
import Kwater_logo from "../../assets/sponsors/kwater_logo.png";
import SMSapi_logo from "../../assets/sponsors/smsapi.png";
import { connect } from "react-redux";
import videoStateTypes from "../../actions/BackgroundVideo/types";
import IsMobile from "../../hooks/isMobile";

const Sponsor = ({ logo, color, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="sponsors_bar-sponsor-container"
        style={{ backgroundColor: color }}
      >
        <img className="sponsors_bar-sponsor-logo" src={logo} alt={"Logo"} />
      </div>
    </a>
  );
};

const SponsorsBar = ({ title, videoState }) => {
  const sponsors = [
    { image: SS_logo, color: "#ffffff", link: "https://samorzad.pwr.edu.pl" },
    { image: Kwater_logo, color: "#ffffff" },
    // { image: PKO_logo, color: "#ffffff", link: "https://www.pkobp.pl" },
    { image: C13_logo, color: "#ffffff", link: "https://c-13.pl" },
    {
      image: Szamani_logo,
      color: "#ffffff",
      link: "https://www.facebook.com/SZAMAniTruck/",
    },
    { image: Neobab_logo, color: "#000000", link: "https://neobab.pl" },
    {
      image: SMSapi_logo,
      color: "#ffffff",
      link: "http://idz.do/smsapiforstudents",
    },
  ];

  const isMobile = IsMobile;
  const [sponsorsOpacity, setSponsorsOpacity] = useState(0);
  const timeout = isMobile ? 0 : 1000;

  useEffect(() => {
    if (videoState === videoStateTypes.videoFinished) {
      setTimeout(() => {
        setSponsorsOpacity(1);
      }, timeout);
    }
  }, [timeout, videoState]);

  return (
    <section
      className="sponsors_bar-container"
      style={{ opacity: sponsorsOpacity }}
    >
      <h1 className="sponsors_bar-sponsors-title">{title}</h1>
      <div
        className="sponsors_bar-sponsors-container"
        onLoad={horizontalScroll}
      >
        {sponsors.map((sponsor) => (
          <Sponsor
            logo={sponsor.image}
            color={sponsor.color}
            link={sponsor.link}
          />
        ))}
      </div>
    </section>
  );
};
function horizontalScroll() {
  const scrollContainer = document.querySelector(
    ".sponsors_bar-sponsors-container"
  );
  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }
}
const putStateToProps = (state) => {
  return {
    videoState: state.backgroundVideo.videoState,
  };
};

export default connect(putStateToProps)(SponsorsBar);
