import React from 'react';

class Devices extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    const text = event.target.value;
    const SearchRequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json','Authorization':'Bearer '+this.props.token }
    }
    fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=${text}`,SearchRequestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
    // setTimeout(() => {
    //   console.log("Key Up");
    //   fetch(`https://api.myintelli.net/v1/2/devices?limit=5&offset=0&search=ave`,SearchRequestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    //     console.log(JSON.stringify(event.target.value));  
    // }, 1000);
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Intelli-next</span>
          <span className="navbar-text">
            Navbar text with an inline element</span>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={(event) => this.handleKeyUp(event)}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Load</button>
          </form>
        </nav>
      </div>
    );
  }
}



export default Devices;