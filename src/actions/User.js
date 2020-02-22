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
      .then(data => dispatch(fetchDataUpdate(data)))
      .catch(error => dispatch(userExist(error)));
  }
}

export function updatePass(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/users/updatePass', params)
      .then(data => dispatch(fetchDataPassword(data)))
      .catch(error => dispatch(fetchDataPasswordWrong(error)));
  }
}

export function fetchData(data) {
  return {
    type: types.USER_FETCH,
    payload: data
  };
}
export function fetchDataUpdate(data) {
  return {
    type: types.USER_FETCH_UPDATE,
    payload: data
  };
}
export function fetchDataPassword(data) {
  return {
    type: types.USER_FETCH_PASSWORD,
    payload: data
  };
}

export function fetchDataPasswordWrong(error) {
  return {
    type: types.USER_FETCH_PASSWORD_WRONG,
    payload: error
  };
}
export function userExist(error) {
  return {
    type: types.USER_EXIST,
    payload: error
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
