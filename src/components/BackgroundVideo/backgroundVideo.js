import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import backgroundVideo from "../../assets/backgrounds/backgroundMainVideo.mp4";
import backgroundImage from "../../assets/backgrounds/desktopBackgroundMainImage.jpg";
import logo from "../../assets/logo.png";
import { bindActionCreators } from "redux";
import videoActions from "../../actions/BackgroundVideo/actions";
import { connect } from "react-redux";
import videoStateTypes from "../../actions/BackgroundVideo/types";

const BackgroundVideo = ({ videoState, videoFinished }) => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);

  const staticImage = () => {
    setBackgroundOpacity(1);
    setTimeout(() => {
      setLogoOpacity(1);
    }, 4000);
  };

  useEffect(() => {
    if (videoState === videoStateTypes.videoFinished) {
      staticImage();
    }
  }, [videoState]);

  return (
    <>
      <div className="player-container">
        <ReactPlayer
          className="player-content"
          onEnded={videoFinished}
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
    </>
  );
};

const putActionsToProps = (dispatch) => {
  return {
    videoReset: bindActionCreators(videoActions.videoReset, dispatch),
    videoFinished: bindActionCreators(videoActions.videoFinished, dispatch),
  };
};

const putStateToProps = (state) => {
  return {
    videoState: state.backgroundVideo.videoState,
  };
};

export default connect(putStateToProps, putActionsToProps)(BackgroundVideo);
