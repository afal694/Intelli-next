import React from 'react';
import { Button } from 'reactstrap';


function LeftPanel({object}){
  return (
    <p>{object}</p>
  );
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: null}
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email:"em@intelli-next.com", password : 12345})
    };
    fetch('https://api.myintelli.net/v1/login', requestOptions)
      .then(response => response.json())
      .then(token => {
        console.log(token);
        /*this.setState({data: modules})*/
      })
  }

  render() {

    return (
      <LeftPanel object={this.state.data}/>
    );

  }
}

export default Main;