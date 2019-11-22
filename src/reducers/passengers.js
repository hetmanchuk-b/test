import * as types from './../constants/ActionTypesPassengers';

const initialState = [];

export default (state = initialState, action) => {
  switch ( action.type ) {

    case types.PASSENGERS_FETCH:
      return action.payload;

    default:
      return state;
  }
};
