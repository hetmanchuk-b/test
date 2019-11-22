import React, { useState, useEffect } from 'react';

const timeZero = time => ( time < 10 ) ? '0'+ time : time;

export default props => {
  const [ seconds, setSeconds ] = useState(props.seconds);

  useEffect(() => {
    let timeout;

    if ( seconds !== 0 )
      timeout = setTimeout(() => setSeconds(seconds-1), 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <span className="time">{timeZero(Math.floor(seconds / 60))}:{timeZero(seconds % 60)} мин</span>
  );
}
