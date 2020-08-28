import * as ActionTypes from './ActionTypes';

export const LoginReducer = (state = {
  email: '',
  password: ''
}, action) => {
  switch (action.type) {

    case ActionTypes.LOGIN:
      return {
        ...state, email: action.payload.email, password: action.payload.password
      }

    default:
      return state;
  }
};