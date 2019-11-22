import React, { Component } from "react";

export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighlighted: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      style: {
        height: `${0 + 50 * props.sizeRatio}px`,
        backgroundColor: props.isSelected ? "#FE6C6C" : !props.isHighlighted ? "#efefef" : '#d4a2a2'
      },
      isHighlighted: props.isHighlighted
    };
  }

  render() {
    return (
      <div
        className={
          "app-TripCalendar-nodeColumn app-TripCalendar-nodeColumn" 
        }
        style={this.state.style}
        onMouseOver={() => {
          this.props.onMouseOver && this.props.onMouseOver();
        }}
        onMouseOut={() => {
          this.props.onMouseOut && this.props.onMouseOut();
        }}
        onClick={() => {
          this.props.onSelection();
        }}
      >
        <div className="app-TripCalendar-nodeColumn-popover">
          <div className="app-TripCalendar-nodeColumn-popover-price">
            {this.props.price} ₽
          </div>
        </div>
      </div>
    );
  }
}
