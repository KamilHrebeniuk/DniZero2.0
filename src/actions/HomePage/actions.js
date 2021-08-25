import types from "./types";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  logIn: () => {
    return {
      type: types.logged,
    };
  },
  logOut: () => {
    return {
      type: types.unlogged,
    };
  },
};
