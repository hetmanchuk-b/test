import React, {Component} from 'react';
import * as Types from './Types';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            seat: 0,
            hover: false,
        }
    }

    handleSelectSeat = seat => {
        var price =  this.props.availableSeats[seat][0];
        var fee =  this.props.availableSeats[seat][1];
        this.props.seatSelect(seat, price, fee);
    };

    handleHoverSeat = (seat) => {
        var amount;
        if (this.props.availableSeats.hasOwnProperty(seat)) {
            amount = 'Цена: ' + this.props.availableSeats[seat][0] + ' руб.';
        }else {
            amount = 'Занятое место';
        }
        this.setState({
            amount: amount,
            seat: seat,
            hover: true,
            x: 0,
            y: 0
        });
    };
    _onMouseMove(e) {
        this.setState({ x: e.clientX, y: e.clientY});
    }
    handleHoverEnd = () => {
        this.setState({
            hover: false
        });
    };

    render() {
        const carType = this.props.carType.replace('С', 'C'); // Replace russian to english
        const Type = Types['T' + carType]; // Component name must start from letter
        const {hover, seat, amount, x, y } = this.state;

        if (Type === undefined) return null; // Schema not included

        return (
            <div onMouseMove={this._onMouseMove.bind(this)}>
                <Type
                    availableSeats={this.props.availableSeats}
                    selectedSeats={this.props.selectedSeats}
                    handleClick={this.handleSelectSeat}
                    handleHover={this.handleHoverSeat}
                    handleEndHover={this.handleHoverEnd}
                />
                {hover &&
                <div className="toltip" style={{ left: x , top: y }}>
                    <div className="rel-div">
                        <div className="carrot"></div>
                        <div>Место : <b>{seat}</b></div>
                        <div>{amount}</div>
                    </div>
                </div>
                }
            </div>

        );
    }
}

export default Car;
