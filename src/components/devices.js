import React from 'react';
import {
  Form, FormGroup, Label, Input, Button, Card, CardBody,
  CardTitle, CardSubtitle, Row
} from 'reactstrap';

function SearchForm(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="text">search</Label>
          <Input type="text" name="text" id="search" placeholder="search field..." />
        </FormGroup>
      </Form>
    </div>
  );
}

function BtnCargar(props) {
  return (
    <div>
      <Button color="info">cargar más</Button>
    </div>
  );
}

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
    return (<div className="container">
      <div className="row">
        <p>Loading...</p>
      </div>
    </div>);
  } else if (errMess) {
    return (<div className="container">
      <div className="row">
        <h4>{errMess}</h4>
      </div>
    </div>);
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
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav devices-panel">
              <div class="nav-item">
                <SearchForm />
              </div>
              <div class="nav-item align-item-end">
                <BtnCargar />
              </div>
            </div>
          </div>
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