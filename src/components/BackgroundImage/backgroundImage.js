import React from "react";
import backgroundImage from "../../assets/backgrounds/backgroundMainImage.jpg";
import logo from "../../assets/logo.png";
import {bindActionCreators} from "redux";
import videoActions from "../../actions/BackgroundVideo/actions";
import {connect} from "react-redux";

const BackgroundImage = ({videoFinished}) => {
  videoFinished()
  return (
    <>
      <div className="backgroundImage-container">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          className="backgroundImage-image"
          src={backgroundImage}
          alt={"Background image"}
          style={{ opacity: 1 }}
        />
        <img
          className="backgroundImage-logo"
          src={logo}
          alt={"Logo"}
          style={{ opacity: 1 }}
        />
      </div>
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
