import types from "../actions/HomePage/types";

const initialState = {
  loginState: types.unlogged,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case types.logged:
    case types.unlogged: {
      return {
        ...state,
        loginState: action.type,
      };
    }
    default: {
      return state;
    }
  }
};
