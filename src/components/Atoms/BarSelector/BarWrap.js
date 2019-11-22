import React, { Component } from "react";
import GraphBar from "./Bar";

export default class GraphNode extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-TripCalendar-node">
        <div className="app-TripCalendar-columnWrapper">
          {this.props.isHighlighted}
          <GraphBar
            price={this.props.text}
            sizeRatio={this.props.sizeRatio}
            isSelected={this.props.isSelected}
            isHighlighted={this.props.isHighlighted}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
            onSelection={() => {
              this.props.onSelection(this.props.index);
            }}
          />
          <div className="app-TripCalendar-nodeLine" />
          <div className="app-TripCalendar-subBlock">
            <div className="app-TripCalendar-subBlock-text">
              {(this.props.index % 3 === 0) ? (
                this.props.text
              ) : (
                <div style={{ height: "16px" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
