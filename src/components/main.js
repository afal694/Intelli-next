import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { addLogin, fetchModules, fetchAPI, togglePage } from '../redux/ActionCreators';

import Login from './login';
import Menu from "./menu";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    Modules: state.Modules,
    token: state.Auth.token,
    collection: state.Api.collections,
    Api: state.Api,
    page: state.Page.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLogin: (email, password) => dispatch(addLogin(email, password)),
    fetchModules: (email, password) => dispatch(fetchModules(email, password)),
    fetchAPI: () => dispatch(fetchAPI()),
    togglePage: (page) => dispatch(togglePage(page))
  }
}
 class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchAPI();
  }

  render() {

    return (
      <Switch>
        <Route path="/login" ><Login email={this.props.email}
          password={this.props.password}
          addLogin={this.props.addLogin}
          fetchModules={this.props.fetchModules}
        /></Route>
        <Route path="/menu"><Menu
          modules={this.props.Modules.modules}
          isLoading={this.props.Modules.isLoading}
          errMess={this.props.Modules.errMess}
          token={this.props.token}
          collection={this.props.collection}
          Api={this.props.Api}
          page={this.props.page}
          togglePage={this.togglePage}
        /></Route>
        <Redirect to="/login" />
      </Switch>

    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
