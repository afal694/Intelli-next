import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Login } from "./login";
import { Modules } from "./modules";
import { Auth } from "./auth";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			Login,
			Modules,
			Auth
		}),
		applyMiddleware(thunk,logger)
	);

	return store;
}