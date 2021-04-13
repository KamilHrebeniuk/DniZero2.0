import types from "../actions/PopUp/types";

const initialState = {
    popUpState: types.popUpClose
}

export default (state = initialState, action) => {

    console.log(action)
    switch (action.type) {
        case types.popUpClose:
        case types.popUpOpen:
        case types.popUpCloseDouble:
        case types.popUpOpenDouble: {
            return {
                ...state,
                popUpState: action.type
            }
        }
        default: {
            return state
        }
    }
}