import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import popUpActions from "../../actions/PopUp";
import { Link, useHistory } from "react-router-dom";
import PopUpStates from "../../actions/PopUp/types";
import ico_home from "../../assets/icons/home.png";
import ico_timetable from "../../assets/icons/timetable.png";
import ico_account from "../../assets/icons/account.png";

function Navigation({ popUpState, openPopUp, closePopUp }) {
  const history = useHistory();
  console.log(history);

  // eslint-disable-next-line no-unused-vars
  const closePopUpHandler = () => {
    if (popUpState !== PopUpStates.popUpClose) {
      closePopUp();
      document
        .getElementsByClassName("popup-overlay")[0]
        .classList.remove("popup-overlay-active");
      document
        .getElementsByClassName("popup-content")[0]
        .classList.remove("popup-content-active");
      setTimeout(function () {
        history.push("/");
      }, 1500);
    }
  };

  const isLoggedIn = false;

  return isLoggedIn ? (
    <nav className="navigation">
      <div className="navigation-element">
        {/*<img onClick={closePopUpHandler} className="navigation-icon" src={ico_home} alt="HomePage"/>*/}
        <Link to="/">
          <img className="navigation-icon" src={ico_home} alt="HomePage" />
        </Link>
      </div>
      <div className="navigation-element">
        <Link to="/TimeTable">
          <img
            className="navigation-icon"
            src={ico_timetable}
            alt="TimeTable"
          />
        </Link>
      </div>
      <div className="navigation-element">
        <Link to="/MyAccount">
          <img className="navigation-icon" src={ico_account} alt="MyAccount" />
        </Link>
      </div>
    </nav>
  ) : null;
}

const putActionsToProps = (dispatch) => {
  return {
    openPopUp: bindActionCreators(popUpActions.popUpOpen, dispatch),
    closePopUp: bindActionCreators(popUpActions.popUpClose, dispatch),
  };
};

const putStateToProps = (state) => {
  return {
    popUpState: state.popUp.popUpState,
  };
};

export default connect(putStateToProps, putActionsToProps)(Navigation);
