import React from 'react';
import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, FormGroup, Label, Input, Form
} from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

import Formu from "./formu";


class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <div className="d-flex justify-content-center">
          <Formu email={this.props.email} password={this.props.password} addLogin={this.props.addLogin}
            fetchModules={this.props.fetchModules}
          />
        </div>
      </Container>
    );
  }

}


export default Login;
