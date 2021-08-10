import React, { useEffect, useState } from "react";
import Button from "../Button";
import { connect } from "react-redux";
import videoStateTypes from "../../actions/BackgroundVideo/types";

const PromotedEventDescription = ({
  title,
  description,
  buttons,
  videoState,
  movable,
}) => {
  console.log(buttons);

  const [containerPosition, setContainerPosition] = useState("50%");

  useEffect(() => {
    if (videoState === videoStateTypes.videoFinished && movable) {
      setTimeout(() => {
        setContainerPosition("40%");
      }, 1000);
    }
  }, [videoState, movable]);

  return (
    <section
      className="promoted_event_description-container"
      style={{ top: containerPosition }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="promoted_event_description-buttons_container">
        {buttons.map((button) => (
          <Button type={button.type} to={button.to} title={button.title} />
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

export default connect(putStateToProps)(PromotedEventDescription);
