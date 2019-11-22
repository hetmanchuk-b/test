import React, {Component} from 'react';
import BarSelector from '../../Atoms/BarSelector/BarSelector';
import TimeService from './Time.service';

export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      convertedData: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      convertedData: TimeService.prepareData(props.data, props.type)
    }
  }

  onSelection(from, to) {
    if (!this.props.onSelection) 
      return;
    
    this
      .props
      .onSelection({
        from: from,
        to: to
      });
  }

  render() {
    return (
      <BarSelector
        to={this.props.to}
        from={this.props.from}
        data={this.state.convertedData}
        onSelection={this
        .onSelection
        .bind(this)}
      />
    );
  }
}