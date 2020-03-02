const initialState = [
  { value: 'Поиск билета'},
  { value: 'Выбор поезда и места туда'},
  { value: 'Выбор поезда и места обратно'},
  { value: 'Данные пассажиров и оплата'},
];

export default (state = initialState, action) => {

  switch ( action.type ) {
    default:
      return state;
  }
};
