import * as types from './../constants/ActionTypesSearchFilters';

export function valueSet(data) {
  return {
    type: types.SEARCH_FILTER_SET,
    payload: data
  };
}

export function reset() {
  return {
    type: types.SEARCH_FILTER_RESET
  };
}
