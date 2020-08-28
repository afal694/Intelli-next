import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { addLogin, fetchModules } from '../redux/ActionCreators';


import Login from './login';
import Menu from "./menu";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    modules: []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLogin: (email, password) => dispatch(addLogin(email, password)),
    fetchModules: (email, password) => dispatch(fetchModules(email, password))
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <Switch>
        <Route path="/login" ><Login email={this.props.email}
          password={this.props.password} 
          addLogin={this.props.addLogin} 
          fetchModules={this.props.fetchModules}
          /></Route>
        <Route path="/menu" ><Menu modules={this.props.modules} /></Route>
        <Redirect to="/login" />
      </Switch>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);