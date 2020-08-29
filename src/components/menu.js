import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function LeftPanel({ modules, isLoading, errMess }) {

  const renderModules = modules.map((modules) => {
    return (
      <Card key={modules.id_module}>
        <CardBody>
          <CardTitle>Module: {modules.module}</CardTitle>
          <CardSubtitle>path: {modules.path}</CardSubtitle>
        </CardBody>
      </Card>
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
      <div>
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