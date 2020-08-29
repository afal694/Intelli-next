import React from 'react';
import {Container
} from 'reactstrap';

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
