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
  <div>{renderModules}</div>
);
}

class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state = { modules: [] }
    }

    componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "em@intelli-next.com", password: 12345 })
    };
    fetch('https://api.myintelli.net/v1/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ modules: data.modules })
      })
  }

  render (){
      return(
        <LeftPanel modules={this.state.modules}/>
      );
  }

}

export default Menu;