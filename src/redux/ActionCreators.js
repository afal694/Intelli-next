import * as ActionTypes from './ActionTypes';

//login
export const addLogin = (email, password) => ({
  type: ActionTypes.ADD_LOGIN,
  payload: { email, password }
});

//modules
export const fetchModules = (email, password) => (dispatch) => {

  dispatch(modulesLoading);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };


  return fetch('https://api.myintelli.net/v1/login', requestOptions)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error' + response.status + ':' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      dispatch(addModules(data.modules));
      dispatch(addToken(data.token));
    })
    .catch(error => dispatch(modulesFailed(error.message)))
}

export const addModules = (modules) => ({
  type: ActionTypes.ADD_MODULES,
  payload: modules
});

export const modulesLoading = () => ({
  type: ActionTypes.MODULES_LOADING
});

export const modulesFailed = (errMess) => ({
  type: ActionTypes.MODULES_FAILED,
  payload: errMess
});

export const addToken = (token) => ({
  type: ActionTypes.ADD_TOKEN,
  payload: token
});