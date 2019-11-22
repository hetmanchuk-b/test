import axiosDispatch from './../axios/dispatch';
import { getReservations } from './User';
import { modalOpen } from './Auth';
import { appError } from './App';

export function create(params) {
  return (dispatch, getState) => {
    return new Promise(resolve => {

      if ( ! getState().auth.jwt ) return dispatch(modalOpen('signIn'));

      axiosDispatch(dispatch, '/tasks/create', params)
        .then(data => resolve(data))
        .catch(error => dispatch(appError(error)));
    });
  }
}

export function remove(id) {
  return dispatch => {
    axiosDispatch(dispatch, '/tasks/remove', { id })
      .then(data => dispatch(getReservations()))
      .catch(error => dispatch(appError(error)));
  }
}
