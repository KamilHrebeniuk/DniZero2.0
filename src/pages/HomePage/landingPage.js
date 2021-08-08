import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import backgroundVideo from "../../images/backgrounds/backgroundMainVideo.mp4";
import PromotedEventDescription from "../../components/PromotedEvent";

const LandingPage = () => {
  const register_buttons = [
    { type: "primary", title: "Zapisz się!" },
    { type: "secondary", title: "Więcej informacji" },
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
        description={"Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! Nasze Obozy są zajebiste! "}
        buttons={register_buttons}
      />
    </>
  );
};

export default LandingPage;
