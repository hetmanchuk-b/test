import * as types from './../constants/ActionTypesTrains';
import axiosDispatch from './../axios/dispatch';
import { appError, loaderShow } from './App';
import { getDate } from './../utility/time';
import { seatsClear } from './Booking';

export function getList(params) {
  return dispatch => {
    if ( ! params.destinationFrom || ! params.destinationTo || ! params.date ) return null;

    params.date = getDate(params.date, {});

    dispatch(clearList());
    dispatch(seatsClear());
    dispatch(loaderShow(true));
    axiosDispatch(dispatch, '/trains/search', params)
      .then(data => dispatch(fetchList(data)))
      .catch(error => {
        dispatch(loaderShow(false));
        dispatch(appError(error))
      });
  }
}

export function getItem(params) {
  params.date = getDate(params.date, {});

  return dispatch => {
    dispatch(loaderShow(true));
    axiosDispatch(dispatch, '/trains/item', params)
      .then(data => dispatch(fetchItem(data)))
      .catch(error => {
        dispatch(loaderShow(false));
        dispatch(appError(error))
      });
  }
}

export function fetchList(data) {
  return dispatch => {
    dispatch(loaderShow(false));
    dispatch({
      type: types.TRAINS_FETCH_SUCCESS,
      payload: data
    });
  }
}

export function fetchItem(data) {
  return dispatch => {
    dispatch(loaderShow(false));
    dispatch({
      type: types.TRAIN_FETCH_SUCCESS,
      payload: data
    });
  }
}

export function clearList() {
  return {
    type: types.TRAINS_CLEAR
  }
}
