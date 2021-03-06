import React, { Fragment } from 'react';
import Tabs from './Tabs';
import Helmet from 'react-helmet';

export default props => (
  <Fragment>
    <Helmet>
      <title>Личный кабинет</title>
    </Helmet>
    <Tabs tab="archive" />
    <div className="cabinet-page__content">
      {/*<div className="search">
        <div className="search__content d-flex align-items-center">
          <div className="text">Поиск</div>
          <div className="text">с</div>
          <div className="input-wrap"> 
            <input className="date" type="date" id="start" name="trip-start"
                 value="Туда"
                 min="2019-01-01" max="2019-12-31" />
            <i className="far fa-calendar-alt"></i>
          </div> 
          <div className="text">по</div>
          <div className="input-wrap"> 
            <input className="date" type="date" id="end" name="trip-end"
                 value="Обратно"
                 min="2019-01-01" max="2019-12-31" />
            <i className="far fa-calendar-alt"></i>
          </div> 
          <button className="btn btn__main" type="button">Поиск</button>
        </div>
        <ul className="search__list">
          <li className="search__list-item">
            <a href="#">За неделю</a>
          </li>
          <li className="search__list-item">
            <a href="#">За месяц</a>
          </li>
          <li className="search__list-item active">
            <a href="#">За год</a>
          </li>
        </ul>
      </div>*/}

      <div className="flight">
        {props.list.map(el => (
          <div className="flight__item" key={el.id}>
            <div className="text">Рейс:</div>
            <div className="flight__info d-flex  align-items-end">
              <div className="title-train">Поезд {el.trainNumber} &laquo;Сапсан&raquo;</div>
              <div className="title-tawn">
                {el.destinationFrom} 
                <span className="icon-item">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                {el.destinationTo}
              </div>
              <div className="data">
                <span className="text">Отправление:</span>
                <span className="date">{el.date}</span>
              </div>
            </div>
            <div className="user user-box">
              <div className="ticket-info">
                Билет:
                <span className="number">№ {el.externalOrderId}</span>
              </div>
              <div className="user__name">{el.fullName} ({el.amount} руб.)</div>
            </div>
          </div>
        ))}
      </div>

      {/*<div className="btn-wrap d-flex  align-items-center">
        <button className="btn btn__white">Скачать бланк возврата</button>
        <button className="btn btn__white">Скачать бланк билета</button>
        <button className="btn btn__white">Распечатать</button>
      </div>*/}
    </div>
  </Fragment>
);
