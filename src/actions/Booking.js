import * as types from './../constants/ActionTypesBooking';
import axiosDispatch from './../axios/dispatch';
import { appError } from './App';

export function paramSet(key, value) {
  return {
    type: types.BOOKING_PARAM_SET,
    payload: { key, value }
  }
}

export function fetchList(data) {
  return {
    type: types.BOOKING_FEATCH_SEATS,
    payload: data
  }
}

export function clear() {
  return {
    type: types.BOOKING_CLEAR
  }
}

export function selectSeat(car, seat) {
  return {
    type: types.BOOKING_SELECT_SEAT,
    payload: { car, seat }
  }
}

export function removeSeat(car, seat) {
  return {
    type: types.BOOKING_REMOVE_SEAT,
    payload: { car, seat }
  }
}

export function seatDataUpdate(car, seat, key, value) {
  return {
    type: types.BOOKING_SEAT_DATA_UPDATE,
    payload: { car, seat, key, value }
  }
}

export function seatsClear() {
  return {
    type: types.BOOKING_SEATS_CLEAR
  }
}
