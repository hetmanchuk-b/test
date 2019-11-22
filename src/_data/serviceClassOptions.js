export const options = [
  { value: '2Р', label: 'Базовый' },
  { value: '2В', label: 'Эконом +' },
  { value: '2С', label: 'Эконом' },
  { value: '2Е', label: 'Бистро' },
  { value: '1С', label: 'Бизнес' },
  { value: '1В', label: 'Первый' },
  { value: '1Р', label: 'Переговорная' }
];

export const getByValue = value => options.find(el => el.value === value);
