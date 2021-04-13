import types from "./types";
export default {
    popUpClose: () => {
        return {
            type: types.popUpClose
        }
    },
    popUpOpen: () => {
        return {
            type: types.popUpOpen
        }
    },
    popUpCloseDouble: () => {
        return {
            type: types.popUpOpen
        }
    },
    popUpOpenDouble: () => {
        return {
            type: types.popUpOpenDouble
        }
    }
}