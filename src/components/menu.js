import React from 'react';
import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

function LeftPanel({ modules }) {

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
  return (
    <div>
    {renderModules}
    </div>
  );
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchModules();
  }

  render() {
    return (
      <LeftPanel modules={this.props.modules} />
    );
  }

}

export default Menu;