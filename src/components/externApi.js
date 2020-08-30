import React from 'react';
import {
  Form, FormGroup, Label, Input, Button, Card, CardBody,
  CardTitle, CardSubtitle, Row, CardImg
} from 'reactstrap';

function ApiPanel({ collection, isLoading, errMess }) {

  //const items = collection.items;
  const renderItem = collection.map((item) => {
    return (
      <div className="cardModule" key={item.data[0].nasa_id}>
        <Card className="border-primary">
          <CardImg top width="10%" src={item.links[0].href} alt="Card image cap" />
          <div className="card-header text-primary">{item.data[0].title}<div className="badge badge-info"></div></div>
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle className="text-info"> location: {item.data[0].location}</CardSubtitle>
          </CardBody>
          <div className="card-footer">
          </div>
        </Card>
      </div>
    );
  });
  //Api.collections.collection.items[0].data[0].nasa_id
  if (isLoading) {
    return (
      <div className="">
        <div className="App d-flex flex-column align-items-center justify-content-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  } else if (errMess) {
    return (
      <div className="container">
        <div className="row">
          <h1>{errMess}</h1>
        </div>
      </div>
    );
  } else if (collection [0] != null) {
    return (
      <div className="containerModules">
        {renderItem}
      </div>
    );
  } else {
    return (<div></div>);
  }
}


class ExternApi extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ApiPanel
        collection={this.props.collection}
        isLoading={this.props.Api.isLoading}
        errMess={this.props.Api.errMess}
      />
    );
  }
}

export default ExternApi;