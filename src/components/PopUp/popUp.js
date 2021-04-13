import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import popUpActions from "../../actions/PopUp";


function PopUp ({popUpState, openPopUp, closePopUp, openDoublePopUp, closeDoublePopUp}) {
    console.log()

    const clickHandler1 = () => {
        openPopUp()
        console.log(popUpState)
    }

    const clickHandler2 = () => {
        closePopUp()
        console.log(popUpState)
    }

    const clickHandler3 = () => {
        openDoublePopUp()
        console.log(popUpState)
    }

    const clickHandler4 = () => {
        closeDoublePopUp()
        console.log(popUpState)
    }


    return (
        <div className="POPUP">
            <button onClick={clickHandler1}>Open</button>
            <button onClick={clickHandler2}>Close</button>
            <button onClick={clickHandler3}>Open Double</button>
            <button onClick={clickHandler4}>Close Double</button>

            <h1>{ popUpState }</h1>
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
    console.log("State")
    console.log(state)
    return {
        popUpState: state.popUp.popUpState
    }
}


export default connect(putStateToProps, putActionsToProps)(PopUp);