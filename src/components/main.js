import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { addLogin, fetchModules } from '../redux/ActionCreators';


import Login from './login';
import  Menu  from "./menu";
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
    // dispatching plain actions
    addLogin: (email, password) => dispatch(addLogin(email, password)),
    fetchModules: () => dispatch(fetchModules())
  }
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modules: [] }
  }

  render() {

    return (
      <Switch>
        <Route path="/login" ><Login email={this.props.email} password={this.props.password} addLogin={this.props.addLogin}/></Route>
        <Route path="/menu" ><Menu modules={this.props.modules} fetchModules={this.props.fetchModules} /></Route>
        <Redirect to="/login" />
      </Switch>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);