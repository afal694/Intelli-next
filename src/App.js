import React from 'react';

import './App.css';
import { Button } from 'reactstrap';
import Main from './components/main';
import Login from './components/login';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
        <Login />
    </Provider>
  );
}

export default App;
