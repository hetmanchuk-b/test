import * as types from './../constants/ActionTypesApp';

const initialState = {
  loader: false
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.APP_LOADER_ACTIVE:
      return { loader: action.payload.active };

    default:
      return state;
  }
};
