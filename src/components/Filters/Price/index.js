import React, {Component} from 'react';
import BarSelector from '../../Atoms/BarSelector/BarSelector';
import PriceService from './Price.service';

export default class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    return {
      convertedData: PriceService.prepareData(props.data)
    }
  }

  onSelection(from, to) {
    let fromPrice = this.state.convertedData[from],
      toPrice = this.state.convertedData[to];

    if (!this.props.onSelection) return;

    this
      .props
      .onSelection({
        from: fromPrice && fromPrice.title,
        to: toPrice && toPrice.title
      });
  }

  render() {
    return <BarSelector data={this.state.convertedData} onSelection={this.onSelection.bind(this)} from={this.props.from} to={this.props.to} />
  }
}