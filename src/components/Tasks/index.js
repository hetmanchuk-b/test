import React, { PureComponent, Fragment } from 'react';
import Navigation from './../../containers/Navigation/Cabinet';
import { options as serviceClassOptions } from './../../_data/serviceClassOptions';
import { options as trainsOptions } from './../../_data/trainsOptions';
import { options as timeOptions } from './../../_data/timeOptions';
import Passenger from './../Passengers/Form';
import { getDate } from './../../utility/time';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import {Helmet} from 'react-helmet';

class Tasks extends PureComponent
{
  constructor(props) {
    super(props);
    console.log('PROPS', props);
    this.state = {
      trainNumber: null,
      destinationFrom: null,
      destinationTo: null,
      serviceClass: null,
      timeFrom: null,
      timeTo: null,
      date: null,
      error: null,
      isSaved: false,
      textReadMore: false,
      passengers: [{
        email: props.user.email,
        phone: props.user.phone,
        firstName: props.user.firstName,
        lastName: props.user.lastName
      }]
    };
  }

  componentDidUpdate(prevProps) {
    if ( this.state.passengers[0].email === undefined && this.props.user.email !== null ) {
      this.setState({ passengers: [{
        email: this.props.user.email,
        phone: this.props.user.phone,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName
      }]});
    }
  }

  passengerAdd = () => {
    let passengers = [ ...this.state.passengers ];

    passengers.push({});
    this.setState({ passengers });
  }

  passengerUpdate = index => (key, value) => {
    let passengers = [ ...this.state.passengers ];

    passengers[index][key] = value;
    this.setState({ passengers });
  }

  passengerRemove = index => () => {
    let passengers = this.state.passengers.filter((el, i) => i !== index);
    this.setState({ passengers });
  }

  handleSet = (key, value) => {
    this.setState({ [key]: value });
  }

  validatePassenger = passenger => {
    const { email, phone, lastName, firstName, middleName, documentType, nationality, gender, documentNumber, birthdate } = passenger;

    if ( email === undefined || email.length === 0 ) return false;

    if ( phone === undefined || phone === null || phone.length === 0 ) return false;

    if ( lastName === undefined || lastName.length === 0 ) return false;

    if ( firstName === undefined || firstName.length === 0 ) return false;

    if ( documentType === undefined || documentType.length === 0 ) return false;

    if ( nationality === undefined || nationality.length === 0 ) return false;

    if ( gender === undefined || gender.length === 0 ) return false;

    if ( documentNumber === undefined || documentNumber.length === 0 ) return false;

    if ( birthdate === undefined || birthdate.length === 0 ) return false;

    return true;
  }

  validation = () => {
    const { passengers, destinationFrom, destinationTo, serviceClass, date } = this.state;

    if ( destinationFrom === null ) {
      this.setState({ error: 'Выберите станцию отправления.' });
      return false;
    }

    if ( destinationTo === null ) {
      this.setState({ error: 'Выберите станцию назначения.' });
      return false;
    }

    if ( serviceClass === null ) {
      this.setState({ error: 'Выберите класс обслуживания.' });
      return false;
    }

    if ( date === null ) {
      this.setState({ error: 'Выберите дату отправления.' });
      return false;
    }

    if ( passengers.length === 0 ) {
      this.setState({ error: 'Добавьте пассажиров.' });
      return false;
    }

    for ( let i in passengers )
      if ( ! this.validatePassenger(passengers[i]) ) {
        this.setState({ error: 'Все поля обязательны для заполнения.' });
        return false;
      }

    return true;
  }

  handleSubmit = () => {
    if ( ! this.validation() ) return false;

    this.props.create({
      passengers: this.state.passengers,
      trainNumber: this.state.trainNumber,
      destinationFrom: this.state.destinationFrom,
      destinationTo: this.state.destinationTo,
      serviceClass: this.state.serviceClass,
      date: getDate(this.state.date, {}),
      timeFrom: this.state.timeFrom,
      timeTo: this.state.timeTo
    }).then(data => this.setState({ passengers: [{}] }))
      .then(this.props.history.push('/request-success'));
  }

