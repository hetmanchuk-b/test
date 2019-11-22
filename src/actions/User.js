import * as types from './../constants/ActionTypesUser';
import axiosDispatch from './../axios/dispatch';
import { appError } from './App';

export function getData() {
  return (dispatch, getState) => {
    if ( getState().auth.jwt === null ) return;

    axiosDispatch(dispatch, '/users/me')
      .then(data => dispatch(fetchData(data)))
      .catch(error => dispatch(appError(error)));
  }
}

export function update(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/users/update', params)
      .then(data => dispatch(fetchData(data)))
      .catch(error => dispatch(appError(error)));
  }
}

export function fetchData(data) {
  return {
    type: types.USER_FETCH,
    payload: data
  };
}

export function getReservations() {
  return (dispatch, getState) => {
    if ( getState().auth.jwt === null ) return;

    axiosDispatch(dispatch, '/users/reservations')
      .then(data => dispatch({
        type: types.USER_RESERVATIONS_FETCH,
        payload: data
      }))
      .catch(error => dispatch(appError(error)));
  }
}

export function authorizePayment() {
  return dispatch => {
    axiosDispatch(dispatch, '/yandex/authorize')
      .catch(error => dispatch(appError(error)));
  }
}
