import React, { PureComponent, Fragment } from 'react';
import Navigation from './../../containers/Navigation/Cabinet';
import Timer from './../Timer';

class Bag extends PureComponent {

  render() {
    const bag = this.props.bag;

    return (
      <Fragment>
        <Navigation title="Корзина" />

        {/*<div className="cart-header">*/}
        {/*  <div className="container">*/}
        {/*    <h3>Список оформленных билетов</h3>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <main className="main bag-view-wrapper">
          {bag.reservations.map(reservation => (
            <div className="inner-page cart-page" key={reservation.id}>
              <div className="form">
                <div className="form__content d-flex">
                  <div className="rais">
                    <div className="title-top">Рейс</div>
                    <div className="title-train">Поезд {reservation.trainNumber} &laquo;Сапсан&raquo;</div>
                    <div className="title-tawn">
                      {reservation.destinationFrom}
                      <span className="icon-item">&nbsp;<i className="fa fa-arrow-right" aria-hidden="true">&nbsp;</i></span>
                      {reservation.destinationTo}
                    </div>
                    <div className="data">
                      <span className="text">Отправление: </span>
                      <span className="data__time">{reservation.time}, </span>
                      <span className="date">{reservation.date}</span>
                    </div>
                  </div>
                  <div className="count-ticket d-flex d-column text-center">
                    <div className="title-top">
                      Количество билетов
                    </div>
                    <div className="count-ticket__item">1</div>
                  </div>
                  <div className="price">
                    <div className="title-top">
                      Стоимость
                    </div>
                    <div className="price__item">
                      {reservation.amount} руб.
                    </div>
                  </div>

                  <a className="checked-link" onClick={() => this.props.reservationRemove(reservation.id)}>
                    <span className="plus">+</span>
                  </a>
                </div>
                <a className="more-info__btn" href="#">Подробнее</a>
                <div className="more-info active">
                  <div className="passengers-box">
                    <div className="title">Пассажир</div>
                    <div className="passengers-box__content d-flex j-content-between align-items-center">
                      <div className="name">{reservation.fullName}</div>
                      <div className="passengers-box__info">
                        Вагон {reservation.car}, место {reservation.seat}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap d-flex j-content-between align-items-center">
                  <div className="col-left"></div>
                  <div className="col-right">
                    <span className="text">Оплатить за:</span>
                    <button className="btn btn__white btn__icon">
                      <span className="icon">
                        <img src="img/icons/time-icon.svg" alt="img item" />
                      </span>
                      <Timer seconds={reservation.secondsLeft} />
                    </button>
                    <button className="btn btn__main" onClick={() => this.props.reservationPayment(bag.orderId, reservation.id)}>Оплатить</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="summ-price d-flex j-content-between align-items-center">
            <div className="text">Итого:</div>
            <div className="price">
              {bag.amount} руб.
            </div>
          </div>
          <div className="summ-btn__wrap d-flex j-content-end">
            <button className="btn btn__white" >Очистить корзину</button>
            <button className="btn btn__main" onClick={() => this.props.orderPayment(bag.orderId)}>Оплатить</button>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Bag;
