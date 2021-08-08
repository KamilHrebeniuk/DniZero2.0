import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import backgroundVideo from "../../images/backgrounds/backgroundMainVideo.mp4";
import PromotedEventDescription from "../../components/PromotedEvent";

const LandingPage = () => {
  const register_buttons = [
    { type: "primary", title: "Zapisz się!", to: "/Register" },
    { type: "secondary", title: "Więcej informacji", to: "/Info" },
  ];

  return (
    <>
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
      <PromotedEventDescription
        title={"Zapisz się na Obóz Studentów PWr"}
        description={
          <p>
            Kiedy: 4-9 września 2021
            <br /> Gdzie: Trzyjeziora w Wieleniu Zaobrzańskim
            <br />
            Cena: 670zł + 80zł dojazd
          </p>
        }
        buttons={register_buttons}
      />
    </>
  );
};

export default LandingPage;
