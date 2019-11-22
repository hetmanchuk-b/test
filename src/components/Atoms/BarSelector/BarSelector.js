import React, {Component} from "react";
import GraphBarWrap from "./BarWrap";
import "./BarSelector.scss";
import { debounce } from "../../../helpers";

export default class BarSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: props.from || null,
      to: props.to || null,
      higlightedItems: [],
      isHovered: false
    };

    let debHandleMouseOut = debounce((index) => {
      if (!this.state.isHovered)
        this.setState({ higlightedItems: [] });
    }, 20);

    this.handleBarMouseOut = (index) => {
      this.setState({ isHovered: false });

      debHandleMouseOut();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.from !== null && this.props.from === null ) {
      this.setState({ from: null, to: null });
    }
  }

  handleSelection = itemIndex => {
    if (!itemIndex || typeof itemIndex !== 'number') 
      return;
    
    let from = this.state.from,
      to = this.state.to;

    if ((!from || !to) || (!!from && !!to && from !== to)) {
      // empty selection or both ends are selected and different - start a new
      // selection
      from = to = itemIndex;
    } else if (from === to) {
      // one element selected
      if (itemIndex !== from) {
        // click for non-selected elemenet
        if (itemIndex < from) {
          // clicked elemenet is on the left of already selected element
          from = itemIndex;
        } else {
          // clicked elemenet is on the right of already selected element
          to = itemIndex;
        }
      } else {
        // 2nd click on single selected item
        from = to = null;
      }
    }

    if (this.props.onSelection) {
      this.props.onSelection(from, to);
    }

    this.setState({from, to});
  };

  handleBarMouseOver(hoveredIndex) {
    let highlightedIndexes;

    if (this.state.from && this.state.to && this.state.from === this.state.to) {
      if (hoveredIndex > this.state.to) {
        highlightedIndexes = Array(hoveredIndex - this.state.to)
          .fill(0)
          .map((item, index) => hoveredIndex - index);
      } else {
        highlightedIndexes = Array(this.state.from - hoveredIndex)
          .fill(0)
          .map((item, index) => hoveredIndex + index);
      }
    } else {
      highlightedIndexes = [hoveredIndex]
    }

    this.setState({higlightedItems: highlightedIndexes, isHovered: true})
  }

  render() {
    return (
      <div className="filter--graph-filter app-TripCalendar-container">
        <div className="app-TripCalendar-content">
          {this.props.data
            .map((barData, index) => (<GraphBarWrap
              text={barData.title}
              index={index}
              key={index}
              sizeRatio={barData.sizeRatio}
              isHighlighted={
                this.state.higlightedItems.indexOf(index) !== -1
              }
              isSelected={this.state.from && this.state.to && (index >= this.state.from && index <= this.state.to)} 
              onMouseOver={() => {
                this.handleBarMouseOver(index)
              }}
              onMouseOut={this.handleBarMouseOut}
              onSelection={this.handleSelection}
              />))}
        </div>
      </div>
    );
  }
}