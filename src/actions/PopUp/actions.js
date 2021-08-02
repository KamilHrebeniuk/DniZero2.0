import types from "./types";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  popUpClose: () => {
    return {
      type: types.popUpClose,
    };
  },
  popUpOpen: () => {
    return {
      type: types.popUpOpen,
    };
  },
  popUpCloseDouble: () => {
    return {
      type: types.popUpOpen,
    };
  },
  popUpOpenDouble: () => {
    return {
      type: types.popUpOpenDouble,
    };
  },
};
