import * as types from './../constants/ActionTypesTrains';

const initialState = {};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.TRAIN_FETCH_SUCCESS:
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
}
