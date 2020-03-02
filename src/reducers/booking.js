import * as types from './../constants/ActionTypesBooking';

const initialState = {
    destinationFrom: null,
    destinationTo: null,
    dateFrom: null,
    dateTo: null,
    trainNumber: null,
    isSearchBack: false,
    step: 0,
    selectedSeats: {},
    selectedSeatsForvard: {},
    selectedSeatsReverce: {}
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    let newState = {...state};

    switch (type) {

        case types.BOOKING_PARAM_SET:
            newState[payload.key] = payload.value;

            return newState;

        case types.BOOKING_SELECT_SEAT:
            if (newState.selectedSeats[payload.car] === undefined) newState.selectedSeats[payload.car] = {};
            newState.selectedSeats[payload.car][payload.seat] = {};
            return newState;

        case types.BOOKING_REMOVE_SEAT:
            delete newState.selectedSeats[payload.car][payload.seat];
            return newState;

        case types.BOOKING_SEAT_DATA_UPDATE:
            newState.selectedSeats[payload.car][payload.seat][payload.key] = payload.value;
            return newState;

        case types.BOOKING_FEATCH_SEATS:
            newState.selectedSeats = {...action.payload};
            return newState;

        case types.BOOKING_SEATS_CLEAR:
            newState.selectedSeats = {};
            return newState;

        case types.BOOKING_CLEAR:
            return {
                destinationFrom: null,
                destinationTo: null,
                dateFrom: null,
                dateTo: null,
                trainNumber: null,
                isSearchBack: false,
                selectedSeats: {},
                selectedSeatsForvard: {},
                selectedSeatsReverce: {},
                step: 0
            };

        default:
            return state;
    }
};
