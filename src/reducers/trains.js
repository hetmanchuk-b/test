import * as types from './../constants/ActionTypesTrains';

const initialState = [];

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.TRAINS_FETCH_SUCCESS:
      return action.payload;

    case types.TRAINS_CLEAR:
      return [];

    default:
      return state;
  }
}
