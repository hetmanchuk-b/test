import React from 'react';
import * as time from './../../utility/time';
export default props => (
   <section className="search-filter pointer" onClick={props.handleClick}>
    <div className="search-filter__item">
      <div className="row">
        <div className="col-md-8 d-flex">
          <div className={props.speedee == props.tripDuration? 'very very__speed' : (props.cheepee == props.minPrice? 'very very__cheap': 'search-filter__item' )}>
            { props.speedee == props.tripDuration ?
            <div className="text">Самый быстрый</div> : (props.cheepee == props.minPrice? <div className="text">Самый дешевый</div>:  null)}
          </div>
          <div className="col-left">
            <div className="flight">
              <div className="flight__number">
                <span className="text">{props.number} </span>
                <span className="icon-star"><i className="fa fa-star" aria-hidden="true"></i></span>
              </div>
              <div className="flight__text">
                &laquo;{props.name}&raquo;
                <span className="desc">эр</span>
                <span className="desc">дц</span>
              </div>
              {/* <ul className="flight-list">
                <li className="flight-list__item">
                  <span className="icon-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Маршрут</span>
                </li>
                <li className="flight-list__item">
                  <span className="icon-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Годовой график</span>
                </li>
                <li className="flight-list__item">
                  <span className="icon-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Рейтинг рейса</span>
                </li>
                <li className="flight-list__item">
                  <span className="icon-item">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Тарифы</span>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-center">
            <div className="location">
              <div className="top-box d-flex j-content-between">
                <div className="time-date">
                  <div className="time">{time.getTime(props.localDepartureDateTime)}</div>
                  <div className="date">{time.getDate(props.localDepartureDateTime)}</div>
                </div>
                <div className="flight-time">
                  {time.getTripDuration(props.tripDuration)} в пути
                </div>
                <div className="time-date">
                  <div className="time">{time.getTime(props.localArrivalDateTime)}</div>
                  <div className="date">{time.getDate(props.localArrivalDateTime)}</div>
                </div>
              </div>
              <div className="bottom-box d-flex align-items-center j-content-between">
                <div className="start-location">
                  <div className="station">
                    {props.destinationFrom}
                    <span className="icon-item">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="station__location">
                    {props.initialStationName}
                  </div>
                </div>
                <div className="finish-location">
                  <div className="station">
                    <span className="icon-item">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    {props.destinationTo}
                  </div>
                  <div className="station__location">
                    {props.finalStationName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-list">
            <div className="info-list__item d-flex j-content-between">
              <div className="col-item">
                <span className="text">Класс обслуживания</span>
              </div>
              <div className="col-item">
                <span className="text">Количество мест</span>
              </div>
              <div className="col-item col-price">
                <span className="text">Стоимость</span> 
              </div>
            </div>
            {Object.keys(props.serviceClasses).map(key => {
              const serviceInfo = props.serviceClasses[key];

              if ( serviceInfo.placeQuantity === 0 ) return null;

              return (
                <div className="info-list__item d-flex j-content-between" key={key}>
                  <div className="col-item">
                    <span className="text">{serviceInfo.name}</span>
                    <span className="sid">{/*serviceInfo.typeName.toLowerCase()*/}</span>
                  </div>
                  <div className="col-item">
                    <span className="text">{serviceInfo.placeQuantity}</span>
                  </div>
                  <div className="col-item col-price">
                    <span className="text">от {serviceInfo.minPrice} ₽</span> 
                  </div>
                </div>
              );
            })}
          </div>
        </div> 
      </div>
    </div>
  </section>
);
