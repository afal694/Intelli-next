import * as ActionTypes from './ActionTypes';

export const Login = (state = {email: "andres"}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOGIN:
            // var email = action.payload;
            // console.log(`email: ${email}`);
            // return state.concat(email);
            console.log("ADD_LOGIN action!");
            return state
        default:
          return state;
      }
};