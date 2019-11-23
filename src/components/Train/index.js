import React, { Component } from 'react';
import * as time from './../../utility/time';
import { withRouter } from 'react-router-dom';
import Passengers from './../Passengers';
import Car from './../Cars';
import {Helmet} from 'react-helmet';

class Train extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeatsCount: 0,
      availableSeats: [],
      carNumber: null,
      carType: null,
      error: null
    }
    this.schemaRef = React.createRef();
    this.seatsRef = React.createRef();
  }

  carSelect = (carNumber, carType, availableSeats) => () => {
    this.setState({ carNumber, carType, availableSeats });
    window.scrollTo(0, this.schemaRef.current.offsetTop);
  }

  seatSelect = seat => {
    const { carNumber, availableSeats, selectedSeatsCount } = this.state;

    if ( availableSeats.includes(seat) ) {
      if ( this.props.selectedSeats[carNumber] === undefined || this.props.selectedSeats[carNumber][seat] === undefined ) {
        this.setState({ selectedSeatsCount: selectedSeatsCount + 1 });

        this.props.selectSeat(carNumber, seat);
        window.scrollTo(0, this.seatsRef.current.offsetTop);
      } else {
        this.setState({ selectedSeatsCount: selectedSeatsCount - 1 });

        this.props.removeSeat(carNumber, seat);
      }
    }
  }

  seatRemove = (car, seat) => {
    this.setState({ selectedSeatsCount: this.state.selectedSeatsCount - 1 });
    this.props.removeSeat(car, seat);
  }

  handleBuy = () => {
    const { destinationFrom, destinationTo, isSearchBack, dateFrom, dateTo, getList, paramSet, clear, history, selectedSeats, trainNumber } = this.props;
    const params = {
      trainNumber: trainNumber,
      selectedSeats: selectedSeats,
      destinationFrom: isSearchBack ? destinationTo : destinationFrom,
      destinationTo: isSearchBack ? destinationFrom : destinationTo,
      date: isSearchBack ? dateTo : dateFrom
    };

    this.props.create(params)
      .then(() => {
        if ( dateTo !== null && isSearchBack === false ) {
          window.scrollTo(0, 0);
          getList({
            destinationFrom: destinationTo,
            destinationTo: destinationFrom,
            date: dateTo
          });
          paramSet('isSearchBack', true);
          history.push('/search');
        } else {
          clear();
          history.push('/bag');
        }
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { carNumber, carType, availableSeats, selectedSeatsCount, error } = this.state;
    const { train, selectedSeats } = this.props;

    const carScheme = ( carType !== null )
      ? (<Car
          carType={carType} availableSeats={availableSeats} seatSelect={this.seatSelect}
          selectedSeats={selectedSeats[carNumber] !== undefined ? Object.keys(selectedSeats[carNumber]) : []}
        />)
      : null;

    const passengers = (( selectedSeatsCount !== 0 )
      ? (<Passengers selectedSeats={selectedSeats} handleBuy={this.handleBuy} handleRemove={this.seatRemove} />)
      : null);

    const errorBlock = error !== null ? (<p className="error-block">{error}</p>) : null;

    return (
      <main className="main train-view-wrapper">
        <Helmet>
          <title>Поезд: {train.destinationFromName} > {train.destinationToName}</title>
        </Helmet>
        <div className="inner-page buy-ticket-page">
          <div className="form">
            {/*<div className="date-top">
              {train.departureDate}
            </div>*/}
            <div className="head d-flex j-content-between align-items">
              <div className="title">
                {train.destinationFromName} 
                <span className="icon-item">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                {train.destinationToName}
              </div>
            </div>

            <ul className="list-desc">
               <li className="list-desc__item">
                 <span className="text">Отправление:</span>
                 <span className="text text__red">
                   <span className="time">{time.getTime(train.localDepartureDateTime)}</span>
                   <span className="date">{time.getDate(train.localDepartureDateTime)}</span>
                 </span>
               </li>
               <li className="list-desc__item">
                 <span className="text">Прибытие:</span>
              <span className="text text__red">
                   <span className="time">{time.getTime(train.localArrivalDateTime)}</span>
                   <span className="date">{time.getDate(train.localArrivalDateTime)}</span>
                 </span>
               </li>
               <li className="list-desc__item">
                 <span className="text">В пути:</span>
                 <span className="text text__red">{time.getTripDuration(train.tripDuration)}</span>
               </li> 
            </ul>

            <div className="train-car-classes">
              {Object.keys(train.serviceClasses).map(key => {
                const serviceClass = train.serviceClasses[key];
                const freePlacesKeys = Object.keys(serviceClass.freePlaces);

                if ( freePlacesKeys.length === 0 ) return null;

                return (
                  <div className="train-car-class" key={key}>
                    <div className="train-car-class-title">
                      {serviceClass.name}
                    </div>
                    <div className="train-car-class-list">
                      <div className="train-car-list-head"></div>
                      {freePlacesKeys.map(carNum => {
                        const car = serviceClass.freePlaces[carNum];

                        return (
                          <div className="car-icon-wrapper" key={carNum}>
                            <label className={(carNumber === carNum ? 'active' : '' ) +' car-icon-item'} onClick={this.carSelect(carNum, car.type, car.places)}>
                              <span className="car-icon-item-num">{carNum}</span>
                              <span className="car-icon-item-text">мест</span>
                              <span className="car-icon-item-seats">{car.places.length}</span>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div ref={this.schemaRef} className="sheme-train">
              {carScheme}
            </div>
            <div ref={this.seatsRef}>{passengers}</div>
            {errorBlock}
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Train);
