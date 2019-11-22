import React, { PureComponent } from 'react';
import Edit from './Edit';

class Passenger extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }

  toggleEdit = () => {
    this.setState({ edit: ! this.state.edit });
  }

  render() {
    const { id, lastName, firstName, middleName } = this.props.data;

    return (
      <div className="user user-box user-box__passengers">
        <div className="user-box__wrap d-flex j-content-between align-items-center">
          <div className="user-box__item">
            <div className="text">
              Пассажир
            </div>
            <div className="user__name">
              {lastName}, {firstName} {middleName}
            </div>
          </div>
          <div className="icon-box d-flex align-items-center">
            <div className="icon-item icon-item__edit" onClick={this.toggleEdit}></div>
            <div className="icon-item icon-item__delete" onClick={() => this.props.remove(id)}></div>
          </div>
        </div>
        <Edit data={this.props.data} handleCancel={this.toggleEdit} handleUpdate={this.props.update} visible={this.state.edit} />
      </div>
    );
  }
}

export default Passenger;
