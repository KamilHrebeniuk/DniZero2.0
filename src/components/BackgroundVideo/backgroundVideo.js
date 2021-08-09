import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import backgroundVideo from "../../assets/backgrounds/backgroundMainVideo.mp4";
import backgroundImage from "../../assets/backgrounds/backgroundMainImage.jpg";
import logo from "../../assets/logo.png";
import SponsorsBar from "../SponsorsBar";

const BackgroundVideo = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [sponsorsOpacity, setSponsorsOpacity] = useState(0);

  const staticImage = () => {
    setBackgroundOpacity(1);
    setTimeout(() => {
      setLogoOpacity(1);
    }, 4000);
    setTimeout(() => {
      setSponsorsOpacity(1);
    }, 1000);
  };

  return (
    <>
      <div className="player-container">
        <ReactPlayer
          className="player-content"
          onEnded={staticImage}
          playing
          muted
          url={backgroundVideo}
        />
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          className="player-image"
          src={backgroundImage}
          alt={"Background image"}
          style={{ opacity: backgroundOpacity }}
        />
        <img
          className="player-logo"
          src={logo}
          alt={"Logo"}
          style={{ opacity: logoOpacity }}
        />
      </div>
      <SponsorsBar opacity={sponsorsOpacity} />
    </>
  );
};

export default BackgroundVideo;
