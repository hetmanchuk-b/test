import React, { Component, Fragment } from 'react';
import Form from './../../Passengers/Form';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passenger: {},
      visible: false
    };
  }

  toggle = () => {
    this.setState({ visible: ! this.state.visible });
  }

  passengerUpdate = (key, value) => {
    let passenger = { ...this.state.passenger };

    passenger[key] = value;
    this.setState({ passenger });
  }

  handleCreate = () => {
    this.toggle();
    this.props.handleCreate(this.state.passenger);
  }

  render() {
    const { passenger, visible } = this.state;

    if ( ! visible ) return (
      <div className="btn-wrap">
        <button className="btn btn__main" onClick={this.toggle}>Добавить пассажира</button>
      </div>
    );

    return (
      <Fragment>
        <Form fieldUpdate={this.passengerUpdate} passenger={passenger} />
        <div className="btn-wrap d-flex  align-items-center">
          <button className="btn btn__white active" onClick={this.handleCreate}>Сохранить</button>
          <button className="btn btn__white" onClick={this.toggle}>Отменить</button>
        </div>
      </Fragment>
    );
  }
}

export default Create;
