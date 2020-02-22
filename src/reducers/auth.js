import * as types from './../constants/ActionTypesAuth';

const initialState = {
  jwt: localStorage.getItem('jwt'),
  modal: null,
  error: null
};

export default (state = initialState, action) => {

  switch ( action.type ) {

    case types.AUTH_MODAL_OPEN:
      return { modal: action.payload.modal, jwt: null, error: null };

    case types.AUTH_MODAL_CLOSE:
      return { modal: null, jwt: null, error: null };

    case types.AUTH_SUCCESS:
      return { jwt: action.payload.jwt, modal: null, error: null };

    case types.AUTH_ERROR:
      console.log(action.payload);
      return { modal: state.modal, error: action.payload.error, jwt: null };

    case types.SIGN_OUT:
      return { jwt: null, modal: null, error: null };

    default:
      return state;
  }
};
