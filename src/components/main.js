import React from 'react';

import { connect } from 'react-redux'

import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';

import { Login } from "../redux/ActionCreators";


const mapStateToProps = state => {
  return {Login: state.Login};
};

const mapDispatchToProps = dispatch => ({
  postLogin: (email, password) => dispatch(Login(email, password))
});



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
 class Main extends React.Component {

  constructor(props) {
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

  render() {

    return (
      <Container>
        <Row>
          <Col md="4">
            <div>
              <LeftPanel modules={this.state.modules} />
            </div>
          </Col>
        </Row>
      </Container>
    );

  }
}


//export default connect(null, mapDispatchToProps)(Main);
export default Main;
