import React, { PureComponent, Fragment } from 'react';
import Navigation from './../../containers/Navigation/Cabinet';
import serviceClassOptions from './_serviceClassOptions';
import departureTimeOptions from './_departureTimeOptions';
import Passenger from './../Passengers/Form';
import { getDate } from './../../utility/time';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import {Helmet} from 'react-helmet';

class Alarm extends PureComponent
{
  constructor(props) {
    super(props);
    this.state = {
      passengers: [{}],
      destinationFrom: null,
      destinationTo: null,
      departureTimeFrom: null,
      departureTimeTo: null,
      serviceClass: null,
      isSaved: false,
      date: null,
      error: null
    };
  }

  passengerAdd = () => {
    let passengers = [ ...this.state.passengers ];

    passengers.push({});
    this.setState({ passengers });
  }
  
  passengerRemove = () => {
    let passengers = [ ...this.state.passengers ];


  }

  passengerUpdate = i => (key, value) => {
    let passengers = [ ...this.state.passengers ];

    passengers[i][key] = value;
    this.setState({ passengers });
  }

  handleSet = (key, value) => {
    this.setState({ [key]: value });
  }

  validatePassenger = passenger => {
    const { email, phone, lastName, firstName, middleName, documentType, nationality, gender, documentNumber, birthdate } = passenger;

    if ( email === undefined || email.length === 0 ) return false;

    if ( phone === undefined || phone.length === 0 ) return false;

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
      this.setState({ error: 'Все поля обязательны для заполнения' });
      return false;
    }

    if ( destinationTo === null ) {
      this.setState({ error: 'Все поля обязательны для заполнения' });
      return false;
    }

    if ( serviceClass === null ) {
      this.setState({ error: 'Все поля обязательны для заполнения' });
      return false;
    }

    if ( date === null ) {
      this.setState({ error: 'Все поля обязательны для заполнения' });
      return false;
    }

    if ( passengers.length === 0 ) {
      this.setState({ error: 'Добавьте пассажиров' });
      return false;
    }

    for ( let i in passengers )
      if ( ! this.validatePassenger(passengers[i]) ) {
        this.setState({ error: 'Все поля обязательны для заполнения' });
        return false;
      }

    return true;
  }

  handleSubmit = () => {
    if ( ! this.validation() ) return false;

    this.props.create({
      passengers: this.state.passengers,
      destinationFrom: this.state.destinationFrom,
      destinationTo: this.state.destinationTo,
      departureTimeFrom: this.state.departureTimeFrom,
      departureTimeTo: this.state.departureTimeTo,
      serviceClass: this.state.serviceClass,
      date: getDate(this.state.date, {})
    }).then(data => this.setState({ passengers: [{}] }));
  }

  render() {
    const { passengers, destinationFrom, destinationTo, date, error } = this.state;
    const errorBlock = error !== null ? (<p className="error-block">{error}</p>) : null;
    const { cities, modalOpen, jwt } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>Будильник</title>
          <meta name="description" content="alarm" />
        </Helmet>
        <Navigation title="Будильник" />

        <main className="main">
          <div className="page-text-description">
            <p>Хотите сэкономить, оформив билеты заранее при открытии продажи на поезда "Сапсан"? Тогда сервис "Будильник" - именно то, что нужно.</p>
            <p>Сервис самостоятельно "разбудит" сайт и оформит билеты в момент открытия продажи, пока вы спите.</p>
            <p>Вам достаточно заранее спланировать свою поездку на "Сапсане": выбрать дату (или даты), продажа на которые ещё не открыта, временной интервал отправления, интересующие классы обслуживания и пассажиров, для кого мы будем оформлять билеты.</p>
            <p>Оформление и списание денег происходит автоматически. Билеты направляются на электронную почту, указанную в заявке.</p>
            <p>Перед использованием сервиса вам необходимо будет привязать банковскую карту в личном кабинете или выбрать одну из ранее привязанных карт.</p>
            <p>Просим вас перед формированием заявки убедиться в достаточности средств на счёте.</p>
            <p>Направляя нам заявку, вы подтверждаете согласие с автоматическим списанием денежных средств с выбранной банковской карты в случае успешного оформления билетов.</p>
            <p>Полные условия оказания услуги "Будильник" в Оферте пользователю ресурса.</p>
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
                  <div className="title-info">Станция отправления</div>
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
                  <div className="title-info">Станция назначения</div>
                  <Select options={cities} placeholder="Куда"
                    className="header__select"
                    classNamePrefix="header__select"
                    onChange={option => this.handleSet('destinationTo', option.value)}
                    value={cities.find(el => el.value === destinationTo)}
                  />
                </div>
                <div className="desc-info__item">
                  <div className="title-info">Дата отправления</div>
                  <div className="input-icon date_wrapper">
                    <DatePicker onChange={date => this.handleSet('date', date)} value={date} minDate={new Date()} />
                  </div>
                </div> 
                <div className="desc-info__item">
                  <Select options={serviceClassOptions} placeholder="Класс обслуживания"
                    onChange={option => this.handleSet('serviceClass', option.value)}
                  />
                </div>
                <div className="desc-info__item">
                  <Select options={departureTimeOptions} placeholder="Время отправления от"
                    onChange={option => this.handleSet('departureTimeFrom', option.value)}
                  />
                </div>
                <div className="desc-info__item">
                  <Select options={departureTimeOptions} placeholder="Время отправления до"
                    onChange={option => this.handleSet('departureTimeTo', option.value)}
                  />
                </div>
                {/*<div className="desc-info__item">
                  <div className="title-info">Категория места</div>
                  <input placeholder="" type="text" className="select-dropdown" />
                </div>*/}
              </div>

              <div className="box-info">
                {passengers.map((el, i) => (
                  <Passenger passenger={el} fieldUpdate={this.passengerUpdate(i)} saveOption={true} title={`Пассажир № ${i + 1}:`} key={i} />
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
                {/*<span className="link">Выбрать пассажира из сохраненных</span>*/}
              </div>

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

export default Alarm;
