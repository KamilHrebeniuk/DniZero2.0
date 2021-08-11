import React, { useEffect, useState } from "react";
import SS_logo from "../../assets/sponsors/SS_logo.png";
import PKO_logo from "../../assets/sponsors/PKO_logo.png";
import C13_logo from "../../assets/sponsors/C13_logo.png";
import Szamani_logo from "../../assets/sponsors/Szamani_logo.png";
import Neobab_logo from "../../assets/sponsors/Neobab_logo.png";
import Kwater_logo from "../../assets/sponsors/kwater_logo.png";
import SMSapi_logo from "../../assets/sponsors/smsapi.png";
import { connect } from "react-redux";
import videoStateTypes from "../../actions/BackgroundVideo/types";
import IsMobile from "../../hooks/isMobile";

const Sponsor = ({ logo, color }) => {
  console.log(color);
  return (
    <div
      className="sponsors_bar-sponsor-container"
      style={{ backgroundColor: color }}
    >
      <img className="sponsors_bar-sponsor-logo" src={logo} alt={"Logo"} />
    </div>
  );
};

const SponsorsBar = ({ title, videoState }) => {
  const sponsors = [
    { image: SS_logo, color: "#ffffff" },
    { image: Kwater_logo, color: "#ffffff" },
    { image: PKO_logo, color: "#ffffff" },
    { image: C13_logo, color: "#ffffff" },
    { image: Szamani_logo, color: "#ffffff" },
    { image: Neobab_logo, color: "#000000" },
    { image: SMSapi_logo, color: "#ffffff" },

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
  }, [videoState]);

  return (
    <section
      className="sponsors_bar-container"
      style={{ opacity: sponsorsOpacity }}
    >
      <h1 className="sponsors_bar-sponsors-title">{title}</h1>
      <div className="sponsors_bar-sponsors-container">
        {sponsors.map((sponsor) => (
          <Sponsor logo={sponsor.image} color={sponsor.color} />
        ))}
      </div>
    </section>
  );
};

const putStateToProps = (state) => {
  return {
    videoState: state.backgroundVideo.videoState,
  };
};

export default connect(putStateToProps)(SponsorsBar);
