import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { addLogin, fetchModules } from '../redux/ActionCreators';


import Login from './login';
import Menu from "./menu";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    Modules: state.Modules
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLogin: (email, password) => dispatch(addLogin(email, password)),
    fetchModules: (email, password) => dispatch(fetchModules(email, password)),
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
        <Route path="/menu" ><Menu
          modules={this.props.Modules.modules}
          isLoading={this.props.Modules.isLoading}
          errMess={this.props.Modules.errMess}
        /></Route>
        <Redirect to="/login" />
      </Switch>
    );

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));