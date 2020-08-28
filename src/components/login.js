import React from 'react';
import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, FormGroup, Label, Input, Form
} from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

import  Formu  from "./formu";
import { connect } from 'react-redux';
import { addLogin } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    addLogin: (email, password) => dispatch(addLogin(email, password))
  }
}
class Login extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <div className="d-flex justify-content-center">
          <Formu email={this.props.email} password={this.props.password} addLogin={this.props.addLogin}/>
        </div>
      </Container>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
