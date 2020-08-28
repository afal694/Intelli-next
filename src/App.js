import React from 'react';

import './App.css';
import Main from './components/main';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore';

import {
  BrowserRouter as Router
} from "react-router-dom";

const store = ConfigureStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  );
}

export default App;
