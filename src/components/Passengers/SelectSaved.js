import React from 'react';
import Select from 'react-select';

const options = list => {
  let rv = [];

  list.map(el => rv.push({ value: el.id, label: el.firstName +' '+ el.lastName }));

  return rv;
}

export default props => ( props.list.length === 0 ? null : (
  <Select
    placeholder="Выбрать пассажира из сохраненных"
    onChange={option => props.onSelect(props.list.find(el => el.id === option.value))}
    options={props.list.map(el => ({ value: el.id, label: el.firstName +' '+ el.lastName }))}
  />
));
