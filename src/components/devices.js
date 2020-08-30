import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function ProcessPanel({ module, isLoading, errMess }) {

  const renderModules = module.operations.map((operation) => {
    return (
      <div className="cardModule" key={operation}>
        <Card className="border-primary">
          <div className="card-header text-primary">operation <div className="badge badge-info"> {operation} </div></div>
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle className="text-info">path: {module.path}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
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
      <div className="container">
        <div className="row">
          <h1>{errMess}</h1>
        </div>
      </div>
    );
  } else if (module != null) {
    return (
      <div className="containerModules">
        {renderModules}
      </div>
    );
  } else {
    return (<div></div>);
  }
}

class Devices extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    const text = event.target.value;
    const SearchRequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer  ${this.props.token}` }
    }
    fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=${text}`, SearchRequestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    // setTimeout((text) => {
    //   fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=${text}`,SearchRequestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    // }, 1000); 

  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Intelli-next</span>
          <span className="navbar-text">
            Operations for Device Module</span>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(event) => this.handleKeyUp(event)} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Load</button>
          </form>
        </nav>
        <ProcessPanel
          module={this.props.module}
          errMess={this.props.errMess}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}



export default Devices;