import React, { Component } from 'react';
import * as Types from './Types';

class Car extends Component {
  handleSelectSeat = seat => {
    this.props.seatSelect(seat);
  };

  render() {
    const carType = this.props.carType.replace('С', 'C'); // Replace russian to english
    const Type = Types['T'+ carType]; // Component name must start from letter

    if ( Type === undefined ) return null; // Schema not included

    return (
      <Type
        availableSeats={this.props.availableSeats}
        selectedSeats={this.props.selectedSeats}
        handleClick={this.handleSelectSeat}
      />
    );
  }
}

export default Car;
