import types from "../actions/BackgroundVideo/types";

const initialState = {
  videoState: types.videoReset,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case types.videoReset:
    case types.videoFinished: {
      return {
        ...state,
        videoState: action.type,
      };
    }
    default: {
      return state;
    }
  }
};
