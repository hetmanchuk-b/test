const initialState = [
  { value: '2000000', label: 'Москва' },
  { value: '2004000', label: 'Санкт-Петербург' },
  { value: '2004600', label: 'Тверь' },
  { value: '2060001', label: 'Нижний Новгород' },
  { value: '2060420', label: 'Дзержинск' },
  { value: '2060340', label: 'Владимир-Пассажирский' },
  { value: '2004460', label: 'Вышний Волочек' },
  { value: '2004578', label: 'Угловка' },
  { value: '2004579', label: 'Окуловка' },
  { value: '2004615', label: 'Чудово Московское' }
];

export default (state = initialState, action) => {

  switch ( action.type ) {

    default:
      return state;
  }
};
