import * as types from './../constants/ActionTypesSearchFilters';

const initialState = {
  price: { from: null, to: null },
  departureTime: { from: null, to: null },
  arrivalTime: { from: null, to: null },
  serviceClasses: {
    economy: { '2Р': false, '2В': false, '2С': false, '2Е': false, '2Ю': false, '2Я': false, '1Ж': false },
    business: { '1С': false },
    premium: { '1В': false, '1Р': false }
  },
};

export default (state = initialState, action) => {
  switch ( action.type ) {

    case types.SEARCH_FILTER_SET:
      return { ...state, ...action.payload };

    case types.SEARCH_FILTER_RESET:
      return {
        price: { from: null, to: null },
        departureTime: { from: null, to: null },
        arrivalTime: { from: null, to: null },
        serviceClasses: {
          economy: { '2Р': false, '2В': false, '2С': false, '2Е': false, '2Ю': false, '2Я': false, '1Ж': false },
          business: { '1С': false },
          premium: { '1В': false, '1Р': false }
        }
      };

    default:
      return state;
  }
};
