import * as types from './../constants/ActionTypesUser';

const initialState = {
    data: {},
    message: '',
    reservations: []
};

export default (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {

        case types.USER_FETCH_UPDATE:
            newState.data = action.payload;
            newState.message = 'Ваши данные успешно обновлены.';
            return newState;

        case types.USER_FETCH:
            newState.data = action.payload;
            return newState;

        case types.USER_FETCH_PASSWORD:
            newState.data = action.payload[0];
            newState.message = action.payload[1];
            return newState;

        case types.USER_FETCH_PASSWORD_WRONG:
            newState.message = action.payload;
            return newState;

        case types.USER_RESERVATIONS_FETCH:
            newState.reservations = action.payload;
            return newState;

        case types.USER_EXIST:
            newState.error = action.payload;
            return newState;

        default:
            return state;
    }
};
