import React from 'react';
import {
  Form, FormGroup, Label, Input, Button, Card, CardBody,
  CardTitle, CardSubtitle, Row
} from 'reactstrap';

function DevicesPanel({ modules, isLoading, errMess }) {

  const renderModules = modules.map((modules) => {
    return (
      <div className="cardModule" key={modules.id_module}>
        <Card className="border-primary">
          <div className="card-header text-primary">{modules.module} <div className="badge badge-info"> {modules.id_module} </div></div>
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle className="text-info"> path: {modules.path}</CardSubtitle>
          </CardBody>
          <div className="card-footer">
          </div>
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
  } else if (modules[0] != null) {
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
      headers: { 'Content-Type': 'application/json','Authorization':'Bearer '+this.props.token }
    }
    fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=${text}`,SearchRequestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
    // setTimeout(() => {
    //   console.log("Key Up");
    //   fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=ave`,SearchRequestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    //     console.log(JSON.stringify(event.target.value));  
    // }, 1000);
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Intelli-next</span>
          <span className="navbar-text">
            Navbar text with an inline element</span>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(event) => this.handleKeyUp(event)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Load</button>
          </form>
        </nav>
        <DevicesPanel
          modules={this.props.modules}
          isLoading={this.props.isLoading}
          errMess={this.props.errMess} />
      </div>
    );
  }
}



export default Devices;