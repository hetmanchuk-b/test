export const getTime = msg => msg.split('T')[1].substring(0, 5);

export const getDate = (msg, params) => {
  const date = new Date(msg);

  if ( params === undefined ) params = { weekday: 'short', month: 'short', day: 'numeric' };

  return date.toLocaleDateString('ru-RU', params);
};

export const getTripDuration = msg => {
  const hours = msg / 60;
  const minutes = (hours - Math.floor(hours)) * 60;

  return Math.floor(hours) +'ч '+ Math.floor(minutes) +'м';
};