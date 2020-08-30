import React from 'react';
import {  Button, Card, CardBody,
  CardTitle, CardSubtitle, Row, CardImg, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


class ModalCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggleModal}>Description</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>{this.props.title} <p className="font-weight-lighter">{this.props.location}</p></ModalHeader>
          <ModalBody>
            <img src={this.props.img} className="img-fluid" alt="img" />
            <hr />
            {this.props.description}
          </ModalBody>
          <ModalFooter>
            <p className="font-weight-lighter">{this.props.date}</p>
            <p className="font-italic">{this.props.photographer}</p>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}


function ApiPanel({ collection, isLoading, errMess }) {

  const renderItem = collection.map((item) => {
    return (
      <div className="cardModule" key={item.data[0].nasa_id}>
        <Card className="border-secondary">
          <CardImg top width="100%" src={item.links[0].href} alt="Card image cap" />
          <div className="card-header text-primary">{item.data[0].title}<div className="badge badge-info"></div></div>
          <CardBody>
            <CardTitle></CardTitle>
            <CardSubtitle className="text-info"> location: {item.data[0].location}</CardSubtitle>
            <hr />
            <ModalCard
              description={item.data[0].description}
              photographer={item.data[0].photographer}
              title={item.data[0].title}
              location={item.data[0].location}
              img={item.links[0].href}
              date={item.data[0].date_created}
            />
          </CardBody>
        </Card>
      </div>
    );
  });

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
  } else if (collection[0] != null) {
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