import React from 'react';
import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, FormGroup, Label, Input, Form
} from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';

class Formu extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    alert("Current values is: " + JSON.stringify(values));
    this.props.addLogin(values.email, values.password);
    console.log("estado @"+this.props.email+" "+this.props.password);
  }

  componentDidMount(){
  }

  render() {


    return (
      <LocalForm
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <FormGroup>
          <Label htmlFor="email" md={2}>Email</Label>
          <Control.text model=".email" id="email" name="email" className="form-control" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" md={2}>Password</Label>
          <Control.password model=".password" id="password" name="password" className="form-control" placeholder="Password" />
        </FormGroup>
        <Row className="form-group">
          <Col className="align-items-center">
            <Button type="submit" color="success">
              Login
                  </Button>
          </Col>
        </Row>
      </LocalForm>

    );
  }
}

export default Formu;