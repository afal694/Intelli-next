import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

import { LoginReducer } from "./redux/login";
import Main from './components/main';
import Login from './components/login';
import { createStore } from 'redux';

const store = createStore(LoginReducer);


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
