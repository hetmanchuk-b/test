import * as types from './../constants/ActionTypesUser';

const initialState = {
  data: {},
  reservations: []
};

export default (state = initialState, action) => {
  let newState = { ...state };

  switch ( action.type ) {

    case types.USER_FETCH:
      newState.data = action.payload;
      return newState;

    case types.USER_RESERVATIONS_FETCH:
      newState.reservations = action.payload;
      return newState;

    default:
      return state;
  }
};
