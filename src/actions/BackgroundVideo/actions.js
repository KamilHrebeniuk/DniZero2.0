import types from "./types";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  videoReset: () => {
    return {
      type: types.videoReset,
    };
  },
  videoFinished: () => {
    return {
      type: types.videoFinished,
    };
  },
};
