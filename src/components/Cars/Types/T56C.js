import React from 'react';

export default props => {
    const {handleEndHover, handleHover, handleClick, availableSeats, selectedSeats} = props;
    return (
        <svg pointerEvents="bounding-box" version="1.1" id="Layer_1" xmlnssvg="http://www.w3.org/2000/svg"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1140 306.8" style={{enableBackground: "new 0 0 1140 306.8"}} xmlSpace="preserve">
            <g>
                <path className="fill-lightgray" d="M788.4,129.8c-7.4,0-13.3-6-13.3-13.3V72.8h26.7v43.7C801.8,123.8,795.8,129.8,788.4,129.8 M788.4,130.8
       L788.4,130.8c7.9,0,14.4-6.4,14.4-14.4V71.8h-28.7v44.7C774.1,124.4,780.5,130.8,788.4,130.8L788.4,130.8z"></path>
                <path className="fill-lightgray" d="M775.1,234v-43.7c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3V234H775.1 M774.1,235h28.7v-44.7
       c0-7.9-6.4-14.4-14.4-14.4l0,0c-7.9,0-14.4,6.4-14.4,14.4V235L774.1,235z"></path>
                <path className="fill-lightgray" d="M298.4,129.8c-7.4,0-13.3-6-13.3-13.3V72.8h26.7v43.7C311.8,123.8,305.8,129.8,298.4,129.8 M298.4,130.8
       L298.4,130.8c7.9,0,14.4-6.4,14.4-14.4V71.8h-28.7v44.7C284.1,124.4,290.5,130.8,298.4,130.8L298.4,130.8z"></path>
                <path className="fill-lightgray" d="M285.1,234v-43.7c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3V234H285.1 M284.1,235h28.7v-44.7
       c0-7.9-6.4-14.4-14.4-14.4h0c-7.9,0-14.4,6.4-14.4,14.4V235L284.1,235z"></path>
                <path className="fill-lightgray" d="M1077,176.7c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9h-45.5c-3.3,0-5.9-2.6-5.9-5.9v-45.5
       c0-3.3,2.6-5.9,5.9-5.9H1077 M1077,175.7h-45.5c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9
       v-45.5C1083.9,178.8,1080.8,175.7,1077,175.7L1077,175.7z"></path>
                <polyline className="t60-arrow" points="32.2,218.9 16.6,234.5 1,218.9  "></polyline>
                <polyline className="t60-arrow" points="32.2,87.9 16.6,72.3 1,87.9   "></polyline>
                <polyline className="t60-arrow" points="16.6,137.8 1,153.4 16.6,169  "></polyline>
                <polyline className="t60-arrow" points="1123.8,168.6 1139,153.4 1123.8,138.1   "></polyline>
                <path className="fill-lightgray" d="M113.1,234c-3.3,0-5.9-2.6-5.9-5.9v-45.5c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
       c0,3.3-2.6,5.9-5.9,5.9H113.1 M113.1,235h45.5c3.8,0,6.9-3.1,6.9-6.9v-45.5c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
       v45.5C106.2,231.9,109.3,235,113.1,235L113.1,235z"></path>
                <text transform="matrix(1 0 0 1 58.8798 212.5428)"
                      className="fill-darkgray svg-helveticabold svg-fontsize">WC
                </text>
                <path className="fill-lightgray" d="M50.9,234c-3.3,0-5.9-2.6-5.9-5.9v-45.5c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
       c0,3.3-2.6,5.9-5.9,5.9H50.9 M50.9,235h45.5c3.8,0,6.9-3.1,6.9-6.9v-45.5c0-3.8-3.1-6.9-6.9-6.9H50.9c-3.8,0-6.9,3.1-6.9,6.9v45.5
       C44,231.9,47.1,235,50.9,235L50.9,235z"></path>
                <text transform="matrix(1 0 0 1 121.0692 212.5428)"
                      className="fill-darkgray svg-helveticabold svg-fontsize">WC
                </text>
                <path className="fill-lightgray" d="M180.7,130.1c-3.3,0-5.9-2.6-5.9-5.9V78.7c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
       c0,3.3-2.6,5.9-5.9,5.9H180.7 M180.7,131.1h45.5c3.8,0,6.9-3.1,6.9-6.9V78.7c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
       v45.5C173.8,128,176.9,131.1,180.7,131.1L180.7,131.1z"></path>
                <g>
                    <path className="fill-darkgray" d="M214.2,108.9c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
         c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
         c0.2,0.2,0.3,0.5,0.4,0.9C214.2,100.8,214.2,104.9,214.2,108.9z"></path>
                    <path className="fill-darkgray" d="M192.7,96.7c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
         c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
         C192.7,104.9,192.7,100.8,192.7,96.7z"></path>
                    <path className="fill-darkgray" d="M209.3,111.1c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
         c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
         c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
         c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C209.3,110.9,209.3,111,209.3,111.1z M206.6,94.3
         c0-0.4-0.1-0.7-0.1-1.1c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
         C202.4,94.1,204.5,94.1,206.6,94.3z"></path>
                </g>
                <g>
                    <path className="fill-darkgray" d="M1065,212.8c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
         c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
         c0.2,0.2,0.3,0.5,0.4,0.9C1065,204.7,1065,208.8,1065,212.8z"></path>
                    <path className="fill-darkgray" d="M1043.5,200.6c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
         c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
         C1043.5,208.8,1043.5,204.7,1043.5,200.6z"></path>
                    <path className="fill-darkgray" d="M1060.2,214.9c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
         c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
         c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
         c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C1060.2,214.8,1060.2,214.9,1060.2,214.9z M1057.5,198.2
         c0-0.4-0.1-0.7-0.1-1.1c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
         C1053.2,198,1055.3,198,1057.5,198.2z"></path>
                </g>
                <g>
                    <path className="fill-lightgray" d="M1014.1,123.1c0-2.6,0-5.3,0-7.9c0-1.7,1.3-3,3-3c5.3,0,10.6,0,15.8,0c1.7,0,3,1.3,3,3c0,3.7,0,7.4,0,11
         c0,1.6,0,3.1,0,4.7c0,1.8-1.3,3.1-3.1,3.1c-1.8,0-3.7,0-5.5,0c-3.4,0-6.8,0-10.2,0c-1.4,0-2.6-0.9-2.9-2.3c0-0.2-0.1-0.4-0.1-0.6
         c0-1.6,0-3.2,0-4.7C1014.1,125.3,1014.1,124.2,1014.1,123.1C1014.1,123.1,1014.1,123.1,1014.1,123.1z M1035,123.1
         C1035,123.1,1035,123.1,1035,123.1c0-2.6,0-5.2,0-7.8c0-1.2-0.9-2.2-2.2-2.2c-5.2,0-10.4,0-15.6,0c-1.3,0-2.2,0.9-2.2,2.2
         c0,3.5,0,7,0,10.5c0,1.7,0,3.5,0,5.2c0,1.3,0.9,2.1,2.2,2.1c4.2,0,8.3,0,12.5,0c1.1,0,2.1,0,3.2,0c1.2,0,2.1-0.9,2.1-2.1
         c0-1.2,0-2.4,0-3.6C1035,126,1035,124.6,1035,123.1z"></path>
                    <path className="fill-darkgray" d="M1018.3,123.1c0-3.7,3-6.7,6.6-6.7c3.7-0.1,6.8,2.9,6.8,6.6c0.1,3.8-2.9,6.8-6.6,6.9
         C1021.6,130,1018.3,127.1,1018.3,123.1z M1025.5,128.9c2.5-0.1,5.2-2.2,5.3-5.6c0.1-3.4-2.6-5.8-5.3-5.9c0,0,0,0.1,0,0.1
         c0,0.3,0,0.7,0,1c0,0.3-0.2,0.4-0.4,0.5c-0.3,0-0.5-0.2-0.5-0.4c0-0.1,0-0.2,0-0.4c0-0.3,0-0.5,0-0.8c-1.3,0-3.5,0.8-4.6,2.9
         c-1.1,2.1-1,4.2,0.3,6.1c1,1.5,2.5,2.3,4.3,2.5c0-0.4,0-0.8,0-1.1c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5
         C1025.5,128.2,1025.5,128.5,1025.5,128.9z"></path>
                    <path className="fill-darkgray" d="M1022.1,124.2c-0.6,0-1.1-0.5-1-1c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1.1C1023.1,123.7,1022.7,124.2,1022.1,124.2
         z"></path>
                    <path className="fill-darkgray"
                          d="M1029,123.1c0,0.6-0.5,1-1,1c-0.6,0-1-0.4-1.1-1c0-0.6,0.4-1,1-1C1028.6,122.1,1029,122.5,1029,123.1z"></path>
                </g>
                <g>
                    <path className="fill-lightgray" d="M173.8,205.9c0-2.6,0-5.3,0-7.9c0-1.7,1.3-3,3-3c5.3,0,10.6,0,15.8,0c1.7,0,3,1.3,3,3c0,3.7,0,7.4,0,11
         c0,1.6,0,3.1,0,4.7c0,1.8-1.3,3.1-3.1,3.1c-1.8,0-3.7,0-5.5,0c-3.4,0-6.8,0-10.2,0c-1.4,0-2.6-0.9-2.9-2.3c0-0.2-0.1-0.4-0.1-0.6
         c0-1.6,0-3.2,0-4.7C173.8,208.1,173.8,207,173.8,205.9C173.8,205.9,173.8,205.9,173.8,205.9z M194.7,205.9
         C194.7,205.9,194.7,205.9,194.7,205.9c0-2.6,0-5.2,0-7.8c0-1.2-0.9-2.2-2.2-2.2c-5.2,0-10.4,0-15.6,0c-1.3,0-2.2,0.9-2.2,2.2
         c0,3.5,0,7,0,10.5c0,1.7,0,3.5,0,5.2c0,1.3,0.9,2.1,2.2,2.1c4.2,0,8.3,0,12.5,0c1.1,0,2.1,0,3.2,0c1.2,0,2.1-0.9,2.1-2.1
         c0-1.2,0-2.4,0-3.6C194.7,208.8,194.7,207.3,194.7,205.9z"></path>
                    <path className="fill-darkgray" d="M178,205.9c0-3.7,3-6.7,6.6-6.7c3.7-0.1,6.8,2.9,6.8,6.6c0.1,3.8-2.9,6.8-6.6,6.9
         C181.2,212.7,178,209.8,178,205.9z M185.2,211.6c2.5-0.1,5.2-2.2,5.3-5.6c0.1-3.4-2.6-5.8-5.3-5.9c0,0,0,0.1,0,0.1
         c0,0.3,0,0.7,0,1c0,0.3-0.2,0.4-0.4,0.5c-0.3,0-0.5-0.2-0.5-0.4c0-0.1,0-0.2,0-0.4c0-0.3,0-0.5,0-0.8c-1.3,0-3.5,0.8-4.6,2.9
         c-1.1,2.1-1,4.2,0.3,6.1c1,1.5,2.5,2.3,4.3,2.5c0-0.4,0-0.8,0-1.1c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5
         C185.2,210.9,185.2,211.3,185.2,211.6z"></path>
                    <path className="fill-darkgray"
                          d="M181.7,206.9c-0.6,0-1.1-0.5-1-1c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1.1C182.8,206.5,182.3,206.9,181.7,206.9z"></path>
                    <path className="fill-darkgray"
                          d="M188.7,205.9c0,0.6-0.5,1-1,1c-0.6,0-1-0.4-1.1-1c0-0.6,0.4-1,1-1C188.2,204.8,188.7,205.3,188.7,205.9z"></path>
                </g>
                <polyline className="t60-arrow" points="1139,218.9 1123.4,234.5 1107.8,218.9   "></polyline>
                <polyline className="t60-arrow" points="1139,87.9 1123.4,72.3 1107.8,87.9  "></polyline>
                <g className={(availableSeats.hasOwnProperty('36') ?
                    (selectedSeats.includes('36') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('36')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('36')}>
                    <path d="M610.7,133.8L610.7,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C612.1,133.1,611.5,133.8,610.7,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 616.7724 125.7952)" className="train-seat__text">36</text>
                    <path d="M635.5,105.2c2.9,0,5.2,2.4,5.2,5.2V128c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H635.5 M635.5,104.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C641.3,107.3,638.7,104.7,635.5,104.7L635.5,104.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('40') ?
                    (selectedSeats.includes('40') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('40')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('40')}>
                    <path d="M570.2,133.8L570.2,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C571.7,133.1,571,133.8,570.2,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 577.287 125.7952)" className="train-seat__text">40</text>
                    <path d="M595,105.2c2.9,0,5.2,2.4,5.2,5.2V128c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H595 M595,104.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H595c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C600.8,107.3,598.2,104.7,595,104.7L595,104.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('44') ?
                    (selectedSeats.includes('44') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('44')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('44')}>
                    <path d="M529.7,133.8L529.7,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C531.2,133.1,530.5,133.8,529.7,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 535.0517 125.7952)" className="train-seat__text">44</text>
                    <path d="M554.5,105.2c2.9,0,5.2,2.4,5.2,5.2V128c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H554.5 M554.5,104.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C560.3,107.3,557.7,104.7,554.5,104.7L554.5,104.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('46') ?
                    (selectedSeats.includes('46') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('46')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('46')}>
                    <path d="M489.2,133.8L489.2,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C490.7,133.1,490,133.8,489.2,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 494.5663 125.7952)" className="train-seat__text">46</text>
                    <path d="M514.1,105.2c2.9,0,5.2,2.4,5.2,5.2V128c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H514.1 M514.1,104.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C519.8,107.3,517.2,104.7,514.1,104.7L514.1,104.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('48') ?
                    (selectedSeats.includes('48') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('48')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('48')}>
                    <path d="M448.8,133.8L448.8,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C450.2,133.1,449.6,133.8,448.8,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 454.082 125.7952)" className="train-seat__text">48</text>
                    <path d="M473.6,105.2c2.9,0,5.2,2.4,5.2,5.2V128c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H473.6 M473.6,104.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C479.3,107.3,476.7,104.7,473.6,104.7L473.6,104.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('35') ?
                    (selectedSeats.includes('35') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('35')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('35')}>
                    <path d="M610.7,100.9L610.7,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C612.1,100.2,611.5,100.9,610.7,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 616.7724 92.9016)" className="train-seat__text">35</text>
                    <path d="M635.5,72.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.9
           c0-1.4,1.2-2.6,2.6-2.6H635.5 M635.5,71.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.6C641.3,74.4,638.7,71.8,635.5,71.8L635.5,71.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('39') ?
                    (selectedSeats.includes('39') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('39')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('39')}>
                    <path d="M570.2,100.9L570.2,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C571.7,100.2,571,100.9,570.2,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 577.287 92.9016)" className="train-seat__text">39</text>
                    <path d="M595,72.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.9
           c0-1.4,1.2-2.6,2.6-2.6H595 M595,71.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H595c3.2,0,5.8-2.6,5.8-5.8V77.6
           C600.8,74.4,598.2,71.8,595,71.8L595,71.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('43') ?
                    (selectedSeats.includes('43') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('43')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('43')}>
                    <path d="M529.7,100.9L529.7,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C531.2,100.2,530.5,100.9,529.7,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 535.0517 92.9016)" className="train-seat__text">43</text>
                    <path d="M554.5,72.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.9
           c0-1.4,1.2-2.6,2.6-2.6H554.5 M554.5,71.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.6C560.3,74.4,557.7,71.8,554.5,71.8L554.5,71.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('45') ?
                    (selectedSeats.includes('45') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('45')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('45')}>
                    <path d="M489.2,100.9L489.2,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C490.7,100.2,490,100.9,489.2,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 494.5663 92.9016)" className="train-seat__text">45</text>
                    <path d="M514.1,72.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.9
           c0-1.4,1.2-2.6,2.6-2.6H514.1 M514.1,71.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.6C519.8,74.4,517.2,71.8,514.1,71.8L514.1,71.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('47') ?
                    (selectedSeats.includes('47') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('47')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('47')}>
                    <path d="M448.8,100.9L448.8,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C450.2,100.2,449.6,100.9,448.8,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 454.082 92.9016)" className="train-seat__text">47</text>
                    <path d="M473.6,72.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.9
           c0-1.4,1.2-2.6,2.6-2.6H473.6 M473.6,71.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.6C479.3,74.4,476.7,71.8,473.6,71.8L473.6,71.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('33') ?
                    (selectedSeats.includes('33') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('33')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('33')}>
                    <path d="M610.7,235L610.7,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C612.1,234.4,611.5,235,610.7,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 617.0223 227.0081)" className="train-seat__text">33</text>
                    <path d="M635.5,206.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V209
           c0-1.4,1.2-2.6,2.6-2.6H635.5 M635.5,205.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C641.3,208.5,638.7,205.9,635.5,205.9L635.5,205.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('37') ?
                    (selectedSeats.includes('37') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('37')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('37')}>
                    <path d="M570.2,235L570.2,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C571.7,234.4,571,235,570.2,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 576.537 227.0081)" className="train-seat__text">37</text>
                    <path d="M595,206.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V209
           c0-1.4,1.2-2.6,2.6-2.6H595 M595,205.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H595c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C600.8,208.5,598.2,205.9,595,205.9L595,205.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('41') ?
                    (selectedSeats.includes('41') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('41')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('41')}>
                    <path d="M529.7,235L529.7,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C531.2,234.4,530.5,235,529.7,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 536.0526 227.0081)" className="train-seat__text">41</text>
                    <path d="M554.5,206.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V209
           c0-1.4,1.2-2.6,2.6-2.6H554.5 M554.5,205.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C560.3,208.5,557.7,205.9,554.5,205.9L554.5,205.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('34') ?
                    (selectedSeats.includes('34') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('34')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('34')}>
                    <path d="M610.7,202.1L610.7,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C612.1,201.5,611.5,202.1,610.7,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 617.0223 194.1145)" className="train-seat__text">34</text>
                    <path d="M635.5,173.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H635.5 M635.5,173h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C641.3,175.6,638.7,173,635.5,173L635.5,173z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('38') ?
                    (selectedSeats.includes('38') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('38')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('38')}>
                    <path d="M570.2,202.1L570.2,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C571.7,201.5,571,202.1,570.2,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 576.537 194.1145)" className="train-seat__text">38</text>
                    <path d="M595,173.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H595 M595,173h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H595c3.2,0,5.8-2.6,5.8-5.8v-17.5
           C600.8,175.6,598.2,173,595,173L595,173z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('42') ?
                    (selectedSeats.includes('42') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('42')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('42')}>
                    <path d="M529.7,202.1L529.7,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C531.2,201.5,530.5,202.1,529.7,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 536.0526 194.1145)" className="train-seat__text">42</text>
                    <path d="M554.5,173.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H554.5 M554.5,173h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C560.3,175.6,557.7,173,554.5,173L554.5,173z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('21') ?
                    (selectedSeats.includes('21') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('21')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('21')}>
                    <path d="M845,71.8L845,71.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.3
               C843.6,72.5,844.2,71.8,845,71.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 819.9257 92.9019)" className="train-seat__text">21</text>
                    <path d="M820.2,100.4c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H820.2 M820.2,100.9h20.2c1.7,0,3.1-1.4,3.1-3.1V75c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
               v17.5C814.5,98.3,817,100.9,820.2,100.9L820.2,100.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('15') ?
                    (selectedSeats.includes('15') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('15')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('15')}>
                    <path d="M885.5,71.8L885.5,71.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.3
               C884.1,72.5,884.7,71.8,885.5,71.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 860.4111 92.9019)" className="train-seat__text">15</text>
                    <path d="M860.7,100.4c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H860.7 M860.7,100.9h20.2c1.7,0,3.1-1.4,3.1-3.1V75c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
               v17.5C855,98.3,857.5,100.9,860.7,100.9L860.7,100.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('11') ?
                    (selectedSeats.includes('11') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('11')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('11')}>
                    <path d="M926,71.8L926,71.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.3
               C924.6,72.5,925.2,71.8,926,71.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 900.8964 92.9019)" className="train-seat__text">11</text>
                    <path d="M901.2,100.4c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H901.2 M901.2,100.9h20.2c1.7,0,3.1-1.4,3.1-3.1V75c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
               v17.5C895.4,98.3,898,100.9,901.2,100.9L901.2,100.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('7') ?
                    (selectedSeats.includes('7') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('7')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('7')}>
                    <path d="M966.5,71.8L966.5,71.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4V73.3
               C965,72.5,965.7,71.8,966.5,71.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 941.3818 92.9019)" className="train-seat__text">07</text>
                    <path d="M941.7,100.4c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H941.7 M941.7,100.9h20.2c1.7,0,3.1-1.4,3.1-3.1V75c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
               v17.5C935.9,98.3,938.5,100.9,941.7,100.9L941.7,100.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('3') ?
                    (selectedSeats.includes('3') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('3')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('3')}>
                    <path d="M1007,71.8L1007,71.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.3
               C1005.5,72.5,1006.2,71.8,1007,71.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 981.8671 92.9019)" className="train-seat__text">03</text>
                    <path d="M982.2,100.4c-2.9,0-5.2-2.4-5.2-5.2V77.6c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H982.2 M982.2,100.9h20.2c1.7,0,3.1-1.4,3.1-3.1V75c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
               v17.5C976.4,98.3,979,100.9,982.2,100.9L982.2,100.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('22') ?
                    (selectedSeats.includes('22') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('22')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('22')}>
                    <path d="M845,104.7L845,104.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C843.6,105.3,844.2,104.7,845,104.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 819.9257 125.7954)" className="train-seat__text">22</text>
                    <path d="M820.2,133.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H820.2 M820.2,133.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8V128C814.5,131.2,817,133.8,820.2,133.8L820.2,133.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('16') ?
                    (selectedSeats.includes('16') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('16')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('16')}>
                    <path d="M885.5,104.7L885.5,104.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C884.1,105.3,884.7,104.7,885.5,104.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 860.4111 125.7954)" className="train-seat__text">16</text>
                    <path d="M860.7,133.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H860.7 M860.7,133.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8V128C855,131.2,857.5,133.8,860.7,133.8L860.7,133.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('12') ?
                    (selectedSeats.includes('12') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('12')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('12')}>
                    <path d="M926,104.7L926,104.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C924.6,105.3,925.2,104.7,926,104.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 900.8964 125.7954)" className="train-seat__text">12</text>
                    <path d="M901.2,133.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H901.2 M901.2,133.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8V128C895.4,131.2,898,133.8,901.2,133.8L901.2,133.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('8') ?
                    (selectedSeats.includes('8') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('8')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('8')}>
                    <path d="M966.5,104.7L966.5,104.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C965,105.3,965.7,104.7,966.5,104.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 941.3818 125.7954)" className="train-seat__text">08</text>
                    <path d="M941.7,133.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H941.7 M941.7,133.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8V128C935.9,131.2,938.5,133.8,941.7,133.8L941.7,133.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('4') ?
                    (selectedSeats.includes('4') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('4')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('4')}>
                    <path d="M1007,104.7L1007,104.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C1005.5,105.3,1006.2,104.7,1007,104.7z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 981.8671 125.7954)" className="train-seat__text">04</text>
                    <path d="M982.2,133.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H982.2 M982.2,133.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8V128C976.4,131.2,979,133.8,982.2,133.8L982.2,133.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('18') ?
                    (selectedSeats.includes('18') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('18')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('18')}>
                    <path d="M845,173L845,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C843.6,173.7,844.2,173,845,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 818.9257 194.1147)" className="train-seat__text">18</text>
                    <path d="M820.2,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
               c0,1.4-1.2,2.6-2.6,2.6H820.2 M820.2,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C814.5,199.5,817,202.1,820.2,202.1L820.2,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('14') ?
                    (selectedSeats.includes('14') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('14')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('14')}>
                    <path d="M885.5,173L885.5,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C884.1,173.7,884.7,173,885.5,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 859.411 194.1147)" className="train-seat__text">14</text>
                    <path d="M860.7,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
               c0,1.4-1.2,2.6-2.6,2.6H860.7 M860.7,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C855,199.5,857.5,202.1,860.7,202.1L860.7,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('10') ?
                    (selectedSeats.includes('10') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('10')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('10')}>
                    <path d="M926,173L926,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C924.6,173.7,925.2,173,926,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 899.8964 194.1147)" className="train-seat__text">10</text>
                    <path d="M901.2,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
               c0,1.4-1.2,2.6-2.6,2.6H901.2 M901.2,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C895.4,199.5,898,202.1,901.2,202.1L901.2,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('6') ?
                    (selectedSeats.includes('6') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('6')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('6')}>
                    <path d="M966.5,173L966.5,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C965,173.7,965.7,173,966.5,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 940.3817 194.1147)" className="train-seat__text">06</text>
                    <path d="M941.7,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
               c0,1.4-1.2,2.6-2.6,2.6H941.7 M941.7,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C935.9,199.5,938.5,202.1,941.7,202.1L941.7,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('2') ?
                    (selectedSeats.includes('2') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('2')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('2')}>
                    <path d="M1007,173L1007,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C1005.5,173.7,1006.2,173,1007,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 980.8671 194.1147)" className="train-seat__text">02</text>
                    <path d="M982.2,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
               c0,1.4-1.2,2.6-2.6,2.6H982.2 M982.2,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C976.4,199.5,979,202.1,982.2,202.1L982.2,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('17') ?
                    (selectedSeats.includes('17') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('17')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('17')}>
                    <path d="M845,205.9L845,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C843.6,206.6,844.2,205.9,845,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 818.9257 227.0083)" className="train-seat__text">17</text>
                    <path d="M820.2,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H820.2 M820.2,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C814.5,232.4,817,235,820.2,235L820.2,235z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('13') ?
                    (selectedSeats.includes('13') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('13')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('13')}>
                    <path d="M885.5,205.9L885.5,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C884.1,206.6,884.7,205.9,885.5,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 859.411 227.0083)" className="train-seat__text">13</text>
                    <path d="M860.7,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H860.7 M860.7,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C855,232.4,857.5,235,860.7,235L860.7,235z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('9') ?
                    (selectedSeats.includes('9') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('9')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('9')}>
                    <path d="M926,205.9L926,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C924.6,206.6,925.2,205.9,926,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 899.8964 227.0083)" className="train-seat__text">09</text>
                    <path d="M901.2,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H901.2 M901.2,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C895.4,232.4,898,235,901.2,235L901.2,235z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('5') ?
                    (selectedSeats.includes('5') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('5')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('5')}>
                    <path d="M966.5,205.9L966.5,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5h0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C965,206.6,965.7,205.9,966.5,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 940.3817 227.0083)" className="train-seat__text">05</text>
                    <path d="M941.7,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H941.7 M941.7,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C935.9,232.4,938.5,235,941.7,235L941.7,235z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('1') ?
                    (selectedSeats.includes('1') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('1')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('1')}>
                    <path d="M1007,205.9L1007,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
               C1005.5,206.6,1006.2,205.9,1007,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 980.8671 227.0083)" className="train-seat__text">01</text>
                    <path d="M982.2,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
               c0,1.4-1.2,2.6-2.6,2.6H982.2 M982.2,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
               c-3.2,0-5.8,2.6-5.8,5.8v17.5C976.4,232.4,979,235,982.2,235L982.2,235z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('31') ?
                    (selectedSeats.includes('31') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('31')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('31')}>
                    <path d="M652.4,100.9L652.4,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C653.9,100.2,653.2,100.9,652.4,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 658.2578 92.9016)" className="train-seat__text">31</text>
                    <path d="M657,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H657 M657,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.6c0-3.2-2.6-5.8-5.8-5.8H657c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C653.9,99.4,655.3,100.8,657,100.8L657,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('27') ?
                    (selectedSeats.includes('27') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('27')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('27')}>
                    <path d="M692.9,100.9L692.9,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C694.4,100.2,693.7,100.9,692.9,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 698.7431 92.9016)" className="train-seat__text">27</text>
                    <path d="M697.5,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H697.5 M697.5,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.6c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
           v22.8C694.4,99.4,695.8,100.8,697.5,100.8L697.5,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('23') ?
                    (selectedSeats.includes('23') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('23')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('23')}>
                    <path d="M733.4,100.9L733.4,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C734.8,100.2,734.2,100.9,733.4,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 739.2285 92.9016)" className="train-seat__text">23</text>
                    <path d="M738,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H738 M738,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.6c0-3.2-2.6-5.8-5.8-5.8H738c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C734.9,99.4,736.3,100.8,738,100.8L738,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('32') ?
                    (selectedSeats.includes('32') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('32')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('32')}>
                    <path d="M652.4,133.8L652.4,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C653.9,133.1,653.2,133.8,652.4,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 658.2578 125.7952)" className="train-seat__text">32</text>
                    <path d="M657,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V128
           c0,2.9-2.4,5.2-5.2,5.2H657 M657,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H657c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C653.9,132.3,655.3,133.7,657,133.7L657,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('28') ?
                    (selectedSeats.includes('28') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('28')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('28')}>
                    <path d="M692.9,133.8L692.9,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C694.4,133.1,693.7,133.8,692.9,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 698.7431 125.7952)" className="train-seat__text">28</text>
                    <path d="M697.5,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V128
           c0,2.9-2.4,5.2-5.2,5.2H697.5 M697.5,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C694.4,132.3,695.8,133.7,697.5,133.7L697.5,133.7z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('24') ?
                    (selectedSeats.includes('24') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('24')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('24')}>
                    <path d="M733.4,133.8L733.4,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C734.8,133.1,734.2,133.8,733.4,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 739.2285 125.7952)" className="train-seat__text">24</text>
                    <path d="M738,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V128
           c0,2.9-2.4,5.2-5.2,5.2H738 M738,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H738c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C734.9,132.3,736.3,133.7,738,133.7L738,133.7z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('30') ?
                    (selectedSeats.includes('30') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('30')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('30')}>
                    <path d="M652.4,202.1L652.4,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C653.9,201.5,653.2,202.1,652.4,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 659.2577 194.1145)" className="train-seat__text">30</text>
                    <path d="M657,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H657 M657,202.1h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H657c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C653.9,200.7,655.3,202.1,657,202.1L657,202.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('26') ?
                    (selectedSeats.includes('26') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('26')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('26')}>
                    <path d="M692.9,202.1L692.9,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C694.4,201.5,693.7,202.1,692.9,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 699.743 194.1145)" className="train-seat__text">26</text>
                    <path d="M697.5,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H697.5 M697.5,202.1h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C694.4,200.7,695.8,202.1,697.5,202.1L697.5,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('20') ?
                    (selectedSeats.includes('20') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('20')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('20')}>
                    <path d="M733.4,202.1L733.4,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C734.8,201.5,734.2,202.1,733.4,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 740.2284 194.1145)" className="train-seat__text">20</text>
                    <path d="M738,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H738 M738,202.1h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H738c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C734.9,200.7,736.3,202.1,738,202.1L738,202.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('29') ?
                    (selectedSeats.includes('29') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('29')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('29')}>
                    <path d="M652.4,235L652.4,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C653.9,234.4,653.2,235,652.4,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 659.2577 227.0081)" className="train-seat__text">29</text>
                    <path d="M657,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H657 M657,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H657c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C653.9,233.6,655.3,234.9,657,234.9L657,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('25') ?
                    (selectedSeats.includes('25') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('25')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('25')}>
                    <path d="M692.9,235L692.9,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C694.4,234.4,693.7,235,692.9,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 699.743 227.0081)" className="train-seat__text">25</text>
                    <path d="M697.5,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H697.5 M697.5,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C694.4,233.6,695.8,234.9,697.5,234.9L697.5,234.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('19') ?
                    (selectedSeats.includes('19') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('19')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('19')}>
                    <path d="M733.4,235L733.4,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C734.8,234.4,734.2,235,733.4,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 740.2284 227.0081)" className="train-seat__text">19</text>
                    <path d="M738,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H738 M738,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8H738c-1.7,0-3.1,1.4-3.1,3.1v22.8
           C734.9,233.6,736.3,234.9,738,234.9L738,234.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('63') ?
                    (selectedSeats.includes('63') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('63')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('63')}>
                    <path d="M243.8,100.9L243.8,100.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C245.3,100.2,244.6,100.9,243.8,100.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 249.6718 91.9014)" className="train-seat__text">63</text>
                    <path d="M248.4,100.3c-1.4,0-2.6-1.2-2.6-2.6V74.9c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H248.4 M248.4,100.8h20.2c3.2,0,5.8-2.6,5.8-5.8V77.6c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
           v22.8C245.3,99.4,246.7,100.8,248.4,100.8L248.4,100.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('64') ?
                    (selectedSeats.includes('64') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('64')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('64')}>
                    <path d="M243.8,133.8L243.8,133.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C245.3,133.1,244.6,133.8,243.8,133.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 249.6718 124.7949)" className="train-seat__text">64</text>
                    <path d="M248.4,133.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2V128
           c0,2.9-2.4,5.2-5.2,5.2H248.4 M248.4,133.7h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C245.3,132.3,246.7,133.7,248.4,133.7L248.4,133.7z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('66') ?
                    (selectedSeats.includes('66') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('66')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('66')}>
                    <path d="M203.3,202.1L203.3,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C204.8,201.5,204.1,202.1,203.3,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 209.1874 194.1143)" className="train-seat__text">66</text>
                    <path d="M207.9,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H207.9 M207.9,202.1h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C204.8,200.7,206.2,202.1,207.9,202.1L207.9,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('60') ?
                    (selectedSeats.includes('60') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('60')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('60')}>
                    <path d="M243.8,202.1L243.8,202.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C245.3,201.5,244.6,202.1,243.8,202.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 249.6718 194.1143)" className="train-seat__text">60</text>
                    <path d="M248.4,201.5c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H248.4 M248.4,202.1h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C245.3,200.7,246.7,202.1,248.4,202.1L248.4,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('65') ?
                    (selectedSeats.includes('65') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('65')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('65')}>
                    <path d="M203.3,235L203.3,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C204.8,234.4,204.1,235,203.3,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 209.1874 227.0078)" className="train-seat__text">65</text>
                    <path d="M207.9,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H207.9 M207.9,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C204.8,233.6,206.2,234.9,207.9,234.9L207.9,234.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('59') ?
                    (selectedSeats.includes('59') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('59')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('59')}>
                    <path d="M243.8,235L243.8,235c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C245.3,234.4,244.6,235,243.8,235z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 249.6718 227.0078)" className="train-seat__text">59</text>
                    <path d="M248.4,234.4c-1.4,0-2.6-1.2-2.6-2.6V209c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
           c0,2.9-2.4,5.2-5.2,5.2H248.4 M248.4,234.9h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2
           c-1.7,0-3.1,1.4-3.1,3.1v22.8C245.3,233.6,246.7,234.9,248.4,234.9L248.4,234.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('58') ?
                    (selectedSeats.includes('58') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('58')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('58')}>
                    <path d="M354.1,173L354.1,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
             C352.6,173.7,353.3,173,354.1,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 328.871 194.1144)" className="train-seat__text">58</text>
                    <path d="M329.2,201.6c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6V199
             c0,1.4-1.2,2.6-2.6,2.6H329.2 M329.2,202.1h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2
             c-3.2,0-5.8,2.6-5.8,5.8v17.5C323.5,199.5,326.1,202.1,329.2,202.1L329.2,202.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('57') ?
                    (selectedSeats.includes('57') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('57')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('57')}>
                    <path d="M354.1,205.9L354.1,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
             C352.6,206.6,353.3,205.9,354.1,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 328.871 227.0079)" className="train-seat__text">57</text>
                    <path d="M329.2,234.5c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
             c0,1.4-1.2,2.6-2.6,2.6H329.2 M329.2,235h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
             v17.5C323.5,232.4,326.1,235,329.2,235L329.2,235z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('49') ?
                    (selectedSeats.includes('49') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('49')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('49')}>
                    <path d="M435.3,205.9L435.3,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
         C433.8,206.6,434.5,205.9,435.3,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 409.5966 227.0079)" className="train-seat__text">49</text>
                    <path d="M430.7,206.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
         c0-2.9,2.4-5.2,5.2-5.2H430.7 M430.7,206h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
         v-22.8C433.8,207.4,432.4,206,430.7,206L430.7,206z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('53') ?
                    (selectedSeats.includes('53') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('53')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('53')}>
                    <path d="M394.8,205.9L394.8,205.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
         C393.4,206.6,394,205.9,394.8,205.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 369.1122 227.0079)" className="train-seat__text">53</text>
                    <path d="M390.2,206.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6H370c-2.9,0-5.2-2.4-5.2-5.2v-17.5
         c0-2.9,2.4-5.2,5.2-5.2H390.2 M390.2,206H370c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
         v-22.8C393.3,207.4,391.9,206,390.2,206L390.2,206z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('50') ?
                    (selectedSeats.includes('50') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('50')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('50')}>
                    <path d="M435.3,173L435.3,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
         C433.8,173.7,434.5,173,435.3,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 409.5966 194.1144)" className="train-seat__text">50</text>
                    <path d="M430.7,173.6c1.4,0,2.6,1.2,2.6,2.6V199c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
         c0-2.9,2.4-5.2,5.2-5.2H430.7 M430.7,173.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
         v-22.8C433.8,174.5,432.4,173.1,430.7,173.1L430.7,173.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('54') ?
                    (selectedSeats.includes('54') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('54')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('54')}>
                    <path d="M394.8,173L394.8,173c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
         C393.4,173.7,394,173,394.8,173z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 369.1122 194.1144)" className="train-seat__text">54</text>
                    <path d="M390.2,173.6c1.4,0,2.6,1.2,2.6,2.6V199c0,1.4-1.2,2.6-2.6,2.6H370c-2.9,0-5.2-2.4-5.2-5.2v-17.5
         c0-2.9,2.4-5.2,5.2-5.2H390.2 M390.2,173.1H370c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
         v-22.8C393.3,174.5,391.9,173.1,390.2,173.1L390.2,173.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('61') ?
                    (selectedSeats.includes('61') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('61')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('61')}>
                    <path d="M354.1,71.9L354.1,71.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.4
       C352.6,72.6,353.3,71.9,354.1,71.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 328.8711 93.0128)" className="train-seat__text">61</text>
                    <path d="M329.2,100.5c-2.9,0-5.2-2.4-5.2-5.2V77.7c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H329.2 M329.2,101h20.2c1.7,0,3.1-1.4,3.1-3.1V75.1c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C323.5,98.4,326.1,101,329.2,101L329.2,101z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('62') ?
                    (selectedSeats.includes('62') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('62')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('62')}>
                    <path d="M354.1,104.8L354.1,104.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C352.6,105.5,353.3,104.8,354.1,104.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 328.8711 125.9064)" className="train-seat__text">62</text>
                    <path d="M329.2,133.4c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H329.2 M329.2,133.9h20.2c1.7,0,3.1-1.4,3.1-3.1V108c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C323.5,131.3,326.1,133.9,329.2,133.9L329.2,133.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('52') ?
                    (selectedSeats.includes('52') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('52')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('52')}>
                    <path d="M435.3,104.8L435.3,104.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C433.8,105.5,434.5,104.8,435.3,104.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 409.5966 125.9064)" className="train-seat__text">52</text>
                    <path d="M430.7,105.4c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H430.7 M430.7,104.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       V108C433.8,106.3,432.4,104.9,430.7,104.9L430.7,104.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('56') ?
                    (selectedSeats.includes('56') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('56')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('56')}>
                    <path d="M394.8,104.8L394.8,104.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C393.4,105.5,394,104.8,394.8,104.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 369.1122 125.9064)" className="train-seat__text">56</text>
                    <path d="M390.2,105.4c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6H370c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H390.2 M390.2,104.9H370c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1V108
       C393.3,106.3,391.9,104.9,390.2,104.9L390.2,104.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('51') ?
                    (selectedSeats.includes('51') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('51')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('51')}>
                    <path d="M435.3,71.9L435.3,71.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.4
       C433.8,72.6,434.5,71.9,435.3,71.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 409.5966 93.0128)" className="train-seat__text">51</text>
                    <path d="M430.7,72.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.7
       c0-2.9,2.4-5.2,5.2-5.2H430.7 M430.7,72h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1V75.1
       C433.8,73.4,432.4,72,430.7,72L430.7,72z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('55') ?
                    (selectedSeats.includes('55') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('55')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('55')}>
                    <path d="M394.8,71.9L394.8,71.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V73.4
       C393.4,72.6,394,71.9,394.8,71.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 369.1122 93.0128)" className="train-seat__text">55</text>
                    <path d="M390.2,72.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6H370c-2.9,0-5.2-2.4-5.2-5.2V77.7
       c0-2.9,2.4-5.2,5.2-5.2H390.2 M390.2,72H370c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1V75.1
       C393.3,73.4,391.9,72,390.2,72L390.2,72z" className="train-seat__border"></path>
                </g>
            </g>
            <g id="zwquE5_1_">
                <g>
                    <path className="fill-darkgray" d="M484,220.2c-6.5,0-12.9,0-19.4,0c-3.8,0-6.3-3-5.2-6.6c0.4-1.2,1.5-2.4,2.6-3.1c6.1-4,12.4-7.9,18.6-11.8
         c0.8-0.5,1.4-1,1.2-2.1c-0.2-1.9,0.5-3.3,2.2-4.1c0.2-0.1,0.3-0.2,0.5-0.4c0.9-0.5,1.8-1.3,1.2-2.2c-0.4-0.6-1.5-1-2.3-1.1
         c-1.1-0.1-1.8,0.6-2,1.8c-0.1,0.9,0.1,1.9-1.3,2.1c-2.4,0.3-3.1-0.4-2.7-2.7c0.6-3.2,3.1-5.4,6.4-5.3c3.2,0.1,5.9,2.3,6.2,5.3
         c0.2,1.9-0.5,3.5-2,4.7c-0.5,0.4-1,0.6-1.4,1c-1.2,1-1.1,2.1,0.2,2.9c6.4,4,12.8,8,19.2,12c2,1.2,2.9,3,2.7,5.3
         c-0.3,2.7-2.4,4.4-5.4,4.5C497,220.2,490.5,220.2,484,220.2z M484.1,215.9c6.3,0,12.5,0,18.8,0c0.5,0,1.1-0.4,1.6-0.7
         c-0.3-0.5-0.6-1.1-1-1.4c-6.1-3.9-12.2-7.6-18.2-11.5c-0.9-0.5-1.4-0.5-2.2,0.1c-1.9,1.3-3.9,2.5-5.9,3.7
         c-4.1,2.6-8.3,5.2-12.4,7.8c-0.4,0.3-0.6,0.9-0.8,1.3c0.4,0.2,0.8,0.5,1.3,0.6c0.4,0.1,0.8,0,1.3,0
         C472.3,215.9,478.2,215.9,484.1,215.9z"></path>
                </g>
            </g>
        </svg>
    );
}
