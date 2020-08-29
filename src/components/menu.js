import React from 'react';
import Devices from './devices';

function LeftPanel(props) {
  return (
    <div className="right-panel">
      <p>rightPanel!</p>
    </div>
  );
}

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <div>
        <div>
          <LeftPanel />
        </div>
        <div>
          <Devices
            modules={this.props.modules}
            isLoading={this.props.isLoading}
            errMess={this.props.errMess} />
        </div>
      </div>
    );
  }

}

export default Menu;