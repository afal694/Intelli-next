import * as ActionTypes from './ActionTypes';

export const Login = (state = { email: "", password: "" }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LOGIN:
      console.log(action.payload.email + action.payload.password);
      return {
        ...state, email: action.payload.email, password: action.payload.password
      }
    default:
      return state;
  }
};