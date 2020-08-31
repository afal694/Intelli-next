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

  const SideBarUp = modules.map((modules) => {

    if (modules.path.slice(0, 2) === "1.") {
      if(modules.setting_module_config.position==="SIDEBAR-DOWN"){
        return (
          <li className="nav-item" key={modules.id_module} >
          <Link to={`${match.url}/${modules.module}`} className="nav-link" >
            <span data-feather="home"></span>
            {modules.module}
          </Link>
          <span className="sr-only">(current)</span>
        </li>
        );
      }
    }

  });

  const SideBarDown = modules.map((modules) => {

    if(modules.path.slice(0, 2) === "1."){
      if(modules.setting_module_config.position==="SIDEBAR-DOWN"){
        return (
          <li className="nav-item" key={modules.id_module} >
          <Link to={`${match.url}/${modules.module}`} className="nav-link" >
            <span data-feather="home"></span>
            {modules.module}
          </Link>
          <span className="sr-only">(current)</span>
        </li>
        );
      }
    }
  });

  if (isLoading) {
    return (
      <div className="right-panel ">
        <div className="pt-3">
          <ul className="nav flex-column">
            <li className="nav-item" key="NasaApi" >

              <Link to={`${match.url}/api`} className="nav-link" >
                <span data-feather="home"></span>
              NASA - SPACEX
            </Link>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item" >
              <span data-feather="home"></span>
                Loading ...
              <span className="sr-only">(current)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="right-panel ">
        <div className="pt-3">
          <ul className="nav flex-column">
            <li className="nav-item" key="NasaApi" >

              <Link to={`${match.url}/api`} className="nav-link" >
                <span data-feather="home"></span>
              NASA - SPACEX
            </Link>
              <span className="sr-only">(current)</span>
            </li>
            <li>
              <h1>{errMess}</h1>
            </li>
          </ul>
        </div>
      </div>

    );
  } else if (modules[0] != null) {
    return (
      <div className="right-panel ">
        <div className="pt-3">
          <ul className="nav flex-column">
            {SideBarUp}
          </ul>
          <hr />
          <ul className="nav flex-column">
            {SideBarDown}
          </ul>
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }

}

// <li className="nav-item" key="NasaApi" >
// <Link to={`${match.url}/api`} className="nav-link" >
//   <span data-feather="home"></span>
//   NASA - SPACEX
// </Link>
// <span className="sr-only">(current)</span>
// </li>


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
        <Route path={`${match.path}/construccion`}>
          <div className="justify-content-center text-center text-white">
            <h4>EN CONSTRUCCIÓN</h4>
          </div>
        </Route>
        <Redirect to={`${match.path}/construccion`} />
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
        <div className="col-md-4 col-lg-3 sidebar bg-light scroll-bar">
          <LeftPanel
            modules={this.props.modules}
            isLoading={this.props.isLoading}
            errMess={this.props.errMess}
          />
        </div>
        <div className="col-md-8 col-lg-9 p-0 scroll-bar">
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