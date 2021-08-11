import React from "react";
import backgroundImage from "../../assets/backgrounds/backgroundMainImage.jpg";
import logo from "../../assets/logo.png";

const BackgroundImage = () => {
  return (
    <>
      <div className="player-container">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          className="player-image"
          src={backgroundImage}
          alt={"Background image"}
          style={{ opacity: 1 }}
        />
        <img
          className="player-logo"
          src={logo}
          alt={"Logo"}
          style={{ opacity: 1 }}
        />
      </div>
    </>
  );
};


export default BackgroundImage;
