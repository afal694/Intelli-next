import * as ActionTypes from './ActionTypes';

export const Auth = (state = {
  token: ''
}, action) => {
  switch (action.type) {

    case ActionTypes.ADD_TOKEN:
      return {
        ...state, token: action.payload
      };

    default:
      return state;
  }
};