import * as ActionTypes from './ActionTypes';

export const addLogin = (email, password) => ({
    type: ActionTypes.ADD_LOGIN,
    payload: {email, password}
});