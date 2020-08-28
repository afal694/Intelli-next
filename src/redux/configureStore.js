import {createStore, combineReducers} from 'redux';
import { Login } from "./login";

export const ConfigureStore = () => {
    const store = createStore(
        //combineReducers(Login)
        Login
    );

    return store;
}