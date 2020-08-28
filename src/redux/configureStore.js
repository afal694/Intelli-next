import { createStore, combineReducers } from 'redux';
import { Login } from './ActionCreators';
import { LOGIN } from './ActionTypes';
import { LoginReducer } from "./login";


export const ConfigureStore = () => {
  const store = createStore(LoginReducer);
}