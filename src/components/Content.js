import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getList as getBag } from './../actions/Bag';
import { getList as getPassengers } from './../actions/Passengers';
import { getData } from './../actions/User';
import Routes from './../routes';

class Content extends PureComponent {
  constructor(props) {
    super(props);
    props.getBag();
    props.getData();
    props.getPassengers();
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default connect(null, { getBag, getPassengers, getData })(Content);
