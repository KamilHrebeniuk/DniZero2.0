import React from "react";
import desktopBackgroundImage from "../../assets/backgrounds/desktopBackgroundMainImage.jpg";
import mobileBackgroundImage from "../../assets/backgrounds/mobileBackgroundMainImage.jpg";
import logo from "../../assets/logo.png";
import { bindActionCreators } from "redux";
import videoActions from "../../actions/BackgroundVideo/actions";
import { connect } from "react-redux";
import IsMobile from "../../hooks/isMobile";

const BackgroundImage = ({ videoFinished }) => {
  videoFinished();
  const isMobile = IsMobile();

  console.log("Mobile");
  console.log(isMobile);

  return (
    <>
      <div className="backgroundImage-container">
        {isMobile ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="backgroundImage-image"
            src={mobileBackgroundImage}
            alt={"Background image"}
            style={{ opacity: 1 }}
          />
        ) : (
          <>
            {console.log("No desktop jak hui")}
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              className="backgroundImage-image"
              src={desktopBackgroundImage}
              alt={"Background image"}
              style={{ opacity: 1 }}
            />
            <img
              className="backgroundImage-logo"
              src={logo}
              alt={"Logo"}
              style={{ opacity: 1 }}
            />
          </>
        )}
      </div>
      {isMobile ? (
        <img
          className="backgroundImage-logo"
          src={logo}
          alt={"Logo"}
          style={{ opacity: 1 }}
        />
      ) : null}
    </>
  );
};

const putActionsToProps = (dispatch) => {
  return {
    videoFinished: bindActionCreators(videoActions.videoFinished, dispatch),
  };
};

const putStateToProps = (state) => {
  return {
    videoState: state.backgroundVideo.videoState,
  };
};

export default connect(putStateToProps, putActionsToProps)(BackgroundImage);
