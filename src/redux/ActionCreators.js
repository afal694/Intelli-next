import * as ActionTypes from './ActionTypes';

export const addLogin = (email, password) => ({
  type: ActionTypes.ADD_LOGIN,
  payload: { email, password }
});

export const fetchModules = (email, password) => (dispatch) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };
  fetch('https://api.myintelli.net/v1/login', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(addModules(data.modules));
    })
}

export const addModules = (modules) => ({
  type: ActionTypes.ADD_MODULES,
  payload: modules
});