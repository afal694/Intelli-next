import * as ActionTypes from './ActionTypes';


export const Login = (email, password) => ({
    type: ActionTypes.LOGIN,
    payload: {email, password}
});


