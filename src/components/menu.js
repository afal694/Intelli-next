import React from 'react';
import Devices from './devices';
import ExternApi from './externApi';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { Switch, Route, withRouter, Redirect, useRouteMatch, Link } from 'react-router-dom';

function LeftPanel({ modules, isLoading, errMess }) {

  let match = useRouteMatch();

  const renderModules = modules.map((modules) => {

    return (
      <li className="nav-item" key={modules.id_module} >

        <Link to={`${match.url}/${modules.module}`} className="nav-link" >
          <span data-feather="home"></span>
          {modules.module}
        </Link>
        <span className="sr-only">(current)</span>
      </li>
    );
  });

  if (isLoading) {
    return (
      <div className="">
        <div className="App d-flex flex-column align-items-center justify-content-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="container-fluid ">
        <div className="row">
          <h1>{errMess}</h1>
        </div>
      </div>
    );
  } else if (modules[0] != null) {
    return (
      <div className="right-panel ">
        <div className="pt-3">
          <ul className="nav flex-column">
            <li className="nav-item" key="NasaApi" >

              <Link to={`${match.url}/api`} className="nav-link" >
                <span data-feather="home"></span>
                Nasa
              </Link>
              <span className="sr-only">(current)</span>
            </li>
            {renderModules}
          </ul>
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }

}


function SwicthPage(props) {

  let match = useRouteMatch();

  return (
    <div className="container-fluid p-0">
      <Switch>
        <Route exact path={match.path} >
          <ExternApi
            Api={props.Api}
            collection={props.collection} />
        </Route>
        <Route path={`${match.path}/DEVICE`} >
          <Devices token={props.token} 
            module={props.modules[11]}
            isLoading={props.isLoading}
            errMess={props.errMess}
          />
        </Route>
        <Route path={`${match.path}/api`}>
          <ExternApi
            Api={props.Api}
            collection={props.collection} />
        </Route>
        <Redirect to={match.path} />
      </Switch>
    </div>

  );
}

class Menu extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row">
        <div className="col-3 sidebar bg-light scroll-bar">
          <LeftPanel
            modules={this.props.modules}
            isLoading={this.props.isLoading}
            errMess={this.props.errMess}
          />
        </div>
        <div className="col-9 p-0 scroll-bar">
          <SwicthPage
            token={this.props.token}
            Api={this.props.Api}
            collection={this.props.collection}
            modules={this.props.modules}
            isLoading={this.props.isLoading}
            errMess={this.props.errMess}
          />
        </div>
       </div> 
    );
  }

}

export default withRouter(Menu);