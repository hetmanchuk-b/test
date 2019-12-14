import React from 'react';

export default props => {
  const { handleClick, availableSeats, selectedSeats } = props;
  
  return (
    <svg pointerEvents="bounding-box" version="1.1" id="Layer_1" xmlnssvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1140 306.8" style={{enableBackground:"new 0 0 1140 306.8"}} xmlSpace="preserve">
    <g>
    <path className="fill-lightgray" d="M351.6,176.7c7.4,0,13.3,6,13.3,13.3v43.7h-26.7V190C338.2,182.6,344.2,176.7,351.6,176.7 M351.6,175.6
    L351.6,175.6c-7.9,0-14.4,6.4-14.4,14.4v44.7h28.7V190C365.9,182.1,359.5,175.6,351.6,175.6L351.6,175.6z"></path>
    <path className="fill-lightgray" d="M364.9,72.5v43.7c0,7.4-6,13.3-13.3,13.3c-7.4,0-13.3-6-13.3-13.3V72.5H364.9 M365.9,71.5h-28.7v44.7
    c0,7.9,6.4,14.4,14.4,14.4h0c7.9,0,14.4-6.4,14.4-14.4V71.5L365.9,71.5z"></path>
    <path className="fill-lightgray" d="M841.6,176.7c7.4,0,13.3,6,13.3,13.3v43.7h-26.7V190C828.2,182.6,834.2,176.7,841.6,176.7 M841.6,175.6
    L841.6,175.6c-7.9,0-14.4,6.4-14.4,14.4v44.7h28.7V190C855.9,182.1,849.5,175.6,841.6,175.6L841.6,175.6z"></path>
    <path className="fill-lightgray" d="M854.9,72.5v43.7c0,7.4-6,13.3-13.3,13.3c-7.4,0-13.3-6-13.3-13.3V72.5H854.9 M855.9,71.5h-28.7v44.7
    c0,7.9,6.4,14.4,14.4,14.4l0,0c7.9,0,14.4-6.4,14.4-14.4V71.5L855.9,71.5z"></path>
    <path style={{transform: 'translateX(-13px)'}} className="fill-lightgray" d="M108.5,72.5c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9H63c-3.3,0-5.9-2.6-5.9-5.9V78.4
    c0-3.3,2.6-5.9,5.9-5.9H108.5 M108.5,71.5H63c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9V78.4
    C115.4,74.6,112.3,71.5,108.5,71.5L108.5,71.5z"></path>
    <polyline className="t60-arrow" points="1107.8,87.6 1123.4,72 1139,87.6   "></polyline>
    <polyline className="t60-arrow" points="1107.8,218.6 1123.4,234.2 1139,218.6  "></polyline>
    <polyline className="t60-arrow" points="1123.4,168.7 1139,153.1 1123.4,137.5  "></polyline>
    <polyline className="t60-arrow" points="16.2,137.9 1,153.1 16.2,168.4   "></polyline>
    <path className="fill-lightgray" d="M1043.6,129.8c-3.3,0-5.9-2.6-5.9-5.9V78.4c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
    c0,3.3-2.6,5.9-5.9,5.9H1043.6 M1043.6,130.8h45.5c3.8,0,6.9-3.1,6.9-6.9V78.4c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
    v45.5C1036.7,127.7,1039.8,130.8,1043.6,130.8L1043.6,130.8z"></path>
    <text transform="matrix(1 0 0 1 989.4227 108.3323)" className="fill-darkgray svg-helveticabold svg-fontsize">WC</text>
    <path className="fill-lightgray" d="M981.4,129.8c-3.3,0-5.9-2.6-5.9-5.9V78.4c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
    c0,3.3-2.6,5.9-5.9,5.9H981.4 M981.4,130.8h45.5c3.8,0,6.9-3.1,6.9-6.9V78.4c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
    v45.5C974.5,127.7,977.6,130.8,981.4,130.8L981.4,130.8z"></path>
    <text transform="matrix(1 0 0 1 1051.6121 108.3323)" className="fill-darkgray svg-helveticabold svg-fontsize">WC</text>
    <path className="fill-lightgray" d="M913.8,233.7c-3.3,0-5.9-2.6-5.9-5.9v-45.5c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
    c0,3.3-2.6,5.9-5.9,5.9H913.8 M913.8,234.7h45.5c3.8,0,6.9-3.1,6.9-6.9v-45.5c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
    v45.5C906.9,231.6,910,234.7,913.8,234.7L913.8,234.7z"></path>
    <g>
    <path className="fill-darkgray" d="M947.3,212.5c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
      c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
      c0.2,0.2,0.3,0.5,0.4,0.9C947.3,204.4,947.3,208.4,947.3,212.5z"></path>
    <path className="fill-darkgray" d="M925.8,200.3c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
      c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
      C925.8,208.5,925.8,204.4,925.8,200.3z"></path>
    <path className="fill-darkgray" d="M942.5,214.6c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
      c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
      c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
      c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C942.5,214.5,942.5,214.6,942.5,214.6z M939.8,197.9
      c0-0.4-0.1-0.7-0.1-1.1c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
      C935.5,197.7,937.6,197.7,939.8,197.9z"></path>
    </g>
    <g style={{transform: 'translateX(-13px)'}}>
      <path className="fill-darkgray" d="M96.5,108.6c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
        c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
        c0.2,0.2,0.3,0.5,0.4,0.9C96.5,100.5,96.5,104.5,96.5,108.6z"></path>
      <path className="fill-darkgray" d="M75,96.4c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
        c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
        C75,104.6,75,100.5,75,96.4z"></path>
      <path className="fill-darkgray" d="M91.6,110.7c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
        c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
        c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
        c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C91.6,110.6,91.6,110.7,91.6,110.7z M88.9,94c0-0.4-0.1-0.7-0.1-1.1
        c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
        C84.7,93.8,86.8,93.8,88.9,94z"></path>
    </g>
    <g style={{transform: 'translateX(-25px)'}}>
      <path className="fill-lightgray" d="M125.9,183.4c0,2.6,0,5.3,0,7.9c0,1.7-1.3,3-3,3c-5.3,0-10.6,0-15.8,0c-1.7,0-3-1.3-3-3c0-3.7,0-7.4,0-11
        c0-1.6,0-3.1,0-4.7c0-1.8,1.3-3.1,3.1-3.1c1.8,0,3.7,0,5.5,0c3.4,0,6.8,0,10.2,0c1.4,0,2.6,0.9,2.9,2.3c0,0.2,0.1,0.4,0.1,0.6
        c0,1.6,0,3.2,0,4.7C125.9,181.2,125.9,182.3,125.9,183.4C125.9,183.4,125.9,183.4,125.9,183.4z M105,183.3
        C105,183.3,105,183.3,105,183.3c0,2.6,0,5.2,0,7.8c0,1.2,0.9,2.2,2.2,2.2c5.2,0,10.4,0,15.6,0c1.3,0,2.2-0.9,2.2-2.2
        c0-3.5,0-7,0-10.5c0-1.7,0-3.5,0-5.2c0-1.3-0.9-2.1-2.2-2.1c-4.2,0-8.3,0-12.5,0c-1.1,0-2.1,0-3.2,0c-1.2,0-2.1,0.9-2.1,2.1
        c0,1.2,0,2.4,0,3.6C105,180.5,105,181.9,105,183.3z"></path>
      <path className="fill-darkgray" d="M121.7,183.4c0,3.7-3,6.7-6.6,6.7c-3.7,0.1-6.8-2.9-6.8-6.6c-0.1-3.8,2.9-6.8,6.6-6.9
        C118.4,176.5,121.7,179.4,121.7,183.4z M114.5,177.6c-2.5,0.1-5.2,2.2-5.3,5.6c-0.1,3.4,2.6,5.8,5.3,5.9c0,0,0-0.1,0-0.1
        c0-0.3,0-0.7,0-1c0-0.3,0.2-0.4,0.4-0.5c0.3,0,0.5,0.2,0.5,0.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.5,0,0.8c1.3,0,3.5-0.8,4.6-2.9
        c1.1-2.1,1-4.2-0.3-6.1c-1-1.5-2.5-2.3-4.3-2.5c0,0.4,0,0.8,0,1.1c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5
        C114.5,178.3,114.5,178,114.5,177.6z"></path>
      <path className="fill-darkgray" d="M117.9,182.3c0.6,0,1.1,0.5,1,1c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1.1C116.9,182.8,117.3,182.3,117.9,182.3z"></path>
      <path className="fill-darkgray" d="M111,183.4c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1.1,1c0,0.6-0.4,1-1,1C111.4,184.4,111,183.9,111,183.4z"></path>
    </g>
    <g>
    <path className="fill-lightgray" d="M966.2,100.6c0,2.6,0,5.3,0,7.9c0,1.7-1.3,3-3,3c-5.3,0-10.6,0-15.8,0c-1.7,0-3-1.3-3-3c0-3.7,0-7.4,0-11
      c0-1.6,0-3.1,0-4.7c0-1.8,1.3-3.1,3.1-3.1c1.8,0,3.7,0,5.5,0c3.4,0,6.8,0,10.2,0c1.4,0,2.6,0.9,2.9,2.3c0,0.2,0.1,0.4,0.1,0.6
      c0,1.6,0,3.2,0,4.7C966.2,98.4,966.2,99.5,966.2,100.6C966.2,100.6,966.2,100.6,966.2,100.6z M945.3,100.6
      C945.3,100.6,945.3,100.6,945.3,100.6c0,2.6,0,5.2,0,7.8c0,1.2,0.9,2.2,2.2,2.2c5.2,0,10.4,0,15.6,0c1.3,0,2.2-0.9,2.2-2.2
      c0-3.5,0-7,0-10.5c0-1.7,0-3.5,0-5.2c0-1.3-0.9-2.1-2.2-2.1c-4.2,0-8.3,0-12.5,0c-1.1,0-2.1,0-3.2,0c-1.2,0-2.1,0.9-2.1,2.1
      c0,1.2,0,2.4,0,3.6C945.3,97.7,945.3,99.2,945.3,100.6z"></path>
    <path className="fill-darkgray" d="M962,100.6c0,3.7-3,6.7-6.6,6.7c-3.7,0.1-6.8-2.9-6.8-6.6c-0.1-3.8,2.9-6.8,6.6-6.9
      C958.8,93.8,962,96.7,962,100.6z M954.8,94.8c-2.5,0.1-5.2,2.2-5.3,5.6c-0.1,3.4,2.6,5.8,5.3,5.9c0,0,0-0.1,0-0.1c0-0.3,0-0.7,0-1
      c0-0.3,0.2-0.4,0.4-0.5c0.3,0,0.5,0.2,0.5,0.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.5,0,0.8c1.3,0,3.5-0.8,4.6-2.9c1.1-2.1,1-4.2-0.3-6.1
      c-1-1.5-2.5-2.3-4.3-2.5c0,0.4,0,0.8,0,1.1c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5C954.8,95.6,954.8,95.2,954.8,94.8z"></path>
    <path className="fill-darkgray" d="M958.3,99.6c0.6,0,1.1,0.5,1,1c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1.1C957.2,100,957.7,99.6,958.3,99.6z"></path>
    <path className="fill-darkgray" d="M951.3,100.6c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1.1,1c0,0.6-0.4,1-1,1C951.8,101.6,951.3,101.2,951.3,100.6z"></path>
    </g>
    <polyline className="t60-arrow" points="1,87.6 16.6,72 32.2,87.6  "></polyline>
    <polyline className="t60-arrow" points="1,218.6 16.6,234.2 32.2,218.6   "></polyline>
    <g className={(availableSeats.includes('36') ? 
      (selectedSeats.includes('36') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('36')}><path d="M529.3,172.7L529.3,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C527.9,173.4,528.5,172.7,529.3,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 504.2753 193.3829)"  className="train-seat__text">36</text><path d="M504.5,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H504.5 M504.5,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8V196C498.7,199.2,501.3,201.8,504.5,201.8L504.5,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('40') ? 
      (selectedSeats.includes('40') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('40')}><path d="M569.8,172.7L569.8,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C568.3,173.4,569,172.7,569.8,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 543.7606 193.3829)"  className="train-seat__text">40</text><path d="M545,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H545 M545,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1H545c-3.2,0-5.8,2.6-5.8,5.8V196
      C539.2,199.2,541.8,201.8,545,201.8L545,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('44') ? 
      (selectedSeats.includes('44') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('44')}><path d="M610.3,172.7L610.3,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C608.8,173.4,609.5,172.7,610.3,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 585.246 193.3829)"  className="train-seat__text">44</text><path d="M585.5,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H585.5 M585.5,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8V196C579.7,199.2,582.3,201.8,585.5,201.8L585.5,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('46') ? 
      (selectedSeats.includes('46') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('46')}><path d="M650.8,172.7L650.8,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C649.3,173.4,650,172.7,650.8,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 625.7313 193.3829)"  className="train-seat__text">46</text><path d="M625.9,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H625.9 M625.9,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8V196C620.2,199.2,622.8,201.8,625.9,201.8L625.9,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('48') ? 
      (selectedSeats.includes('48') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('48')}><path d="M691.2,172.7L691.2,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C689.8,173.4,690.4,172.7,691.2,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 666.2167 193.3829)"  className="train-seat__text">48</text><path d="M666.4,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H666.4 M666.4,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8V196C660.7,199.2,663.3,201.8,666.4,201.8L666.4,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('35') ? 
      (selectedSeats.includes('35') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('35')}><path d="M529.3,205.6L529.3,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C527.9,206.2,528.5,205.6,529.3,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 504.2753 226.2765)"  className="train-seat__text">35</text><path d="M504.5,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H504.5 M504.5,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C498.7,232.1,501.3,234.7,504.5,234.7L504.5,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('39') ? 
      (selectedSeats.includes('39') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('39')}><path d="M569.8,205.6L569.8,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C568.3,206.2,569,205.6,569.8,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 543.7606 226.2765)"  className="train-seat__text">39</text><path d="M545,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H545 M545,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1H545c-3.2,0-5.8,2.6-5.8,5.8v17.5
      C539.2,232.1,541.8,234.7,545,234.7L545,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('43') ? 
      (selectedSeats.includes('43') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('43')}><path d="M610.3,205.6L610.3,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C608.8,206.2,609.5,205.6,610.3,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 585.246 226.2765)"  className="train-seat__text">43</text><path d="M585.5,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H585.5 M585.5,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C579.7,232.1,582.3,234.7,585.5,234.7L585.5,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('45') ? 
      (selectedSeats.includes('45') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('45')}><path d="M650.8,205.6L650.8,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C649.3,206.2,650,205.6,650.8,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 625.7313 226.2765)"  className="train-seat__text">45</text><path d="M625.9,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H625.9 M625.9,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C620.2,232.1,622.8,234.7,625.9,234.7L625.9,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('47') ? 
      (selectedSeats.includes('47') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('47')}><path d="M691.2,205.6L691.2,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4V207
      C689.8,206.2,690.4,205.6,691.2,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 666.2167 226.2765)"  className="train-seat__text">47</text><path d="M666.4,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H666.4 M666.4,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C660.7,232.1,663.3,234.7,666.4,234.7L666.4,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('33') ? 
      (selectedSeats.includes('33') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('33')}><path d="M529.3,71.5L529.3,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C527.9,72.1,528.5,71.5,529.3,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 503.2762 93.171)"  className="train-seat__text">33</text><path d="M504.5,100.1c-2.9,0-5.2-2.4-5.2-5.2V77.3c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H504.5 M504.5,100.6h20.2c1.7,0,3.1-1.4,3.1-3.1V74.7c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C498.7,98,501.3,100.6,504.5,100.6L504.5,100.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('37') ? 
      (selectedSeats.includes('37') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('37')}><path d="M569.8,71.5L569.8,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C568.3,72.1,569,71.5,569.8,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 543.7615 93.171)"  className="train-seat__text">37</text><path d="M545,100.1c-2.9,0-5.2-2.4-5.2-5.2V77.3c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H545 M545,100.6h20.2c1.7,0,3.1-1.4,3.1-3.1V74.7c0-1.7-1.4-3.1-3.1-3.1H545c-3.2,0-5.8,2.6-5.8,5.8v17.5
      C539.2,98,541.8,100.6,545,100.6L545,100.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('41') ? 
      (selectedSeats.includes('41') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('41')}><path d="M610.3,71.5L610.3,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C608.8,72.1,609.5,71.5,610.3,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 584.2468 93.171)"  className="train-seat__text">41</text><path d="M585.5,100.1c-2.9,0-5.2-2.4-5.2-5.2V77.3c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H585.5 M585.5,100.6h20.2c1.7,0,3.1-1.4,3.1-3.1V74.7c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C579.7,98,582.3,100.6,585.5,100.6L585.5,100.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('34') ? 
      (selectedSeats.includes('34') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('34')}><path d="M529.3,104.4L529.3,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C527.9,105,528.5,104.4,529.3,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 503.2762 126.0646)"  className="train-seat__text">34</text><path d="M504.5,133c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H504.5 M504.5,133.5h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C498.7,130.9,501.3,133.5,504.5,133.5L504.5,133.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('38') ? 
      (selectedSeats.includes('38') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('38')}><path d="M569.8,104.4L569.8,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C568.3,105,569,104.4,569.8,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 543.7615 126.0646)"  className="train-seat__text">38</text><path d="M545,133c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H545 M545,133.5h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1H545c-3.2,0-5.8,2.6-5.8,5.8v17.5
      C539.2,130.9,541.8,133.5,545,133.5L545,133.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('42') ? 
      (selectedSeats.includes('42') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('42')}><path d="M610.3,104.4L610.3,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C608.8,105,609.5,104.4,610.3,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 584.2468 126.0646)"  className="train-seat__text">42</text><path d="M585.5,133c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H585.5 M585.5,133.5h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
      c-3.2,0-5.8,2.6-5.8,5.8v17.5C579.7,130.9,582.3,133.5,585.5,133.5L585.5,133.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('21') ? 
      (selectedSeats.includes('21') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('21')}><path d="M295,234.7L295,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C296.4,234,295.8,234.7,295,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 301.3726 227.2761)"  className="train-seat__text">21</text><path d="M319.8,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,208.2,323,205.6,319.8,205.6L319.8,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('15') ? 
      (selectedSeats.includes('15') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('15')}><path d="M254.5,234.7L254.5,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C255.9,234,255.3,234.7,254.5,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 260.8873 227.2761)"  className="train-seat__text">15</text><path d="M279.3,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,208.2,282.5,205.6,279.3,205.6L279.3,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('11') ? 
      (selectedSeats.includes('11') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('11')}><path d="M214,234.7L214,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C215.4,234,214.8,234.7,214,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 220.4019 227.2761)"  className="train-seat__text">11</text><path d="M238.8,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,208.2,242,205.6,238.8,205.6L238.8,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('7') ? 
      (selectedSeats.includes('7') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('7')}><path d="M173.5,234.7L173.5,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C175,234,174.3,234.7,173.5,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 179.9166 227.2761)"  className="train-seat__text">07</text><path d="M198.3,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,208.2,201.5,205.6,198.3,205.6L198.3,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('3') ? 
      (selectedSeats.includes('3') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('3')}><path d="M133,234.7L133,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C134.5,234,133.8,234.7,133,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 139.4312 227.2761)"  className="train-seat__text">03</text><path d="M157.8,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,208.2,161,205.6,157.8,205.6L157.8,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('22') ? 
      (selectedSeats.includes('22') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('22')}><path d="M295,201.8L295,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C296.4,201.1,295.8,201.8,295,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 301.3726 194.3826)"  className="train-seat__text">22</text><path d="M319.8,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,175.3,323,172.7,319.8,172.7L319.8,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('16') ? 
      (selectedSeats.includes('16') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('16')}><path d="M254.5,201.8L254.5,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C255.9,201.1,255.3,201.8,254.5,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 260.8873 194.3826)"  className="train-seat__text">16</text><path d="M279.3,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,175.3,282.5,172.7,279.3,172.7L279.3,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('12') ? 
      (selectedSeats.includes('12') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('12')}><path d="M214,201.8L214,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C215.4,201.1,214.8,201.8,214,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 220.4019 194.3826)"  className="train-seat__text">12</text><path d="M238.8,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,175.3,242,172.7,238.8,172.7L238.8,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('8') ? 
      (selectedSeats.includes('8') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('8')}><path d="M173.5,201.8L173.5,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C175,201.1,174.3,201.8,173.5,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 179.9166 194.3826)"  className="train-seat__text">08</text><path d="M198.3,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,175.3,201.5,172.7,198.3,172.7L198.3,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('4') ? 
      (selectedSeats.includes('4') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('4')}><path d="M133,201.8L133,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C134.5,201.1,133.8,201.8,133,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 139.4312 194.3826)"  className="train-seat__text">04</text><path d="M157.8,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,175.3,161,172.7,157.8,172.7L157.8,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('18') ? 
      (selectedSeats.includes('18') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('18')}><path d="M295,133.5L295,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4V132
        C296.4,132.8,295.8,133.5,295,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 301.1229 126.0646)"  className="train-seat__text">18</text><path d="M319.8,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,107,323,104.4,319.8,104.4L319.8,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('14') ? 
      (selectedSeats.includes('14') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('14')}><path d="M254.5,133.5L254.5,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4V132
        C255.9,132.8,255.3,133.5,254.5,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 260.6375 126.0646)"  className="train-seat__text">14</text><path d="M279.3,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,107,282.5,104.4,279.3,104.4L279.3,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('10') ? 
      (selectedSeats.includes('10') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('10')}><path d="M214,133.5L214,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
        C215.4,132.8,214.8,133.5,214,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 220.4022 126.0646)"  className="train-seat__text">10</text><path d="M238.8,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,107,242,104.4,238.8,104.4L238.8,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('6') ? 
      (selectedSeats.includes('6') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('6')}><path d="M173.5,133.5L173.5,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
        C175,132.8,174.3,133.5,173.5,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 179.9168 126.0646)"  className="train-seat__text">06</text><path d="M198.3,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,107,201.5,104.4,198.3,104.4L198.3,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('2') ? 
      (selectedSeats.includes('2') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('2')}><path d="M133,133.5L133,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4V132
        C134.5,132.8,133.8,133.5,133,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 139.4324 126.0646)"  className="train-seat__text">02</text><path d="M157.8,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,107,161,104.4,157.8,104.4L157.8,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('17') ? 
      (selectedSeats.includes('17') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('17')}><path d="M295,100.6L295,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C296.4,99.9,295.8,100.6,295,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 301.1229 93.171)"  className="train-seat__text">17</text><path d="M319.8,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8V77.3C325.5,74.1,323,71.5,319.8,71.5L319.8,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('13') ? 
      (selectedSeats.includes('13') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('13')}><path d="M254.5,100.6L254.5,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C255.9,99.9,255.3,100.6,254.5,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 260.6375 93.171)"  className="train-seat__text">13</text><path d="M279.3,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8V77.3C285,74.1,282.5,71.5,279.3,71.5L279.3,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('9') ? 
      (selectedSeats.includes('9') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('9')}><path d="M214,100.6L214,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C215.4,99.9,214.8,100.6,214,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 220.4022 93.171)"  className="train-seat__text">09</text><path d="M238.8,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8V77.3C244.6,74.1,242,71.5,238.8,71.5L238.8,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('5') ? 
      (selectedSeats.includes('5') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('5')}><path d="M173.5,100.6L173.5,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C175,99.9,174.3,100.6,173.5,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 179.9168 93.171)"  className="train-seat__text">05</text><path d="M198.3,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8V77.3C204.1,74.1,201.5,71.5,198.3,71.5L198.3,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('1') ? 
      (selectedSeats.includes('1') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('1')}><path d="M133,100.6L133,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C134.5,99.9,133.8,100.6,133,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 139.4324 93.171)"  className="train-seat__text">01</text><path d="M157.8,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8V77.3C163.6,74.1,161,71.5,157.8,71.5L157.8,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('31') ? 
      (selectedSeats.includes('31') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('31')}><path d="M487.6,205.6L487.6,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C486.1,206.2,486.8,205.6,487.6,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 462.0399 226.2765)"  className="train-seat__text">31</text><path d="M483,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H483 M483,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C486.1,207,484.7,205.6,483,205.6L483,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('27') ? 
      (selectedSeats.includes('27') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('27')}><path d="M447.1,205.6L447.1,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C445.6,206.2,446.3,205.6,447.1,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 421.5546 226.2765)"  className="train-seat__text">27</text><path d="M442.5,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C445.6,207,444.2,205.6,442.5,205.6L442.5,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('23') ? 
      (selectedSeats.includes('23') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('23')}><path d="M406.6,205.6L406.6,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C405.2,206.2,405.8,205.6,406.6,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 381.0702 226.2765)"  className="train-seat__text">23</text><path d="M402,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H402 M402,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C405.1,207,403.7,205.6,402,205.6L402,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('32') ? 
      (selectedSeats.includes('32') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('32')}><path d="M487.6,172.7L487.6,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C486.1,173.4,486.8,172.7,487.6,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 462.0399 193.3829)"  className="train-seat__text">32</text><path d="M483,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H483 M483,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1v-22.8
      C486.1,174.1,484.7,172.8,483,172.8L483,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('28') ? 
      (selectedSeats.includes('28') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('28')}><path d="M447.1,172.7L447.1,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C445.6,173.4,446.3,172.7,447.1,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 421.5546 193.3829)"  className="train-seat__text">28</text><path d="M442.5,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C445.6,174.1,444.2,172.8,442.5,172.8L442.5,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('24') ? 
      (selectedSeats.includes('24') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('24')}><path d="M406.6,172.7L406.6,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C405.2,173.4,405.8,172.7,406.6,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 381.0702 193.3829)"  className="train-seat__text">24</text><path d="M402,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H402 M402,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1v-22.8
      C405.1,174.1,403.7,172.8,402,172.8L402,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('30') ? 
      (selectedSeats.includes('30') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('30')}><path d="M487.6,104.4L487.6,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C486.1,105,486.8,104.4,487.6,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 461.7908 126.0646)"  className="train-seat__text">30</text><path d="M483,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H483 M483,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C486.1,105.8,484.7,104.4,483,104.4L483,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('26') ? 
      (selectedSeats.includes('26') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('26')}><path d="M447.1,104.4L447.1,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C445.6,105,446.3,104.4,447.1,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 421.3055 126.0646)"  className="train-seat__text">26</text><path d="M442.5,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C445.6,105.8,444.2,104.4,442.5,104.4L442.5,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('20') ? 
      (selectedSeats.includes('20') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('20')}><path d="M406.6,104.4L406.6,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C405.2,105,405.8,104.4,406.6,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 381.6082 126.0646)"  className="train-seat__text">20</text><path d="M402,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H402 M402,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C405.1,105.8,403.7,104.4,402,104.4L402,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('29') ? 
      (selectedSeats.includes('29') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('29')}><path d="M487.6,71.5L487.6,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C486.1,72.1,486.8,71.5,487.6,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 461.7908 93.171)"  className="train-seat__text">29</text><path d="M483,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
      c0-2.9,2.4-5.2,5.2-5.2H483 M483,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1V74.7
      C486.1,72.9,484.7,71.5,483,71.5L483,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('25') ? 
      (selectedSeats.includes('25') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('25')}><path d="M447.1,71.5L447.1,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C445.6,72.1,446.3,71.5,447.1,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 421.3055 93.171)"  className="train-seat__text">25</text><path d="M442.5,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
      c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      V74.7C445.6,72.9,444.2,71.5,442.5,71.5L442.5,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('19') ? 
      (selectedSeats.includes('19') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('19')}><path d="M406.6,71.5L406.6,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C405.2,72.1,405.8,71.5,406.6,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 381.6082 93.171)"  className="train-seat__text">19</text><path d="M402,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
      c0-2.9,2.4-5.2,5.2-5.2H402 M402,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1V74.7
      C405.1,72.9,403.7,71.5,402,71.5L402,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('63') ? 
      (selectedSeats.includes('63') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('63')}><path d="M896.2,205.6L896.2,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
      C894.7,206.2,895.4,205.6,896.2,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 870.6286 227.2795)"  className="train-seat__text">63</text><path d="M891.6,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H891.6 M891.6,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C894.7,207,893.3,205.6,891.6,205.6L891.6,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('64') ? 
      (selectedSeats.includes('64') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('64')}><path d="M896.2,172.7L896.2,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C894.7,173.4,895.4,172.7,896.2,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 870.6286 194.386)"  className="train-seat__text">64</text><path d="M891.6,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H891.6 M891.6,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C894.7,174.1,893.3,172.8,891.6,172.8L891.6,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('66') ? 
      (selectedSeats.includes('66') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('66')}><path d="M936.7,104.4L936.7,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C935.2,105,935.9,104.4,936.7,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 911.113 125.0667)"  className="train-seat__text">66</text><path d="M932.1,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H932.1 M932.1,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C935.2,105.8,933.8,104.4,932.1,104.4L932.1,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('60') ? 
      (selectedSeats.includes('60') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('60')}><path d="M896.2,104.4L896.2,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C894.7,105,895.4,104.4,896.2,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 870.6286 125.0667)"  className="train-seat__text">60</text><path d="M891.6,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H891.6 M891.6,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C894.7,105.8,893.3,104.4,891.6,104.4L891.6,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('65') ? 
      (selectedSeats.includes('65') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('65')}><path d="M936.7,71.5L936.7,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C935.2,72.1,935.9,71.5,936.7,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 911.113 92.1731)"  className="train-seat__text">65</text><path d="M932.1,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
      c0-2.9,2.4-5.2,5.2-5.2H932.1 M932.1,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      V74.7C935.2,72.9,933.8,71.5,932.1,71.5L932.1,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('59') ? 
      (selectedSeats.includes('59') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('59')}><path d="M896.2,71.5L896.2,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
      C894.7,72.1,895.4,71.5,896.2,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 870.6286 92.1731)"  className="train-seat__text">59</text><path d="M891.6,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
      c0-2.9,2.4-5.2,5.2-5.2H891.6 M891.6,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      V74.7C894.7,72.9,893.3,71.5,891.6,71.5L891.6,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('58') ? 
      (selectedSeats.includes('58') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('58')}><path d="M785.9,133.5L785.9,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
        C787.4,132.8,786.7,133.5,785.9,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 791.4304 125.0653)"  className="train-seat__text">58</text><path d="M810.8,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
        c0-1.4,1.2-2.6,2.6-2.6H810.8 M810.8,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
        c3.2,0,5.8-2.6,5.8-5.8v-17.5C816.5,107,813.9,104.4,810.8,104.4L810.8,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('57') ? 
      (selectedSeats.includes('57') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('57')}><path d="M785.9,100.6L785.9,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
        C787.4,99.9,786.7,100.6,785.9,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 791.4304 92.1718)"  className="train-seat__text">57</text><path d="M810.8,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
        c0-1.4,1.2-2.6,2.6-2.6H810.8 M810.8,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
        V77.3C816.5,74.1,813.9,71.5,810.8,71.5L810.8,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('49') ? 
      (selectedSeats.includes('49') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('49')}><path d="M704.7,100.6L704.7,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C706.2,99.9,705.5,100.6,704.7,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 710.7067 92.1718)"  className="train-seat__text">49</text><path d="M709.3,100c-1.4,0-2.6-1.2-2.6-2.6V74.6c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H709.3 M709.3,100.5h20.2c3.2,0,5.8-2.6,5.8-5.8V77.3c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C706.2,99.1,707.6,100.5,709.3,100.5L709.3,100.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('53') ? 
      (selectedSeats.includes('53') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('53')}><path d="M745.2,100.6L745.2,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C746.6,99.9,746,100.6,745.2,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 750.946 92.1718)"  className="train-seat__text">53</text><path d="M749.8,100c-1.4,0-2.6-1.2-2.6-2.6V74.6c0-1.4,1.2-2.6,2.6-2.6H770c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H749.8 M749.8,100.5H770c3.2,0,5.8-2.6,5.8-5.8V77.3c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C746.7,99.1,748.1,100.5,749.8,100.5L749.8,100.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('50') ? 
      (selectedSeats.includes('50') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('50')}><path d="M704.7,133.5L704.7,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
      C706.2,132.8,705.5,133.5,704.7,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 710.7067 125.0653)"  className="train-seat__text">50</text><path d="M709.3,132.9c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H709.3 M709.3,133.4h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C706.2,132,707.6,133.4,709.3,133.4L709.3,133.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('54') ? 
      (selectedSeats.includes('54') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('54')}><path d="M745.2,133.5L745.2,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
      C746.6,132.8,746,133.5,745.2,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 750.946 125.0653)"  className="train-seat__text">54</text><path d="M749.8,132.9c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6H770c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H749.8 M749.8,133.4H770c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C746.7,132,748.1,133.4,749.8,133.4L749.8,133.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('61') ? 
      (selectedSeats.includes('61') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('61')}><path d="M785.9,234.6L785.9,234.6c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C787.4,233.9,786.7,234.6,785.9,234.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 791.4304 226.167)"  className="train-seat__text">61</text><path d="M810.8,206c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
    c0-1.4,1.2-2.6,2.6-2.6H810.8 M810.8,205.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
    v-17.5C816.5,208.1,813.9,205.5,810.8,205.5L810.8,205.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('62') ? 
      (selectedSeats.includes('62') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('62')}><path d="M785.9,201.7L785.9,201.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C787.4,201,786.7,201.7,785.9,201.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 791.4304 193.2734)"  className="train-seat__text">62</text><path d="M810.8,173.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
    c0-1.4,1.2-2.6,2.6-2.6H810.8 M810.8,172.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
    v-17.5C816.5,175.2,813.9,172.6,810.8,172.6L810.8,172.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('52') ? 
      (selectedSeats.includes('52') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('52')}><path d="M704.7,201.7L704.7,201.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C706.2,201,705.5,201.7,704.7,201.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 710.7048 193.2734)"  className="train-seat__text">52</text><path d="M709.3,201.1c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
    c0,2.9-2.4,5.2-5.2,5.2H709.3 M709.3,201.6h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
    v22.8C706.2,200.2,707.6,201.6,709.3,201.6L709.3,201.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('56') ? 
      (selectedSeats.includes('56') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('56')}><path d="M745.2,201.7L745.2,201.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C746.6,201,746,201.7,745.2,201.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 750.946 193.2734)"  className="train-seat__text">56</text><path d="M749.8,201.1c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6H770c2.9,0,5.2,2.4,5.2,5.2v17.5
    c0,2.9-2.4,5.2-5.2,5.2H749.8 M749.8,201.6H770c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
    v22.8C746.7,200.2,748.1,201.6,749.8,201.6L749.8,201.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('51') ? 
      (selectedSeats.includes('51') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('51')}><path d="M704.7,234.6L704.7,234.6c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C706.2,233.9,705.5,234.6,704.7,234.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 710.7048 226.167)"  className="train-seat__text">51</text><path d="M709.3,234c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
    c0,2.9-2.4,5.2-5.2,5.2H709.3 M709.3,234.5h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
    v22.8C706.2,233.1,707.6,234.5,709.3,234.5L709.3,234.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('55') ? 
      (selectedSeats.includes('55') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('55')}><path d="M745.2,234.6L745.2,234.6c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
    C746.6,233.9,746,234.6,745.2,234.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 750.946 226.167)"  className="train-seat__text">55</text><path d="M749.8,234c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6H770c2.9,0,5.2,2.4,5.2,5.2v17.5
    c0,2.9-2.4,5.2-5.2,5.2H749.8 M749.8,234.5H770c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
    v22.8C746.7,233.1,748.1,234.5,749.8,234.5L749.8,234.5z" className="train-seat__border"></path></g></g>
    <g id="zwquE5_1_">
    <g>
    <path className="fill-darkgray" d="M658.9,119.1c-6.5,0-12.9,0-19.4,0c-3.8,0-6.3-3-5.2-6.6c0.4-1.2,1.5-2.4,2.6-3.1c6.1-4,12.4-7.9,18.6-11.8
      c0.8-0.5,1.4-1,1.2-2.1c-0.2-1.9,0.5-3.3,2.2-4.1c0.2-0.1,0.3-0.2,0.5-0.4c0.9-0.5,1.8-1.3,1.2-2.2c-0.4-0.6-1.5-1-2.3-1.1
      c-1.1-0.1-1.8,0.6-2,1.8c-0.1,0.9,0.1,1.9-1.3,2.1c-2.4,0.3-3.1-0.4-2.7-2.7c0.6-3.2,3.1-5.4,6.4-5.3c3.2,0.1,5.9,2.3,6.2,5.3
      c0.2,1.9-0.5,3.5-2,4.7c-0.5,0.4-1,0.6-1.4,1c-1.2,1-1.1,2.1,0.2,2.9c6.4,4,12.8,8,19.2,12c2,1.2,2.9,3,2.7,5.3
      c-0.3,2.7-2.4,4.4-5.4,4.5C671.8,119.1,665.3,119.1,658.9,119.1z M658.9,114.8c6.3,0,12.5,0,18.8,0c0.5,0,1.1-0.4,1.6-0.7
      c-0.3-0.5-0.6-1.1-1-1.4c-6.1-3.9-12.2-7.6-18.2-11.5c-0.9-0.5-1.4-0.5-2.2,0.1c-1.9,1.3-3.9,2.5-5.9,3.7
      c-4.1,2.6-8.3,5.2-12.4,7.8c-0.4,0.3-0.6,0.9-0.8,1.3c0.4,0.2,0.8,0.5,1.3,0.6c0.4,0.1,0.8,0,1.3,0
      C647.1,114.8,653,114.8,658.9,114.8z"></path>
    </g>
    </g>
    <path d="M121.9,90.9c0.5,2.2-1.9,2.7-3,2.4c-1.1-0.3-3.2-0.3-3.2-0.3s-2.2,0-3.2,0.3c-1.1,0.3-3.5-0.2-3-2.4
    c0.5-2.2,2.6-2.1,3.2-5.1c0.6-3,3-2.8,3-2.8s2.4-0.2,3,2.8C119.3,88.8,121.4,88.7,121.9,90.9z M117.9,82.8c1.3,0.4,2.7-0.7,3.2-2.3
    c0.5-1.6-0.2-3.3-1.5-3.7c-1.3-0.4-2.7,0.7-3.2,2.3C115.9,80.8,116.6,82.4,117.9,82.8z M123.3,82.2c-1.3-0.5-2.8,0.4-3.4,1.9
    c-0.7,1.6-0.2,3.3,1.1,3.8c1.3,0.5,2.8-0.4,3.4-1.9C125.1,84.4,124.6,82.7,123.3,82.2z M113.5,82.8c1.3-0.4,2-2,1.5-3.7
    c-0.5-1.6-1.9-2.7-3.2-2.3c-1.3,0.4-2,2-1.5,3.7C110.7,82.1,112.2,83.2,113.5,82.8z M110.4,87.9c1.3-0.5,1.8-2.2,1.1-3.8
    c-0.6-1.6-2.2-2.5-3.4-1.9c-1.3,0.5-1.7,2.2-1.1,3.8C107.6,87.6,109.2,88.4,110.4,87.9z" fill="#d6d6d6"></path>
    <path d="M121.9,123.9c0.5,2.2-1.9,2.7-3,2.4c-1.1-0.3-3.2-0.3-3.2-0.3s-2.2,0-3.2,0.3c-1.1,0.3-3.5-0.2-3-2.4
      c0.5-2.2,2.6-2.1,3.2-5.1c0.6-3,3-2.8,3-2.8s2.4-0.2,3,2.8C119.3,121.8,121.4,121.7,121.9,123.9z M117.9,115.8
      c1.3,0.4,2.7-0.7,3.2-2.3c0.5-1.6-0.2-3.3-1.5-3.7c-1.3-0.4-2.7,0.7-3.2,2.3C115.9,113.8,116.6,115.4,117.9,115.8z M123.3,115.2
      c-1.3-0.5-2.8,0.4-3.4,1.9c-0.7,1.6-0.2,3.3,1.1,3.8c1.3,0.5,2.8-0.4,3.4-1.9C125.1,117.4,124.6,115.7,123.3,115.2z M113.5,115.8
      c1.3-0.4,2-2,1.5-3.7c-0.5-1.6-1.9-2.7-3.2-2.3c-1.3,0.4-2,2-1.5,3.7C110.7,115.1,112.2,116.2,113.5,115.8z M110.4,120.9
      c1.3-0.5,1.8-2.2,1.1-3.8c-0.6-1.6-2.2-2.5-3.4-1.9c-1.3,0.5-1.7,2.2-1.1,3.8C107.6,120.6,109.2,121.4,110.4,120.9z" fill="#d6d6d6"></path>
    <path d="M121.9,191.9c0.5,2.2-1.9,2.7-3,2.4c-1.1-0.3-3.2-0.3-3.2-0.3s-2.2,0-3.2,0.3c-1.1,0.3-3.5-0.2-3-2.4
      c0.5-2.2,2.6-2.1,3.2-5.1c0.6-3,3-2.8,3-2.8s2.4-0.2,3,2.8C119.3,189.8,121.4,189.7,121.9,191.9z M117.9,183.8
      c1.3,0.4,2.7-0.7,3.2-2.3c0.5-1.6-0.2-3.3-1.5-3.7c-1.3-0.4-2.7,0.7-3.2,2.3C115.9,181.8,116.6,183.4,117.9,183.8z M123.3,183.2
      c-1.3-0.5-2.8,0.4-3.4,1.9c-0.7,1.6-0.2,3.3,1.1,3.8c1.3,0.5,2.8-0.4,3.4-1.9C125.1,185.4,124.6,183.7,123.3,183.2z M113.5,183.8
      c1.3-0.4,2-2,1.5-3.7c-0.5-1.6-1.9-2.7-3.2-2.3c-1.3,0.4-2,2-1.5,3.7C110.7,183.1,112.2,184.2,113.5,183.8z M110.4,188.9
      c1.3-0.5,1.8-2.2,1.1-3.8c-0.6-1.6-2.2-2.5-3.4-1.9c-1.3,0.5-1.7,2.2-1.1,3.8C107.6,188.6,109.2,189.4,110.4,188.9z" fill="#d6d6d6"></path>
    <path d="M121.9,224.9c0.5,2.2-1.9,2.7-3,2.4c-1.1-0.3-3.2-0.3-3.2-0.3s-2.2,0-3.2,0.3c-1.1,0.3-3.5-0.2-3-2.4
      c0.5-2.2,2.6-2.1,3.2-5.1c0.6-3,3-2.8,3-2.8s2.4-0.2,3,2.8C119.3,222.8,121.4,222.7,121.9,224.9z M117.9,216.8
      c1.3,0.4,2.7-0.7,3.2-2.3c0.5-1.6-0.2-3.3-1.5-3.7c-1.3-0.4-2.7,0.7-3.2,2.3C115.9,214.8,116.6,216.4,117.9,216.8z M123.3,216.2
      c-1.3-0.5-2.8,0.4-3.4,1.9c-0.7,1.6-0.2,3.3,1.1,3.8c1.3,0.5,2.8-0.4,3.4-1.9C125.1,218.4,124.6,216.7,123.3,216.2z M113.5,216.8
      c1.3-0.4,2-2,1.5-3.7c-0.5-1.6-1.9-2.7-3.2-2.3c-1.3,0.4-2,2-1.5,3.7C110.7,216.1,112.2,217.2,113.5,216.8z M110.4,221.9
      c1.3-0.5,1.8-2.2,1.1-3.8c-0.6-1.6-2.2-2.5-3.4-1.9c-1.3,0.5-1.7,2.2-1.1,3.8C107.6,221.6,109.2,222.4,110.4,221.9z" fill="#d6d6d6"></path>
    </svg>
  );
}
