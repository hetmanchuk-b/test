import React, { PureComponent, Fragment } from 'react';
import Form from './../../Passengers/Form';

class Edit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...props.data };
  }

  passengerUpdate = (key, value) => {
    this.setState({ [key]: value });
  }

  validation = () => {
    if ( this.state.birthdate === null || this.state.birthdate.length === 0 ) {
      this.setState({ error: 'Введите дату рождения' });
      return false;
    }

    return true;
  }

  handleUpdate = () => {
    if ( ! this.validation() ) return false;

    this.props.handleCancel();
    this.props.handleUpdate({ ...this.state });
  }

  render() {

    if ( ! this.props.visible ) return null;

    return (
      <Fragment>
        <Form fieldUpdate={this.passengerUpdate} passenger={{ ...this.state }} />
        <div className="btn-wrap d-flex  align-items-center">
          <button className="btn btn__white active" onClick={this.handleUpdate}>Сохранить</button>
          <button className="btn btn__white" onClick={this.props.handleCancel}>Отменить</button>
        </div>
      </Fragment>
    );
  }
}

export default Edit;
