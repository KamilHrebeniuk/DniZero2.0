import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import popUpActions from "../../actions/PopUp";
import PopUpTypes from "../PopUp/types"

import {BrowserRouter, NavLink, Route, useHistory} from "react-router-dom";
import PopUpStates from "../../actions/PopUp/types"
import PopUp from "../PopUp/popUp";
import ico_home from "../../images/icons/home.png";
import ico_timetable from "../../images/icons/timetable.png";
import ico_account from "../../images/icons/account.png";

import HomePage from "../HomePage";
import IsMobile from "../Utilities/IsMobile";


function Navigation ({popUpState, openPopUp, closePopUp}) {
    const history = useHistory();
    console.log(history)

    // eslint-disable-next-line no-unused-vars
    const closePopUpHandler = () => {
        if (popUpState !== PopUpStates.popUpClose) {
            closePopUp()
            document.getElementsByClassName("popup-overlay")[0].classList.remove("popup-overlay-active");
            document.getElementsByClassName("popup-content")[0].classList.remove("popup-content-active");
            setTimeout(function () {
                history.push('/')
            }, 1500)
        }
    }

    const isMobile = IsMobile();

    return (
        <BrowserRouter>
            <HomePage/>
            <Route path="/TimeTable">
                { isMobile ? <PopUp popUpContentType={PopUpTypes.popUpTimeTable}/> : <PopUp popUpContentType={PopUpTypes.popUpTimeTable} popUpWidth="1000px"/> }
            </Route>
            <Route path="/MyAccount">
                { isMobile ? <PopUp popUpContentType={PopUpTypes.popUpMyAccount}/> : <PopUp popUpContentType={PopUpTypes.popUpMyAccount} popUpWidth="700px"/> }
            </Route>

            <nav className="navigation">
                <div className="navigation-element">
                    {/*<img onClick={closePopUpHandler} className="navigation-icon" src={ico_home} alt="HomePage"/>*/}
                    <NavLink to="/"><img className="navigation-icon" src={ico_home} alt="HomePage"/></NavLink>
                </div>
                <div className="navigation-element">
                    <NavLink to="/TimeTable"><img className="navigation-icon" src={ico_timetable} alt="TimeTable"/></NavLink>
                </div>
                <div className="navigation-element" >
                    <NavLink to="/MyAccount"><img className="navigation-icon" src={ico_account} alt="MyAccount"/></NavLink>
                </div>
            </nav>
        </BrowserRouter>
    )
}


const putActionsToProps = (dispatch) => {
    return {
        openPopUp: bindActionCreators(popUpActions.popUpOpen, dispatch),
        closePopUp: bindActionCreators(popUpActions.popUpClose, dispatch),
    }
}

const putStateToProps = (state) => {
    return {
        popUpState: state.popUp.popUpState
    }
}


export default connect(putStateToProps, putActionsToProps)(Navigation);