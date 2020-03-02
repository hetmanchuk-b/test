import React from 'react';

export default props => {
    const {handleEndHover, handleHover, handleClick, availableSeats, selectedSeats} = props;

    return (
        <svg pointerEvents="bounding-box" version="1.1" id="Layer_1" xmlnssvg="http://www.w3.org/2000/svg"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1140 306.8" style={{enableBackground: "new 0 0 1140 306.8"}} xmlSpace="preserve">
            <path d="M-145.5,176.6"></path>
            <path className="fill-lightgray" d="M781.7,129.8c-7.4,0-13.3-6-13.3-13.3V72.7H795v43.7C795,123.8,789,129.8,781.7,129.8 M781.7,130.8L781.7,130.8
      c7.9,0,14.4-6.4,14.4-14.4V71.7h-28.7v44.7C767.3,124.4,773.7,130.8,781.7,130.8L781.7,130.8z"></path>
            <path className="fill-lightgray" d="M768.3,233.9v-43.7c0-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3v43.7H768.3 M767.3,234.9H796v-44.7
      c0-7.9-6.4-14.4-14.4-14.4l0,0c-7.9,0-14.4,6.4-14.4,14.4V234.9L767.3,234.9z"></path>
            <path className="fill-lightgray" d="M496.3,129.8c-7.4,0-13.3-6-13.3-13.3V72.7h26.7v43.7C509.6,123.8,503.6,129.8,496.3,129.8 M496.3,130.8
      L496.3,130.8c7.9,0,14.4-6.4,14.4-14.4V71.7h-28.7v44.7C481.9,124.4,488.3,130.8,496.3,130.8L496.3,130.8z"></path>
            <path className="fill-lightgray" d="M482.9,233.9v-43.7c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3v43.7H482.9 M481.9,234.9h28.7v-44.7
      c0-7.9-6.4-14.4-14.4-14.4h0c-7.9,0-14.4,6.4-14.4,14.4V234.9L481.9,234.9z"></path>
            <path className="fill-lightgray" d="M1024.8,233.9c-3.3,0-5.9-2.6-5.9-5.9v-45.5c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9V228
      c0,3.3-2.6,5.9-5.9,5.9H1024.8 M1024.8,234.9h45.5c3.8,0,6.9-3.1,6.9-6.9v-45.5c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
      V228C1017.9,231.8,1021,234.9,1024.8,234.9L1024.8,234.9z"></path>
            <polyline className="t60-arrow" points="404.7,218.9 389.1,234.4 373.6,218.9 "></polyline>
            <polyline className="t60-arrow" points="404.7,87.8 389.1,72.2 373.6,87.8 "></polyline>
            <polyline className="t60-arrow" points="369.1,137.7 353.6,153.3 369.1,168.9 "></polyline>
            <polyline className="t60-arrow" points="1125,168.6 1140.2,153.3 1125,138.1 "></polyline>
            <path className="fill-darkgray" d="M1058.2,212.8c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
      c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
      c0.2,0.2,0.3,0.5,0.4,0.9C1058.2,204.6,1058.2,208.7,1058.2,212.8z"></path>
            <path className="fill-darkgray" d="M1036.8,200.5c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
      c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
      C1036.8,208.7,1036.8,204.6,1036.8,200.5z"></path>
            <path className="fill-darkgray" d="M1053.4,214.9c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
      c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0c0.6,0,1.1,0.2,1.5,0.7
      c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1c0.1,0,0.2,0.1,0.2,0.2
      c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C1053.4,214.7,1053.4,214.8,1053.4,214.9z M1050.7,198.2c0-0.4-0.1-0.7-0.1-1.1
      c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
      C1046.5,198,1048.6,198,1050.7,198.2z"></path>
            <path className="fill-lightgray" d="M1007.4,123.1c0-2.6,0-5.3,0-7.9c0-1.7,1.3-3,3-3c5.3,0,10.6,0,15.8,0c1.7,0,3,1.3,3,3c0,3.7,0,7.4,0,11
      c0,1.6,0,3.1,0,4.7c0,1.8-1.3,3.1-3.1,3.1c-1.8,0-3.7,0-5.5,0c-3.4,0-6.8,0-10.2,0c-1.4,0-2.6-0.9-2.9-2.3c0-0.2-0.1-0.4-0.1-0.6
      c0-1.6,0-3.2,0-4.7C1007.4,125.2,1007.4,124.2,1007.4,123.1C1007.4,123.1,1007.4,123.1,1007.4,123.1z M1028.3,123.1
      C1028.2,123.1,1028.2,123.1,1028.3,123.1c0-2.6,0-5.2,0-7.8c0-1.2-0.9-2.2-2.2-2.2c-5.2,0-10.4,0-15.6,0c-1.3,0-2.2,0.9-2.2,2.2
      c0,3.5,0,7,0,10.5c0,1.7,0,3.5,0,5.2c0,1.3,0.9,2.1,2.2,2.1c4.2,0,8.3,0,12.5,0c1.1,0,2.1,0,3.2,0c1.2,0,2.1-0.9,2.1-2.1
      c0-1.2,0-2.4,0-3.6C1028.3,125.9,1028.3,124.5,1028.3,123.1z"></path>
            <path className="fill-darkgray" d="M1011.5,123.1c0-3.7,3-6.7,6.6-6.7c3.7-0.1,6.8,2.9,6.8,6.6c0.1,3.8-2.9,6.8-6.6,6.9
      C1014.8,129.9,1011.6,127,1011.5,123.1z M1018.8,128.8c2.5-0.1,5.2-2.2,5.3-5.6c0.1-3.4-2.6-5.8-5.3-5.9c0,0,0,0.1,0,0.1
      c0,0.3,0,0.7,0,1c0,0.3-0.2,0.4-0.4,0.5c-0.3,0-0.5-0.2-0.5-0.4c0-0.1,0-0.2,0-0.4c0-0.3,0-0.5,0-0.8c-1.3,0-3.5,0.8-4.6,2.9
      c-1.1,2.1-1,4.2,0.3,6.1c1,1.5,2.5,2.3,4.3,2.5c0-0.4,0-0.8,0-1.1c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5
      C1018.8,128.1,1018.8,128.5,1018.8,128.8z"></path>
            <path className="fill-darkgray"
                  d="M1015.3,124.1c-0.6,0-1.1-0.5-1-1c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1.1C1016.4,123.7,1015.9,124.1,1015.3,124.1z"></path>
            <path className="fill-darkgray"
                  d="M1022.3,123.1c0,0.6-0.5,1-1,1c-0.6,0-1-0.4-1.1-1c0-0.6,0.4-1,1-1C1021.8,122,1022.3,122.5,1022.3,123.1z"></path>
            <g id="zwquE5_1_">
                <g>
                    <path className="fill-darkgray" d="M597.8,222.2c-6.5,0-12.9,0-19.4,0c-3.8,0-6.3-3-5.2-6.6c0.4-1.2,1.5-2.4,2.6-3.1c6.1-4,12.4-7.9,18.6-11.8
          c0.8-0.5,1.4-1,1.2-2.1c-0.2-1.9,0.5-3.3,2.2-4.1c0.2-0.1,0.3-0.2,0.5-0.4c0.9-0.5,1.8-1.3,1.2-2.2c-0.4-0.6-1.5-1-2.3-1.1
          c-1.1-0.1-1.8,0.6-2,1.8c-0.1,0.9,0.1,1.9-1.3,2.1c-2.4,0.3-3.1-0.4-2.7-2.7c0.6-3.2,3.1-5.4,6.4-5.3c3.2,0.1,5.9,2.3,6.2,5.3
          c0.2,1.9-0.5,3.5-2,4.7c-0.5,0.4-1,0.6-1.4,1c-1.2,1-1.1,2.1,0.2,2.9c6.4,4,12.8,8,19.2,12c2,1.2,2.9,3,2.7,5.3
          c-0.3,2.7-2.4,4.4-5.4,4.5C610.7,222.2,604.2,222.2,597.8,222.2z M597.8,217.9c6.3,0,12.5,0,18.8,0c0.5,0,1.1-0.4,1.6-0.7
          c-0.3-0.5-0.6-1.1-1-1.4c-6.1-3.9-12.2-7.6-18.2-11.5c-0.9-0.5-1.4-0.5-2.2,0.1c-1.9,1.3-3.9,2.5-5.9,3.7
          c-4.1,2.6-8.3,5.2-12.4,7.8c-0.4,0.3-0.6,0.9-0.8,1.3c0.4,0.2,0.8,0.5,1.3,0.6c0.4,0.1,0.8,0,1.3,0
          C586,217.9,591.9,217.9,597.8,217.9z"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('35') ?
                    (selectedSeats.includes('35') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('35')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('35')}>
                    <path d="M590.7,72.3L590.7,72.3c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.7
      C589.3,72.9,589.9,72.3,590.7,72.3z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 564.691 92.9579)" className="train-seat__text">35</text>
                    <path d="M565.9,100.9c-2.9,0-5.2-2.4-5.2-5.2V78.1c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H565.9 M565.9,101.4h20.2c1.7,0,3.1-1.4,3.1-3.1V75.5c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C560.1,98.8,562.7,101.4,565.9,101.4L565.9,101.4z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('33') ?
                    (selectedSeats.includes('33') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('33')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('33')}>
                    <path d="M631.2,72.3L631.2,72.3c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.7
      C629.7,72.9,630.4,72.3,631.2,72.3z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 605.1764 92.9579)" className="train-seat__text">33</text>
                    <path d="M606.4,100.9c-2.9,0-5.2-2.4-5.2-5.2V78.1c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H606.4 M606.4,101.4h20.2c1.7,0,3.1-1.4,3.1-3.1V75.5c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C600.6,98.8,603.2,101.4,606.4,101.4L606.4,101.4z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('36') ?
                    (selectedSeats.includes('36') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('36')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('36')}>
                    <path d="M590.7,105.2L590.7,105.2c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C589.3,105.8,589.9,105.2,590.7,105.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 564.6832 125.8573)" className="train-seat__text">36</text>
                    <path d="M565.9,133.8c-2.9,0-5.2-2.4-5.2-5.2V111c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H565.9 M565.9,134.3h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C560.1,131.7,562.7,134.3,565.9,134.3L565.9,134.3z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('34') ?
                    (selectedSeats.includes('34') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('34')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('34')}>
                    <path d="M631.2,105.2L631.2,105.2c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C629.7,105.8,630.4,105.2,631.2,105.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 605.1764 125.8514)" className="train-seat__text">34</text>
                    <path d="M606.4,133.8c-2.9,0-5.2-2.4-5.2-5.2V111c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H606.4 M606.4,134.3h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C600.6,131.7,603.2,134.3,606.4,134.3L606.4,134.3z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('21') ?
                    (selectedSeats.includes('21') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('21')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('21')}>
                    <path d="M838.3,71.7L838.3,71.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.2
      C836.8,72.4,837.5,71.7,838.3,71.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 813.1375 91.8621)" className="train-seat__text">21</text>
                    <path d="M813.4,100.3c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H813.4 M813.4,100.8h20.2c1.7,0,3.1-1.4,3.1-3.1V74.9c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C807.7,98.3,810.3,100.8,813.4,100.8L813.4,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('15') ?
                    (selectedSeats.includes('15') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('15')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('15')}>
                    <path d="M878.7,71.7L878.7,71.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.2
      C877.3,72.4,877.9,71.7,878.7,71.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 853.6228 91.8621)" className="train-seat__text">15</text>
                    <path d="M853.9,100.3c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H853.9 M853.9,100.8h20.2c1.7,0,3.1-1.4,3.1-3.1V74.9c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C848.2,98.3,850.8,100.8,853.9,100.8L853.9,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('11') ?
                    (selectedSeats.includes('11') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('11')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('11')}>
                    <path d="M919.2,71.7L919.2,71.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.2
      C917.8,72.4,918.4,71.7,919.2,71.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 895.4138 91.8619)" className="train-seat__text">11</text>
                    <path d="M894.4,100.3c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H894.4 M894.4,100.8h20.2c1.7,0,3.1-1.4,3.1-3.1V74.9c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C888.7,98.3,891.2,100.8,894.4,100.8L894.4,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('7') ?
                    (selectedSeats.includes('7') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('7')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('7')}>
                    <path d="M959.7,71.7L959.7,71.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.2
      C958.3,72.4,958.9,71.7,959.7,71.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 934.5935 91.8619)" className="train-seat__text">07</text>
                    <path d="M934.9,100.3c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H934.9 M934.9,100.8h20.2c1.7,0,3.1-1.4,3.1-3.1V74.9c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C929.1,98.3,931.7,100.8,934.9,100.8L934.9,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('3') ?
                    (selectedSeats.includes('3') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('3')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('3')}>
                    <path d="M1000.2,71.7L1000.2,71.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.2
      C998.8,72.4,999.4,71.7,1000.2,71.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 975.0789 91.8618)" className="train-seat__text">03</text>
                    <path d="M975.4,100.3c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H975.4 M975.4,100.8h20.2c1.7,0,3.1-1.4,3.1-3.1V74.9c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C969.6,98.3,972.2,100.8,975.4,100.8L975.4,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('22') ?
                    (selectedSeats.includes('22') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('22')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('22')}>
                    <path d="M838.3,104.6L838.3,104.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C836.8,105.3,837.5,104.6,838.3,104.6z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 813.1375 124.7556)" className="train-seat__text">22</text>
                    <path d="M813.4,133.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H813.4 M813.4,133.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      V128C807.7,131.1,810.3,133.7,813.4,133.7L813.4,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('16') ?
                    (selectedSeats.includes('16') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('16')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('16')}>
                    <path d="M878.7,104.6L878.7,104.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C877.3,105.3,877.9,104.6,878.7,104.6z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 853.6228 124.7556)" className="train-seat__text">16</text>
                    <path d="M853.9,133.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H853.9 M853.9,133.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      V128C848.2,131.1,850.8,133.7,853.9,133.7L853.9,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('12') ?
                    (selectedSeats.includes('12') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('12')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('12')}>
                    <path d="M919.2,104.6L919.2,104.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C917.8,105.3,918.4,104.6,919.2,104.6z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 894.1082 124.7555)" className="train-seat__text">12</text>
                    <path d="M894.4,133.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H894.4 M894.4,133.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      V128C888.7,131.1,891.2,133.7,894.4,133.7L894.4,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('8') ?
                    (selectedSeats.includes('8') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('8')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('8')}>
                    <path d="M959.7,104.6L959.7,104.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C958.3,105.3,958.9,104.6,959.7,104.6z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 934.5935 124.7555)" className="train-seat__text">08</text>
                    <path d="M934.9,133.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H934.9 M934.9,133.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      V128C929.1,131.1,931.7,133.7,934.9,133.7L934.9,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('4') ?
                    (selectedSeats.includes('4') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('4')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('4')}>
                    <path d="M1000.2,104.6L1000.2,104.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C998.8,105.3,999.4,104.6,1000.2,104.6z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 975.0789 124.7554)" className="train-seat__text">04</text>
                    <path d="M975.4,133.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H975.4 M975.4,133.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      V128C969.6,131.1,972.2,133.7,975.4,133.7L975.4,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('18') ?
                    (selectedSeats.includes('18') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('18')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('18')}>
                    <path d="M838.3,173L838.3,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C836.8,173.6,837.5,173,838.3,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 813.3885 193.0735)" className="train-seat__text">18</text>
                    <path d="M813.4,201.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H813.4 M813.4,202h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C807.7,199.5,810.3,202,813.4,202L813.4,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('14') ?
                    (selectedSeats.includes('14') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('14')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('14')}>
                    <path d="M878.7,173L878.7,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C877.3,173.6,877.9,173,878.7,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 853.8739 193.0734)" className="train-seat__text">14</text>
                    <path d="M853.9,201.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H853.9 M853.9,202h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C848.2,199.5,850.8,202,853.9,202L853.9,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('10') ?
                    (selectedSeats.includes('10') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('10')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('10')}>
                    <path d="M919.2,173L919.2,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C917.8,173.6,918.4,173,919.2,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 894.1093 193.0732)" className="train-seat__text">10</text>
                    <path d="M894.4,201.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H894.4 M894.4,202h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C888.7,199.5,891.2,202,894.4,202L894.4,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('6') ?
                    (selectedSeats.includes('6') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('6')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('6')}>
                    <path d="M959.7,173L959.7,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C958.3,173.6,958.9,173,959.7,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 934.5946 193.0732)" className="train-seat__text">06</text>
                    <path d="M934.9,201.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H934.9 M934.9,202h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C929.1,199.5,931.7,202,934.9,202L934.9,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('2') ?
                    (selectedSeats.includes('2') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('2')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('2')}>
                    <path d="M1000.2,173L1000.2,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C998.8,173.6,999.4,173,1000.2,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 975.079 193.0731)" className="train-seat__text">02</text>
                    <path d="M975.4,201.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H975.4 M975.4,202h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C969.6,199.5,972.2,202,975.4,202L975.4,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('17') ?
                    (selectedSeats.includes('17') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('17')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('17')}>
                    <path d="M838.3,205.9L838.3,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C836.8,206.5,837.5,205.9,838.3,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 813.3886 225.967)" className="train-seat__text">17</text>
                    <path d="M813.4,234.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H813.4 M813.4,234.9h20.2c1.7,0,3.1-1.4,3.1-3.1V209c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C807.7,232.4,810.3,234.9,813.4,234.9L813.4,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('13') ?
                    (selectedSeats.includes('13') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('13')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('13')}>
                    <path d="M878.7,205.9L878.7,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C877.3,206.5,877.9,205.9,878.7,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 853.874 225.9669)" className="train-seat__text">13</text>
                    <path d="M853.9,234.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H853.9 M853.9,234.9h20.2c1.7,0,3.1-1.4,3.1-3.1V209c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C848.2,232.4,850.8,234.9,853.9,234.9L853.9,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('9') ?
                    (selectedSeats.includes('9') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('9')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('9')}>
                    <path d="M919.2,205.9L919.2,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C917.8,206.5,918.4,205.9,919.2,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 894.1093 225.9668)" className="train-seat__text">09</text>
                    <path d="M894.4,234.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H894.4 M894.4,234.9h20.2c1.7,0,3.1-1.4,3.1-3.1V209c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C888.7,232.4,891.2,234.9,894.4,234.9L894.4,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('5') ?
                    (selectedSeats.includes('5') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('5')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('5')}>
                    <path d="M959.7,205.9L959.7,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C958.3,206.5,958.9,205.9,959.7,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 934.5947 225.9668)" className="train-seat__text">05</text>
                    <path d="M934.9,234.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H934.9 M934.9,234.9h20.2c1.7,0,3.1-1.4,3.1-3.1V209c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C929.1,232.4,931.7,234.9,934.9,234.9L934.9,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('1') ?
                    (selectedSeats.includes('1') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('1')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('1')}>
                    <path d="M1000.2,205.9L1000.2,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C998.8,206.5,999.4,205.9,1000.2,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 975.079 225.9667)" className="train-seat__text">01</text>
                    <path d="M975.4,234.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
      c0,1.4-1.2,2.6-2.6,2.6H975.4 M975.4,234.9h20.2c1.7,0,3.1-1.4,3.1-3.1V209c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
      v17.5C969.6,232.4,972.2,234.9,975.4,234.9L975.4,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('31') ?
                    (selectedSeats.includes('31') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('31')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('31')}>
                    <path d="M645.6,100.8L645.6,100.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C647.1,100.2,646.4,100.8,645.6,100.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 652.4771 92.8563)" className="train-seat__text">31</text>
                    <path d="M650.2,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V95
      c0,2.9-2.4,5.2-5.2,5.2H650.2 M650.2,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C647.1,99.4,648.5,100.8,650.2,100.8L650.2,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('27') ?
                    (selectedSeats.includes('27') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('27')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('27')}>
                    <path d="M686.1,100.8L686.1,100.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C687.6,100.2,686.9,100.8,686.1,100.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 692.9625 92.8562)" className="train-seat__text">27</text>
                    <path d="M690.7,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V95
      c0,2.9-2.4,5.2-5.2,5.2H690.7 M690.7,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C687.6,99.4,689,100.8,690.7,100.8L690.7,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('23') ?
                    (selectedSeats.includes('23') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('23')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('23')}>
                    <path d="M726.6,100.8L726.6,100.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C728.1,100.2,727.4,100.8,726.6,100.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 733.4468 92.8562)" className="train-seat__text">23</text>
                    <path d="M731.2,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V95
      c0,2.9-2.4,5.2-5.2,5.2H731.2 M731.2,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C728.1,99.4,729.5,100.8,731.2,100.8L731.2,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('32') ?
                    (selectedSeats.includes('32') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('32')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('32')}>
                    <path d="M645.6,133.7L645.6,133.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C647.1,133.1,646.4,133.7,645.6,133.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 652.4772 125.7499)" className="train-seat__text">32</text>
                    <path d="M650.2,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H650.2 M650.2,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C647.1,132.3,648.5,133.7,650.2,133.7L650.2,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('28') ?
                    (selectedSeats.includes('28') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('28')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('28')}>
                    <path d="M686.1,133.7L686.1,133.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C687.6,133.1,686.9,133.7,686.1,133.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 692.9625 125.7498)" className="train-seat__text">28</text>
                    <path d="M690.7,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H690.7 M690.7,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C687.6,132.3,689,133.7,690.7,133.7L690.7,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('24') ?
                    (selectedSeats.includes('24') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('24')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('24')}>
                    <path d="M726.6,133.7L726.6,133.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C728.1,133.1,727.4,133.7,726.6,133.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 733.4469 125.7498)" className="train-seat__text">24</text>
                    <path d="M731.2,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H731.2 M731.2,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C728.1,132.3,729.5,133.7,731.2,133.7L731.2,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('30') ?
                    (selectedSeats.includes('30') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('30')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('30')}>
                    <path d="M645.6,202L645.6,202c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C647.1,201.4,646.4,202,645.6,202z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 652.7272 193.067)" className="train-seat__text">30</text>
                    <path d="M650.2,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H650.2 M650.2,202h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C647.1,200.6,648.5,202,650.2,202L650.2,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('26') ?
                    (selectedSeats.includes('26') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('26')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('26')}>
                    <path d="M686.1,202L686.1,202c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C687.6,201.4,686.9,202,686.1,202z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 693.2059 193.0728)" className="train-seat__text">26</text>
                    <path d="M690.7,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H690.7 M690.7,202h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C687.6,200.6,689,202,690.7,202L690.7,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('20') ?
                    (selectedSeats.includes('20') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('20')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('20')}>
                    <path d="M726.6,202L726.6,202c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C728.1,201.4,727.4,202,726.6,202z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 732.9032 193.0735)" className="train-seat__text">20</text>
                    <path d="M731.2,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H731.2 M731.2,202h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C728.1,200.6,729.5,202,731.2,202L731.2,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('29') ?
                    (selectedSeats.includes('29') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('29')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('29')}>
                    <path d="M645.6,234.9L645.6,234.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C647.1,234.3,646.4,234.9,645.6,234.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 652.7206 225.9664)" className="train-seat__text">29</text>
                    <path d="M650.2,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H650.2 M650.2,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C647.1,233.5,648.5,234.9,650.2,234.9L650.2,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('25') ?
                    (selectedSeats.includes('25') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('25')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('25')}>
                    <path d="M686.1,234.9L686.1,234.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C687.6,234.3,686.9,234.9,686.1,234.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 693.206 225.9663)" className="train-seat__text">25</text>
                    <path d="M690.7,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H690.7 M690.7,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C687.6,233.5,689,234.9,690.7,234.9L690.7,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('19') ?
                    (selectedSeats.includes('19') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('19')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('19')}>
                    <path d="M726.6,234.9L726.6,234.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C728.1,234.3,727.4,234.9,726.6,234.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 732.9033 225.967)" className="train-seat__text">19</text>
                    <path d="M731.2,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H731.2 M731.2,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C728.1,233.5,729.5,234.9,731.2,234.9L731.2,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('43') ?
                    (selectedSeats.includes('43') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('43')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('43')}>
                    <path d="M441.7,100.8L441.7,100.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C443.1,100.2,442.5,100.8,441.7,100.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 448.4732 91.8591)" className="train-seat__text">43</text>
                    <path d="M446.2,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V95
      c0,2.9-2.4,5.2-5.2,5.2H446.2 M446.2,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C443.1,99.4,444.5,100.8,446.2,100.8L446.2,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('44') ?
                    (selectedSeats.includes('44') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('44')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('44')}>
                    <path d="M441.7,133.7L441.7,133.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C443.1,133.1,442.5,133.7,441.7,133.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 448.4732 124.7527)" className="train-seat__text">44</text>
                    <path d="M446.2,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H446.2 M446.2,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C443.1,132.3,444.5,133.7,446.2,133.7L446.2,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('40') ?
                    (selectedSeats.includes('40') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('40')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('40')}>
                    <path d="M441.7,202L441.7,202c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C443.1,201.4,442.5,202,441.7,202z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 448.473 194.0719)" className="train-seat__text">40</text>
                    <path d="M446.2,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H446.2 M446.2,202h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C443.1,200.6,444.5,202,446.2,202L446.2,202z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('39') ?
                    (selectedSeats.includes('39') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('39')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('39')}>
                    <path d="M441.7,234.9L441.7,234.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C443.1,234.3,442.5,234.9,441.7,234.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 448.4731 226.9655)" className="train-seat__text">39</text>
                    <path d="M446.2,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
      c0,2.9-2.4,5.2-5.2,5.2H446.2 M446.2,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
      v22.8C443.1,233.5,444.5,234.9,446.2,234.9L446.2,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('49') ?
                    (selectedSeats.includes('49') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('49')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('49')}>
                    <path d="M236.4,100.8L236.4,100.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
      C237.8,100.2,237.2,100.8,236.4,100.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 242.1811 91.8591)" className="train-seat__text">49</text>
                    <path d="M241,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V95
      c0,2.9-2.4,5.2-5.2,5.2H241 M241,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.5c0-3.2-2.6-5.8-5.8-5.8H241c-1.7,0-3.1,1.4-3.1,3.1v22.8
      C237.8,99.4,239.2,100.8,241,100.8L241,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('51') ?
                    (selectedSeats.includes('51') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('51')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('51')}>
                    <path d="M335.3,206.4L335.3,206.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C333.8,207,334.5,206.4,335.3,206.4z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 309.7643 227.0643)" className="train-seat__text">51</text>
                    <path d="M330.7,207c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H330.7 M330.7,206.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C333.8,207.8,332.4,206.4,330.7,206.4L330.7,206.4z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('52') ?
                    (selectedSeats.includes('52') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('52')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('52')}>
                    <path d="M335.3,173.5L335.3,173.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C333.8,174.2,334.5,173.5,335.3,173.5z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 309.7643 194.1708)" className="train-seat__text">52</text>
                    <path d="M330.7,174.1c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H330.7 M330.7,173.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C333.8,174.9,332.4,173.6,330.7,173.6L330.7,173.6z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('45') ?
                    (selectedSeats.includes('45') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('45')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('45')}>
                    <path d="M283.2,206.4L283.2,206.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C281.8,207,282.4,206.4,283.2,206.4z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 257.7212 227.0643)" className="train-seat__text">45</text>
                    <path d="M278.7,207c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H278.7 M278.7,206.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C281.8,207.8,280.4,206.4,278.7,206.4L278.7,206.4z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('46') ?
                    (selectedSeats.includes('46') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('46')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('46')}>
                    <path d="M283.2,173.5L283.2,173.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C281.8,174.2,282.4,173.5,283.2,173.5z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 257.7212 194.1708)" className="train-seat__text">46</text>
                    <path d="M278.7,174.1c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H278.7 M278.7,173.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C281.8,174.9,280.4,173.6,278.7,173.6L278.7,173.6z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('47') ?
                    (selectedSeats.includes('47') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('47')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('47')}>
                    <path d="M231.2,206.4L231.2,206.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C229.8,207,230.4,206.4,231.2,206.4z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 205.6781 227.0643)" className="train-seat__text">47</text>
                    <path d="M226.6,207c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H226.6 M226.6,206.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C229.7,207.8,228.3,206.4,226.6,206.4L226.6,206.4z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('48') ?
                    (selectedSeats.includes('48') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('48')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('48')}>
                    <path d="M231.2,173.5L231.2,173.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C229.8,174.2,230.4,173.5,231.2,173.5z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 205.6781 194.1708)" className="train-seat__text">48</text>
                    <path d="M226.6,174.1c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H226.6 M226.6,173.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C229.7,174.9,228.3,173.6,226.6,173.6L226.6,173.6z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('37') ?
                    (selectedSeats.includes('37') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('37')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('37')}>
                    <path d="M550.2,205.9L550.2,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C548.8,206.5,549.4,205.9,550.2,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 525.4962 226.968)" className="train-seat__text">37</text>
                    <path d="M545.6,206.4c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H545.6 M545.6,205.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      V209C548.7,207.3,547.3,205.9,545.6,205.9L545.6,205.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('38') ?
                    (selectedSeats.includes('38') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('38')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('38')}>
                    <path d="M550.2,173L550.2,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C548.8,173.6,549.4,173,550.2,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 525.4961 194.0745)" className="train-seat__text">38</text>
                    <path d="M545.6,173.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H545.6 M545.6,173h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C548.7,174.4,547.3,173,545.6,173L545.6,173z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('42') ?
                    (selectedSeats.includes('42') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('42')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('42')}>
                    <path d="M550.2,104.8L550.2,104.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
      C548.8,105.4,549.4,104.8,550.2,104.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 525.4988 125.8657)" className="train-seat__text">42</text>
                    <path d="M545.6,105.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
      c0-2.9,2.4-5.2,5.2-5.2H545.6 M545.6,104.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
      v-22.8C548.7,106.2,547.3,104.8,545.6,104.8L545.6,104.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('41') ?
                    (selectedSeats.includes('41') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('41')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('41')}>
                    <path d="M550.2,71.9L550.2,71.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.3
      C548.8,72.5,549.4,71.9,550.2,71.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 525.498 92.9729)" className="train-seat__text">41</text>
                    <path d="M545.6,72.4c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.7
      c0-2.9,2.4-5.2,5.2-5.2H545.6 M545.6,71.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1V75
      C548.7,73.3,547.3,71.9,545.6,71.9L545.6,71.9z" className="train-seat__border"></path>
                </g>
            </g>
            <polyline className="t60-arrow" points="409.1,168.9 424.7,153.3 409.1,137.7 "></polyline>
            <path className="t79-train-curve" d="M170.3,227.2C75.4,223,1.8,192.6,1.8,155.7s73.6-67.2,168.5-71.5"></path>
        </svg>
    );
}
