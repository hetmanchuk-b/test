import * as types from './../constants/ActionTypesBag';
import axiosDispatch from './../axios/dispatch';
import axiosAuth from './../axios/auth';
import { appError, loaderShow } from './App';
import { getDate } from './../utility/time';
import { clear as bookingClear, fetchList as bookingFetch } from './Booking';

export function getList() {
  return (dispatch, getState) => {
    const orderId = getState().bag.orderId;

    if ( orderId === null || orderId === undefined ) return null;

    axiosDispatch(dispatch, '/bag', { orderId })
      .then(data => {
        dispatch(fetchList(data));

        if ( data.isArchive || data.state === 'success' ) localStorage.removeItem('orderId');
      })
      .catch(error => dispatch(appError(error)));
  }
}

export function create(params) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      const state = getState();

      params.date = getDate(params.date, {});
      params.orderId = state.bag.orderId;

      axiosDispatch(dispatch, '/bag/reservationCreate', params)
        .then(data => {
          dispatch(setOrderId(data.orderId));

          if ( data.error === undefined ) {
            if ( Object.keys(data.reservationsFailed).length === 0 ) {
              dispatch(getList());
              resolve();
            } else {
              dispatch(bookingFetch(data.reservationsFailed));
            }
          } else {
            reject(data.error);
          }
        })
        .catch(error => dispatch(appError(error)));
    });
  }
}

export function reservationRemove(reservationId) {
  return dispatch => {
    axiosDispatch(dispatch, '/bag/reservationRemove', { reservationId })
      .then(data => dispatch(getList()))
      .catch(error => dispatch(appError(error)));
  }
}

export function reservationPayment(orderId, reservationId) {
  return dispatch => {
    axiosDispatch(dispatch, '/yandex/reservationPayment', { orderId, reservationId })
      .catch(error => dispatch(appError(error)));
  }
}

export function orderPayment(orderId) {
  return dispatch => {
    axiosDispatch(dispatch, '/yandex/orderPayment', { orderId })
      .catch(error => dispatch(appError(error)));
  }
}

export function fetchList(data) {
  return {
    type: types.BAG_FETCH,
    payload: data
  }
}

export function setOrderId(id) {
  localStorage.setItem('orderId', id);

  return {
    type: types.BAG_ORDER_ID_SET,
    payload: { id }
  }
}
