import React from 'react';
import { connect } from 'react-redux';
import { reservationRemove, reservationPayment, orderPayment } from './../../actions/Bag';
import { Redirect } from 'react-router-dom';
import Bag from './../../components/Bag';

const mapStateToProps = state => {
  return {
    bag: state.bag
  }
};

const mapDispatchToProps = {
  reservationRemove,
  reservationPayment,
  orderPayment
};

export default connect(mapStateToProps, mapDispatchToProps)(props => props.bag.orderId === null ? <Redirect to="/" /> : <Bag {...props} />);
