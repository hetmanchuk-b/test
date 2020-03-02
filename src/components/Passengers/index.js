import React, { Component, Fragment } from 'react';
import Passenger from './../../containers/Passengers/Passenger';

class Passengers extends Component
{
  handleBuy = () => {
    this.props.handleBuy();
  }

  render() {
    const selectedSeats = this.props.selectedSeats;
    return (
      <Fragment>
        {Object.keys(selectedSeats).map(car =>
          Object.keys(selectedSeats[car]).map(seat => (
            <Passenger key={car + seat} car={car} seat={seat} saveOption={true} selectSavedOption={true}
              handleRemove={() => this.props.handleRemove(car, seat)}
            />
          ))
        )}

        <div className="btn-wrap text-center">
          <button className="btn btn__main" onClick={this.handleBuy}>Добавить в корзину</button>
        </div>
      </Fragment>
    );
  }
}

export default Passengers;
