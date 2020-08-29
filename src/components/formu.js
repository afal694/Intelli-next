import React from 'react';
import {
  Button, Row, Col, FormGroup, Label
} from 'reactstrap';
import { LocalForm, Control } from 'react-redux-form';
import { withRouter } from 'react-router-dom';

class Formu extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addLogin(values.email, values.password);
    this.props.fetchModules(values.email, values.password);
    this.props.history.push('/menu');
  }

  componentDidMount() {
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

export default  withRouter(Formu);