  renderTimeToSelect(timeFrom) {
    for (let i = 0; i < timeOptions.length; i++) {
      if (timeFrom === timeOptions[i].value) {
        return (
          <Select 
            options={timeOptions.concat().splice(i + 1, 24)} 
            placeholder="Время отправления до"
            onChange={option => this.handleSet('timeTo', option.value)}
          />
        )
      } 
    }
  }

  handleReadMore = () => {    
    this.setState({
      textReadMore: !this.state.textReadMore
    });
  }
  

  render() {
    const { passengers, destinationFrom, destinationTo, date, error } = this.state;
    const errorBlock = error !== null ? (<p className="error-block">{error}</p>) : null;
    const { user, cities, modalOpen, jwt } = this.props;
    const dateNow = new Date();
    const dateNextYear = new Date(dateNow.getFullYear() + 1, dateNow.getMonth(), dateNow.getDate());

    return (
      <Fragment>
        <Helmet>
          <title>Лист ожидания</title>
          <meta name="description" content="desc" />
        </Helmet>
        <Navigation title="Лист ожидания" />

        <main className="main">
          <div className="page-text-description">
            <p>Сервис "Лист ожидания" предназначен для покупки билетов тогда, когда их уже нет в продаже.</p>
            <p>У вас есть возможность выбрать необходимую дату и временной диапазон отправления, желаемые классы обслуживания, пассажиров, для которых необходимо приобрести билеты и оставить заявку на оформление билетов.</p>
            { this.state.textReadMore ? (
              <React.Fragment>
                <p>Как только наш ресурс "увидит" свободные места, соответствующие выбранным вами параметрам, произойдет автоматическое оформление. Билеты будут направлены вам на почту.</p>
                <p>Перед использованием сервиса вам необходимо будет привязать банковскую карту в личном кабинете или выбрать одну из ранее привязанных карт.</p>
                <p>Просим вас перед формированием заявки убедиться в достаточности средств на счёте.</p>
                <p>Направляя нам заявку, вы подтверждаете согласие с автоматическим списанием денежных средств с выбранной банковской карты в случае успешного оформления билетов.</p>
                <p>Полные условия оказания услуги "Лист ожидания" в Оферте пользователю ресурса.</p>
              </React.Fragment>
            ) : null }
            <button className="page-text__read-more" onClick={this.handleReadMore}>{ this.state.textReadMore ? 'Скрыть' : 'Показать полностью' }</button>
            {/* <p>Как только наш ресурс "увидит" свободные места, соответствующие выбранным вами параметрам, произойдет автоматическое оформление. Билеты будут направлены вам на почту.</p>
            <p>Перед использованием сервиса вам необходимо будет привязать банковскую карту в личном кабинете или выбрать одну из ранее привязанных карт.</p>
            <p>Просим вас перед формированием заявки убедиться в достаточности средств на счёте.</p>
            <p>Направляя нам заявку, вы подтверждаете согласие с автоматическим списанием денежных средств с выбранной банковской карты в случае успешного оформления билетов.</p>
            <p>Полные условия оказания услуги "Лист ожидания" в Оферте пользователю ресурса.</p> */}
          </div>

          <div className="inner-page apply-page tasks-page">
            <div className="form">
              {jwt !== null ? null : (
                <div className="head d-flex j-content-end">
                  <a href="#" className="link" onClick={() => modalOpen('signIn')}>
                    Авторизоваться
                  </a>
                </div>
              )}

              <div className="desc-info d-flex align-items-center f-wrap">
                <div className="desc-info__item">
                  <div className="title-info">Станция отправления <span className="required-item">*</span></div>
                  <div className="input-icon"> 
                    <Select
                      className="header__select"
                      classNamePrefix="header__select"
                      options={cities} placeholder="Откуда"
                      onChange={option => this.handleSet('destinationFrom', option.value)}
                      value={cities.find(el => el.value === destinationFrom)}
                    />
                    <span className="icon-item">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="desc-info__item">
                  <div className="title-info">Станция назначения <span className="required-item">*</span></div>
                  <Select options={cities} placeholder="Куда"
                    className="header__select"
                    classNamePrefix="header__select"
                    onChange={option => this.handleSet('destinationTo', option.value)}
                    value={cities.find(el => el.value === destinationTo)}
                  />
                </div>
                <div className="desc-info__item">
                  <div className="title-info">Дата отправления <span className="required-item">*</span></div>
                  <div className="input-icon date_wrapper">
                    <DatePicker className={date ? "form__datepicker opened" : "form__datepicker"} onChange={date => this.handleSet('date', date)} value={date} minDate={dateNow} maxDate={dateNextYear} />
                  </div>
                </div> 
                <div className="desc-info__item">
                  <span className="desc-info__item-required desc-info__item-required--select">*</span>
                  <Select options={serviceClassOptions} placeholder="Класс обслуживания"
                    onChange={option => this.handleSet('serviceClass', option.value)}
                  />
                </div>
                <div className="desc-info__item">
                  <Select options={timeOptions} placeholder="Время отправления от"
                    onChange={option => this.handleSet('timeFrom', option.value)}
                  />
                </div>
                <div className="desc-info__item">

                  { 
                    this.state.timeFrom ? this.renderTimeToSelect(this.state.timeFrom)
                      : (
                        <Select 
                          options={timeOptions} 
                          placeholder="Время отправления до"
                          onChange={option => this.handleSet('timeTo', option.value)}
                        />
                      )
                  }

                  

                  
                </div>
                {/* <div className="desc-info__item">
                  <Select options={timeOptions} placeholder="Время отправления до"
                    onChange={option => this.handleSet('timeTo', option.value)}
                  /> 
                </div> */}
                <div className="desc-info__item">
                  <Select options={trainsOptions} placeholder="Номер поезда"
                    onChange={option => this.handleSet('trainNumber', option.value)}
                  />
                </div>
                {/*<div className="desc-info__item">
                  <div className="title-info">Категория места</div>
                  <input placeholder="" type="text" className="select-dropdown" />
                </div>*/}
              </div>

              <div className="box-info">
                {passengers.map((el, i) => (
                  <Passenger
                    passenger={el}
                    saveOption={true}
                    selectSavedOption={true}
                    fieldUpdate={this.passengerUpdate(i)}
                    handleRemove={this.passengerRemove(i)}
                    title={`Пассажир № ${i + 1}:`}
                    key={i}
                  />
                ))}
              </div>

              {/*<div className="box-info">
                <div className="title">Дорожная карта:</div>

                <div className="desc-info d-flex align-items-center f-wrap">
                  <div className="desc-info__item">
                    <input className="input input__last-name" type="text" name="last-name" placeholder="Абонемент:" />
                  </div>
                  <div className="desc-info__item">
                    <input className="input input__first-name" type="text" name="name" placeholder="Скидочная карта" />
                  </div>
                  <div className="desc-info__item">
                    <input className="input input__first-name" type="text" name="name" placeholder="Карта РЖД бонус" />
                  </div>   
                </div>
              </div>*/}

              {/*<div className="box-info rate-type">
                <div className="title">Виды тарифов:</div>

                <div className="desc-info d-flex j-content-between align-items-center">
                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Полный
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Детский
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Детский без места
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Single
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Junior
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Senior
                    </div>
                  </label>

                  <label className="checkbox">
                    <input type="checkbox" />
                    <div className="checkbox__text">
                      Туда-обратно
                    </div>
                  </label>     
                </div>
              </div>*/}

              <div className="add-passengers">
                <span className="add-passengers__link pointer" onClick={this.passengerAdd}>
                  <span className="plus">+</span>
                  <span className="title">Добавить пассажира</span>
                </span>
              </div>

              {user.paymentMethod !== null ? null : (
                <Fragment>
                  <div className="message">
                    <p>К Вашему аккаунту не привязана платежная карта, поэтому мы не сможем осуществить автоматический выкуп билета, 
                    когда он появится в продаже.</p>
                    <span className="elem">i</span>
                  </div>
              
                  <div className="save-data">
                    <label className="checkbox">
                      <span className="icon-item">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <input type="checkbox" />
                      <div className="checkbox__text" onClick={this.props.authorizePayment}>
                        Привязать карту
                      </div>
                    </label> 
                  </div>
                </Fragment>
              )}

              {errorBlock}

              <div className="btn-wrap text-center">
                <button className="btn btn__main" onClick={this.handleSubmit}>Подать заявку</button>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Tasks;
