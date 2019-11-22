import React, { PureComponent, Fragment } from 'react';
import Tabs from './Tabs';

class Account extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      phone: props.phone,
      firstName: props.firstName,
      lastName: props.lastName,
      edit: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.email !== prevProps.email) {
      this.setState({
        email: this.props.email,
        phone: this.props.phone,
        firstName: this.props.firstName,
        lastName: this.props.lastName
      });
    }
  }

  toggleEdit = () => {
    this.setState({ edit: ! this.state.edit });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleUpdate = () => {
    this.setState({ edit: false });
    this.props.update({ ...this.state });
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    const editWrapper = this.state.edit
      ? (
        <Fragment>
          <div className="edit-box d-flex j-content-between align-items-center f-wrap">
            <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Фамилия:
              </span>
              <input type="text" name="lastName" value={lastName} onChange={this.handleInput} />
            </div>
            <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Имя:
              </span>
              <input type="text" name="firstName" value={firstName} onChange={this.handleInput} />
            </div>
            <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                email:
              </span>
              <input type="text" name="email" value={email} onChange={this.handleInput} />
            </div>
            <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Номе телефона:
              </span>
              <input type="text" name="phone" value={phone} onChange={this.handleInput} />
            </div>
          </div>
          <div className="btn-wrap">
            <button className="btn btn__white active" onClick={this.handleUpdate}>Сохранить</button>
            <button className="btn btn__white" onClick={this.toggleEdit}>Отменить</button>
          </div>
          <div className="info-text">
            Звёздочкой (<span className="text-red">*</span>) 
            обязательные поля, заполняемые при регистрации
          </div> 
        </Fragment>
      ) : (
        <div className="btn-wrap"><button className="btn btn__main" onClick={this.toggleEdit}>Редактировать</button></div>
      );

    return (
      <Fragment>
        <Tabs tab="account" />
        <div className="cabinet-page__content">
          <div className="row">
            <div className="col-md-6">
              <div className="user-info">
                <div className="user-info__item d-flex align-items-center">
                  <div className="user-info__name">
                     Имя
                  <span className="required text-red">*</span>
                  : 
                  </div>
                  <div className="user-info__data">
                    {this.props.firstName}
                  </div>
                </div>
                <div className="user-info__item d-flex align-items-center">
                  <div className="user-info__name">
                    Фамилия
                  <span className="required text-red">*</span>
                  : 
                  </div>
                  <div className="user-info__data">
                    {this.props.lastName}
                  </div>
                </div>
                <div className="user-info__item d-flex align-items-center">
                  <div className="user-info__name">
                     Электронная почта
                  <span className="required text-red">*</span>
                  : 
                  </div>
                  <div className="user-info__data">
                    {this.props.email}
                  </div>
                </div>
                <div className="user-info__item d-flex align-items-center">
                  <div className="user-info__name">
                    Номер телефона: 
                  </div>
                  <div className="user-info__data">
                    {this.props.phone}
                  </div>
                </div>
                <div className="user-info__item d-flex align-items-center">
                  <div className="user-info__name">
                     Привязана карта: 
                  </div>
                  <div className="user-info__data">
                    {this.props.paymentMethod}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="circle-box d-flex align-items-end">
                <div className="cont-wrap"> 
                  <div id="cont" className="cont" data-pct={this.props.ticketsCount +' поездок'}>
                    <svg id="svg" className="svg" width="170" height="170" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0">
                    </circle>
                    <circle id="bar" className="bar" r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0">
                    </circle>
                    </svg>
                  </div>
                </div>
                <div className="cont-wrap"> 
                  <div id="cont" className="cont" data-pct={Math.round(this.props.amount) +' рублей'}>
                    <svg id="svg" className="svg" width="170" height="170" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0">
                    </circle>
                    <circle id="bar" className="bar" r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0">
                    </circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {editWrapper}
          <div className="btn-wrap"><button className="btn btn__main" onClick={this.props.authorizePayment}>Привязать карту</button></div>
        </div>
      </Fragment>
    );
  }
}

export default Account;
