import * as types from './../constants/ActionTypesPassengers';
import axiosDispatch from './../axios/dispatch';
import { appError } from './App';
import { getDate } from './../utility/time';

export function getList() {
  return (dispatch, getState) => {
    if ( getState().auth.jwt === null ) return;

    axiosDispatch(dispatch, '/passengers')
      .then(data => dispatch(fetchList(data)));
  }
}

export function update(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/passengers/update', params)
      .then(data => dispatch(getList()))
      .catch(error => dispatch(appError(error)));
  }
}

export function create(params) {
  return dispatch => {
    axiosDispatch(dispatch, '/passengers/create', params)
      .then(data => dispatch(getList()))
      .catch(error => dispatch(appError(error)));
  }
}

export function remove(id) {
  return dispatch => {
    axiosDispatch(dispatch, '/passengers/remove', { id })
      .then(data => dispatch(getList()))
      .catch(error => dispatch(appError(error)));
  }
}

export function fetchList(data) {
  return {
    type: types.PASSENGERS_FETCH,
    payload: data
  };
}
