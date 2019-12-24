import React, { Fragment } from 'react';
import Tabs from './Tabs';
import { getByValue } from './../../_data/serviceClassOptions';
import Helmet from 'react-helmet';

export default props => (
  <Fragment>
    <Helmet>
      <title>Личный кабинет</title>
    </Helmet>
    <Tabs tab="tasks" />
    <div className="cabinet-page__content">
      <div className="flight flight__last-step">
        {props.list.map(el => (
          <div className="flight__item flight__item--top" key={el.id}>
            <div className="text">Рейс:</div>
            <div className="title-train">Поезд &laquo;Сапсан&raquo;</div>
            <div className="flight__info d-flex j-content-between align-items-end">
              <div className="flight__info-wrap d-flex align-items-end">    
                <div className="title-tawn">
                  {el.destinationFrom} 
                  <span className="icon-item">
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </span>
                  {el.destinationTo}
                </div>
                <div className="data">
                  <span className="text">Отправление:</span>
                  {/*<span className="data__time">14:25</span>,*/}
                  <span className="date">{el.date}</span>
                </div>
              </div>
              <div className="icon-box d-flex align-items-center">
                {/*<div className="icon-item icon-item__edit"></div>*/}
                <div className="icon-item icon-item__delete" onClick={() => props.remove(el.id)}></div>
              </div>
            </div>
            <div className="user">
              <div className="user__name">{el.fullName}
                <span className="type">{getByValue(el.serviceClass).label}</span>
                <span className="type">Полный</span>
                {/*<span className="type">Одиночное по ходу</span>*/}
              </div>
            </div>
            <div className="message-result d-flex align-items-center">
              <div className="message-result__item active">
                Мы ищем для вас место
                <span className="icon-item">
                  <i className="fa fa-hourglass-end" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Fragment>
);
