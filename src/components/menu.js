import React from 'react';
import Devices from './devices';
import ExternApi from './externApi';

function LeftPanel(props) {
  return (
    <div className="right-panel ">
      <div className="pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Operations
          </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Devices
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  // render() {
  //   return (
  //     <div className="">
  //       <div className="row">
  //         <div className="col-2 sidebar bg-light">
  //           <LeftPanel />
  //         </div>
  //         <div className="col-10 p-0">
  //           <Devices
  //             modules={this.props.modules}
  //             isLoading={this.props.isLoading}
  //             errMess={this.props.errMess} 
  //             token={this.props.token}
  //             />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-2 sidebar bg-light">
            <LeftPanel />
          </div>
          <div className="col-10 p-0">
            <ExternApi
              Api={this.props.Api}
              collection={this.props.collection}
              />
          </div>
        </div>
      </div>
    );
  }

}

export default Menu;