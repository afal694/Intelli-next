import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './login';
import  Menu  from "./menu";


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modules: [] }
  }

  render() {

    return (
      <Switch>
        <Route path="/login" ><Login /></Route>
        <Route path="/menu" ><Menu /></Route>
        <Redirect to="/menu" />
      </Switch>
    );

  }
}

export default Main;