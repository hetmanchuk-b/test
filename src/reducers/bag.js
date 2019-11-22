import * as types from './../constants/ActionTypesBag';

const initialState = {
  orderId: localStorage.getItem('orderId'),
  reservations: [],
  ticketsCount: 0,
  amount: 0
};

export default(state = initialState, action) => {

  switch (action.type) {

    case types.BAG_FETCH:
      return action.payload;

    case types.BAG_CLEAR:
      return { ...initialState };

    case types.BAG_ORDER_ID_SET:
      return { ...state, orderId: action.payload.id };

    default:
      return state;
  }
};
