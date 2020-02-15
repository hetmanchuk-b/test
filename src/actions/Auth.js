import * as types from './../constants/ActionTypesAuth';
import axiosDispatch from './../axios/dispatch';
import { getList } from './Passengers';
import { getData } from './User';

export function signIn(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/auth/signIn', params)
      .then(data => dispatch(handleSuccess(data.token)))
      .catch(error => dispatch(handleError(error)));
  }
}

export function signUp(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/auth/signUp', params)
      .then(data => {
        dispatch(handleSuccess(data.token));
        dispatch(modalOpen('signUpSuccess'));
      })
      .catch(error => dispatch(handleError(error)));
  }
}

export function passwordRestore(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/auth/passwordRestore', params)
      .then(data => dispatch(modalOpen('passwordRestoreSuccess')))
      .catch(error => dispatch(handleError(error)));
  }
}

export function handleSuccess(jwt) {
  localStorage.setItem('jwt', jwt);

  return dispatch => {
    dispatch({
      type: types.AUTH_SUCCESS,
      payload: { jwt }
    });
    dispatch(getData());
    dispatch(getList());
  }
}

export function handleError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: { error }
  }
}

export function signOut() {
  localStorage.removeItem('jwt');

  return { type: types.SIGN_OUT };
}

export function modalOpen(modal) {
  return {
    type: types.AUTH_MODAL_OPEN,
    payload: { modal }
  };
}

export function modalClose() {
  return { type: types.AUTH_MODAL_CLOSE };
}
