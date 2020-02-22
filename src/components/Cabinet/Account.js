import React, {PureComponent, Fragment} from 'react';
import Tabs from './Tabs';
import Helmet from 'react-helmet';

class Account extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            oldEmail: props.email,
            email: props.email,
            phone: props.phone,
            firstName: props.firstName,
            lastName: props.lastName,
            edit: false,
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            editPassword: false,
            showToast: false,
            editPasswordMessage: '',
        };
        this.dataSend = false;

    }

    componentDidUpdate(prevProps) {
        if (this.props.email !== prevProps.email) {
            this.setState({
                email: this.props.email,
                oldEmail: this.props.email,
                phone: this.props.phone,
                firstName: this.props.firstName,
                lastName: this.props.lastName,
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.message !== '' && this.dataSend) {
            this.setState({
                showToast: true,
                showToastMessage: this.props.message
            });
            setTimeout(() => {
                this.dataSend = false;
                this.setState({
                    showToast: false,
                });
            }, 5000);
        }
    }

    updatePassword = () => {
        if (this.state.oldPassword == ''
            || this.state.newPassword == '') {
            this.setState({editPasswordMessage: 'Поля не могут быть пустыми.'});
            return false;
        }
        if (this.state.newPassword !== this.state.confirmPassword) {
            this.setState({editPasswordMessage: 'Вы не подвтвердили новый пароль.'});
            return false;
        }
        if (this.state.newPassword.length < 8) {
            this.setState({editPasswordMessage: 'Пароль не может быть менее 8 символов.'});
            return false;
        }
        this.dataSend = true;
        this.props.updatePass({...this.state});
        this.setState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            editPassword: false
        });

    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
    }

    toggleEditPassword = () => {
        this.setState({editPassword: !this.state.editPassword});
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleUpdate = () => {
        this.dataSend = true;
        console.log(this.props.oldEmail);
        this.props.update({...this.state});
        this.setState({
            edit: false
        });
    }

    render() {
        const {firstName, lastName, email, oldEmail, phone, oldPassword, newPassword, confirmPassword} = this.state;
        const editWrapper = this.state.edit
            ? (
                <Fragment>
                    <div className="edit-box d-flex j-content-between align-items-center f-wrap">
                        <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Фамилия:
              </span>
                            <input type="text" name="lastName" value={lastName} onChange={this.handleInput}/>
                        </div>
                        <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Имя:
              </span>
                            <input type="text" name="firstName" value={firstName} onChange={this.handleInput}/>
                        </div>
                        <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                email:
              </span>
                            <input type="text" name="email" value={email} onChange={this.handleInput}/>
                        </div>
                        <div className="edit-box__item d-flex align-items-center">
              <span className="title">
                Телефон:
              </span>
                            <input type="text" name="phone" value={phone} onChange={this.handleInput}/>
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
                <div className="btn-wrap">
                    <button className="btn btn__main" onClick={this.toggleEdit}>Редактировать</button>
                </div>
            );
        const editPasswordMessage = this.state.editPasswordMessage != ''
            ? (<Fragment>
                    <div className="text-danger">
                        {this.state.editPasswordMessage}
                    </div>
                </Fragment>
            ) : null;

        const editPassword = this.state.editPassword
            ? (
                <Fragment>
                    <div className="w-100 edit-box d-flex j-content-between editPassword">
                        <div className="d-flex flex-column">
                            <div className="d-flex edit-box__item">
                  <span className="title">
                    Действующий пароль:
                  </span>
                                <input type="password" autoComplete="new-password" name="oldPassword"
                                       value={oldPassword} onChange={this.handleInput}/>
                            </div>
                        </div>
                        <div className='d-flex flex-column'>

                            <div className=" d-flex edit-box__item">
                  <span className="title">
                    Новый пароль:
                  </span>
                                <input type="password" autoComplete="new-password" name="newPassword"
                                       value={newPassword} onChange={this.handleInput}/>
                            </div>
                            <div
                                className={newPassword === confirmPassword ? 'd-flex edit-box__item' : 'd-flex edit-box__item error'}>
                  <span className="title">
                    Повторите новый пароль:
                  </span>
                                <input type="password" autoComplete="new-password" name="confirmPassword"
                                       value={confirmPassword}
                                       onChange={this.handleInput}/>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex j-content-between editPassword">
                        {editPasswordMessage}
                    </div>
                    <div className="btn-wrap">
                        <button className="btn btn__white active" onClick={this.updatePassword}>Сохранить</button>
                        <button className="btn btn__white" onClick={this.toggleEditPassword}>Отменить</button>
                    </div>
                </Fragment>
            ) : (
                <div className="btn-wrap">
                    <button className="btn btn__main" onClick={this.toggleEditPassword}>Изменить пароль</button>
                </div>
            );
        return (
            <Fragment>
                <Helmet>
                    <title>Личный кабинет</title>
                </Helmet>
                <Tabs tab="account"/>
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
                                    <div id="cont" className="cont" data-pct={this.props.ticketsCount + ' поездок'}>
                                        <svg id="svg" className="svg" width="170" height="170" viewport="0 0 100 100"
                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48"
                                                    strokeDashoffset="0">
                                            </circle>
                                            <circle id="bar" className="bar" r="80" cx="85" cy="85" fill="transparent"
                                                    strokeDasharray="565.48" strokeDashoffset="0">
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                                <div className="cont-wrap">
                                    <div id="cont" className="cont"
                                         data-pct={Math.round(this.props.amount) + ' рублей'}>
                                        <svg id="svg" className="svg" width="170" height="170" viewport="0 0 100 100"
                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="80" cx="85" cy="85" fill="transparent" strokeDasharray="565.48"
                                                    strokeDashoffset="0">
                                            </circle>
                                            <circle id="bar" className="bar" r="80" cx="85" cy="85" fill="transparent"
                                                    strokeDasharray="565.48" strokeDashoffset="0">
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <div className="mr-3">
                            {editWrapper}
                        </div>
                        <div className="mr-3 btn-wrap">
                            <button className="btn btn__main" onClick={this.props.authorizePayment}>Привязать карту
                            </button>
                        </div>
                        {editPassword}
                    </div>
                </div>
                {console.log(this.props)}
                <div className={this.state.showToast ? this.props.error ? 'bg-danger toaster active' : 'toaster active' : 'toaster'}>{this.props.error ? this.props.error : this.props.message}</div>
            </Fragment>
        );
    }
}

export default Account;
