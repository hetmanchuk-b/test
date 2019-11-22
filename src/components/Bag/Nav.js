import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(props => props.ticketsCount === 0 ? null : (
  <div className="icon-item icon-cart pointer" onClick={() => props.history.push('/bag')}>
    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
    <div className="cart-count">{props.ticketsCount}</div>
  </div>
));
