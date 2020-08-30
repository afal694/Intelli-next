import * as ActionTypes from './ActionTypes';

//login
export const addLogin = (email, password) => ({
  type: ActionTypes.ADD_LOGIN,
  payload: { email, password }
});

//modules
export const fetchModules = (email, password) => (dispatch) => {

  dispatch(modulesLoading());

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

//token 

export const addToken = (token) => ({
  type: ActionTypes.ADD_TOKEN,
  payload: token
});

//API

export const fetchAPI = () => (dispatch) => {

  dispatch(apiLoading());

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

  const urlApi = 'https://images-api.nasa.gov/search?q=spacex&media_type=image';

  return fetch(urlApi, requestOptions)
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
      dispatch(addApi(data.collection.items));
    })
    .catch(error => dispatch(apiFailed(error.message)))
}

export const addApi = (collections) => ({
  type: ActionTypes.ADD_API,
  payload: collections
});

export const apiLoading = () => ({
  type: ActionTypes.API_LOADING
});

export const apiFailed = (errMess) => ({
  type: ActionTypes.API_FAILED,
  payload: errMess
});

//Page

export const togglePage = (page) => ({
  type: ActionTypes.TOGGLE_PAGE,
  payload: page
});
