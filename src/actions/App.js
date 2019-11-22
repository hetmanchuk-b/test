import * as types from './../constants/ActionTypesApp';

export function notification(type, message) {
  console.log('APP NOTIFICATION', type, message);
}

export function appError(msg) {
  console.log('APP ERROR', msg);

  return {
    type: 'APP_ERROR_HANDLE',
    payload: { msg }
  };
}

export function loaderShow(active) {
  return {
    type: types.APP_LOADER_ACTIVE,
    payload: { active }
  }
}
