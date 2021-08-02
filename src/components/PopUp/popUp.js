import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { useHistory } from "react-router-dom";
import popUpActions from "../../actions/PopUp";
import PopUpTypes from "../PopUp/types"

import TimeTable from "../../pages/TimeTable/timeTable";
import MyAccount from "../../pages/MyAccount/myAccount";
import Register from "../../pages/Register";
import Info from "../../pages/Info";


function PopUp ({popUpState, openPopUp, closePopUp, openDoublePopUp, closeDoublePopUp, popUpWidth, popUpContentType}) {

    useEffect(() => {
        openPopUp()
        document.getElementsByClassName("popup-overlay")[0].classList.add("popup-overlay-active");
        document.getElementsByClassName("popup-content")[0].classList.add("popup-content-active");
    }, [openPopUp]);

    const history = useHistory();

    const closePopUpHandler = () => {
        closePopUp()
        console.log(popUpState)
        document.getElementsByClassName("popup-overlay")[0].classList.remove("popup-overlay-active");
        document.getElementsByClassName("popup-content")[0].classList.remove("popup-content-active");
        setTimeout(function() {
            history.push('/')
        }, 500)
    }

    const renderInnerComponent = () => {
        switch (popUpContentType) {
            case PopUpTypes.popUpTimeTable:
                return (<TimeTable/>)
            case PopUpTypes.popUpMyAccount:
                return (<MyAccount/>)
            case PopUpTypes.popUpRegister:
                return (<Register/>)
            case PopUpTypes.popUpInfo:
                return (<Info/>)
            default:
                return undefined
        }
    }

    return (
        <div className="popup">
            <div className="popup-overlay" onClick={closePopUpHandler}/>
            <div className="popup-content" style={{width: popUpWidth}}>
                { renderInnerComponent() }
            </div>
        </div>
    )
}


const putActionsToProps = (dispatch) => {
    return {
        closePopUp: bindActionCreators(popUpActions.popUpClose, dispatch),
        openPopUp: bindActionCreators(popUpActions.popUpOpen, dispatch),
        closeDoublePopUp: bindActionCreators(popUpActions.popUpCloseDouble, dispatch),
        openDoublePopUp: bindActionCreators(popUpActions.popUpOpenDouble, dispatch)
    }
}

const putStateToProps = (state) => {
    return {
        popUpState: state.popUp.popUpState
    }
}


export default connect(putStateToProps, putActionsToProps)(PopUp);