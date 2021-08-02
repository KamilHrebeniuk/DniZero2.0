import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import backgroundVideo from "../../images/backgrounds/backgroundVideo1.mp4";

const LoginPage = () => {
  return (
    <section className="login">
      <div className="player-container">
        <ReactPlayer
          className="player-content"
          onEnded={() => {
            console.log("Koniec filmu");
          }}
          playing
          muted
          url={backgroundVideo}
        />
      </div>
      <div className="login-page-left-container">Left</div>
      <div className="login-page-right-container">
        <Link to="Register">Button Register</Link>
      </div>
      <div className="login-page-bottom-container">
        <Link to="Info">Button Info</Link>
      </div>
    </section>
  );
};

export default LoginPage;
