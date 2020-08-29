import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Row
} from 'reactstrap';

function LeftPanel({ modules, isLoading, errMess }) {

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

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <LeftPanel
        modules={this.props.modules}
        isLoading={this.props.isLoading}
        errMess={this.props.errMess}
      />
    );
  }

}

export default Menu;