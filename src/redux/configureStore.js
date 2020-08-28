import {createStore, combineReducers} from 'redux';
import { Login } from "./login";

export const ConfigureStore = () => {
    const store = createStore(
        Login
    );

    return store;
}