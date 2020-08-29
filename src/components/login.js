import React from 'react';
import Formu from "./formu";


class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App App-header">
        <div className="login-page">
          <Formu email={this.props.email} password={this.props.password} addLogin={this.props.addLogin}
            fetchModules={this.props.fetchModules}
          />
        </div>
      </div>
    );
  }

}


export default Login;
