import React from 'react';

export default props => {
    const {handleEndHover, handleHover, handleClick, availableSeats, selectedSeats} = props;

    return (
        <svg pointerEvents="bounding-box" version="1.1" id="Layer_1" xmlnssvg="http://www.w3.org/2000/svg"
             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1140 306.8" style={{enableBackground: "new 0 0 1140 306.8"}} xmlSpace="preserve">
            <g>
                <g>
                </g>
                <path className="fill-lightgray" d="M351.6,181.1c7.4,0,13.3,6,13.3,13.3v43.7h-26.7v-43.7C338.2,187,344.2,181.1,351.6,181.1 M351.6,180.1
        L351.6,180.1c-7.9,0-14.4,6.4-14.4,14.4v44.7h28.7v-44.7C365.9,186.5,359.5,180.1,351.6,180.1L351.6,180.1z"></path>
                <path className="fill-lightgray" d="M364.9,76.9v43.7c0,7.4-6,13.3-13.3,13.3c-7.4,0-13.3-6-13.3-13.3V76.9H364.9 M365.9,75.9h-28.7v44.7
        c0,7.9,6.4,14.4,14.4,14.4h0c7.9,0,14.4-6.4,14.4-14.4V75.9L365.9,75.9z"></path>
                <path className="fill-lightgray" d="M759.2,201.3c7.4,0,13.3,6,13.3,13.3v23.5h-26.7v-23.5C745.8,207.3,751.8,201.3,759.2,201.3 M759.2,200.3
        L759.2,200.3c-7.9,0-14.4,6.4-14.4,14.4v24.5h28.7v-24.5C773.5,206.7,767.1,200.3,759.2,200.3L759.2,200.3z"></path>
                <path className="fill-lightgray" d="M772.5,76.9v43.7c0,7.4-6,13.3-13.3,13.3s-13.3-6-13.3-13.3V76.9H772.5 M773.5,75.9h-28.7v44.7
        c0,7.9,6.4,14.4,14.4,14.4h0c7.9,0,14.4-6.4,14.4-14.4V75.9L773.5,75.9z"></path>
                <g>
                </g>
                <g>
                </g>
                <path className="fill-lightgray" d="M879.2,76.9c5,0,9.1,4.1,9.1,9.1v66.5c0,5-4.1,9.1-9.1,9.1h-66.5c-5,0-9.1-4.1-9.1-9.1V86c0-5,4.1-9.1,9.1-9.1
        H879.2 M879.2,75.9h-66.5c-5.6,0-10.1,4.5-10.1,10.1v66.5c0,5.6,4.5,10.1,10.1,10.1h66.5c5.6,0,10.1-4.5,10.1-10.1V86
        C889.3,80.4,884.8,75.9,879.2,75.9L879.2,75.9z"></path>
                <path className="fill-lightgray" d="M1004.1,196.7c4,0,7.3,3.3,7.3,7.3v26.7c0,4-3.3,7.3-7.3,7.3H902.6c-4,0-7.3-3.3-7.3-7.3v-26.7
        c0-4,3.3-7.3,7.3-7.3H1004.1 M1004.1,195.7H902.6c-4.6,0-8.4,3.7-8.4,8.4v26.7c0,4.6,3.7,8.4,8.4,8.4h101.5c4.6,0,8.4-3.7,8.4-8.4
        v-26.7C1012.4,199.5,1008.7,195.7,1004.1,195.7L1004.1,195.7z"></path>
                <path className="fill-lightgray" d="M1069.5,76.9c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9h-45.5c-3.3,0-5.9-2.6-5.9-5.9V82.8
        c0-3.3,2.6-5.9,5.9-5.9H1069.5 M1069.5,75.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9
        V82.8C1076.4,79,1073.3,75.9,1069.5,75.9L1069.5,75.9z"></path>
                <path className="fill-lightgray" d="M108.5,76.9c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9H63c-3.3,0-5.9-2.6-5.9-5.9V82.8
        c0-3.3,2.6-5.9,5.9-5.9H108.5 M108.5,75.9H63c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9V82.8
        C115.4,79,112.3,75.9,108.5,75.9L108.5,75.9z"></path>
                <path className="fill-lightgray" d="M108.5,180.8c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9H63c-3.3,0-5.9-2.6-5.9-5.9v-45.5
        c0-3.3,2.6-5.9,5.9-5.9H108.5 M108.5,179.8H63c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9
        v-45.5C115.4,182.9,112.3,179.8,108.5,179.8L108.5,179.8z"></path>
                <path className="fill-lightgray" d="M1000.4,76.9c5.9,0,10.8,4.8,10.8,10.8v63.2c0,5.9-4.8,10.8-10.8,10.8h-94.4c-5.9,0-10.8-4.8-10.8-10.8V87.7
        c0-5.9,4.8-10.8,10.8-10.8H1000.4 M1000.4,75.9h-94.4c-6.5,0-11.8,5.3-11.8,11.8v63.2c0,6.5,5.3,11.8,11.8,11.8h94.4
        c6.5,0,11.8-5.3,11.8-11.8V87.7C1012.2,81.2,1006.9,75.9,1000.4,75.9L1000.4,75.9z"></path>
                <polyline className="t60-arrow" points="1107.8,92 1123.4,76.4 1139,92 	"></polyline>
                <polyline className="t60-arrow" points="1107.8,223 1123.4,238.6 1139,223 	"></polyline>
                <polyline className="t60-arrow" points="1123.4,173.1 1139,157.5 1123.4,141.9 	"></polyline>
                <polyline className="t60-arrow" points="16.2,142.3 1,157.5 16.2,172.8 	"></polyline>
                <g>
                    <path className="fill-darkgray" d="M840.9,125.6c-0.1,0-0.1,0-0.2,0c-0.9,0-1.7,0-2.6,0c-0.1,0-0.1,0-0.2,0c-0.3,0-0.4-0.2-0.4-0.4
          c0-0.5,0-1.1,0-1.6c0-0.3,0.2-0.5,0.5-0.5c0.9,0,1.8,0,2.7,0c0.1,0,0.1,0,0.2,0c0-0.5,0-1,0-1.6c-0.1,0-0.1,0-0.2,0
          c-0.9,0-1.8,0-2.6,0c-0.1,0-0.2,0-0.3,0c-0.2-0.1-0.2-0.2-0.2-0.4c0-0.6,0-1.3,0-1.9c0-0.3,0.2-0.5,0.5-0.5c0.9,0,1.8,0,2.7,0
          c0.1,0,0.1,0,0.2,0c0-0.1,0-0.2,0-0.2c0-2.6,0-5.3,0-7.9c0-0.1,0-0.2,0-0.2c0-0.2,0.1-0.3,0.3-0.3c0.1,0,0.2,0,0.2,0
          c2.3,0,4.6,0,6.8,0c0.8,0,1.6,0.1,2.4,0.4c0.8,0.3,1.5,0.7,2.1,1.3c0.8,0.8,1.3,1.7,1.5,2.9c0.1,0.8,0.1,1.5,0,2.3
          c-0.1,1-0.5,1.9-1.2,2.7c-0.7,0.8-1.5,1.4-2.5,1.7c-0.8,0.3-1.5,0.3-2.3,0.3c-1.4,0-2.8,0-4.2,0c-0.1,0-0.1,0-0.2,0
          c0,0.5,0,1,0,1.6c0.1,0,0.1,0,0.2,0c2.1,0,4.2,0,6.2,0c0.1,0,0.1,0,0.2,0c0.3,0,0.5,0.2,0.5,0.5c0,0.5,0,1.1,0,1.6
          c0,0.3-0.2,0.5-0.5,0.5c-0.5,0-1,0-1.5,0c-1.6,0-3.3,0-4.9,0c-0.2,0-0.2,0-0.2,0.2c0,0.7,0,1.5,0,2.2c0,0.4-0.1,0.6-0.6,0.6
          c-0.7,0-1.3,0-2,0c-0.4,0-0.5-0.2-0.5-0.5c0-0.7,0-1.5,0-2.2C840.9,125.7,840.9,125.7,840.9,125.6z M843.9,115.8
          c0,0.9,0,1.8,0,2.8c0,0.2,0,0.2,0.2,0.2c1.3,0,2.6,0,4,0c0.3,0,0.6,0,0.9-0.1c0.8-0.2,1.5-0.6,1.9-1.4c0.3-0.6,0.4-1.2,0.3-1.8
          c-0.1-1-0.6-1.7-1.4-2.2c-0.5-0.3-1.1-0.4-1.7-0.4c-1.3,0-2.6,0-4,0c-0.1,0-0.2,0-0.2,0.2C843.9,113.9,843.9,114.9,843.9,115.8z"></path>
                </g>
                <text transform="matrix(1 0 0 1 948.6086 127.2012)"
                      className="fill-darkgray svg-helveticabold svg-fontsize">WC
                </text>
                <text transform="matrix(1 0 0 1 1032.0383 113.0625)"
                      className="fill-darkgray svg-helveticabold svg-fontsize">WC
                </text>
                <g id="_x36_JbfNz_2_">
                    <g>
                        <path className="fill-darkgray" d="M939.1,117.5c0.1,0,0.1,0,0.2,0c0.7,0,1.4,0,2.1,0c0.6,0,1.1,0.5,1.2,1.1c0.1,0.6-0.3,1.2-0.9,1.3
            c-0.1,0-0.2,0-0.4,0c-0.7,0-1.4,0-2.1,0c0,0-0.1,0-0.1,0c0,0.6,0,1.2,0,1.9c0.1,0,0.1,0,0.2,0c1.4,0,2.7,0,4.1,0
            c0.6,0,1,0.3,1.2,0.8c0.7,1.5,1.5,3.1,2.2,4.6c0.4,0.9-0.2,1.8-1.2,1.8c-0.5,0-0.8-0.3-1-0.7c-0.6-1.3-1.2-2.5-1.8-3.8
            c-0.1-0.1-0.1-0.2-0.3-0.2c-1.5,0-3,0-4.6,0c-0.6,0-1.1-0.4-1.2-1c0-0.1,0-0.2,0-0.3c0-2.4,0-4.8,0-7.1c0-0.7,0.5-1.2,1.1-1.2
            c0.6-0.1,1.2,0.4,1.3,1c0,0.1,0,0.2,0,0.3c0,0.5,0,1,0,1.4C939.1,117.4,939.1,117.4,939.1,117.5z"></path>
                        <path className="fill-darkgray" d="M936,117.3c0,0.2,0,0.3,0,0.5c0,0.4,0,0.8,0,1.1c0,0.1,0,0.1-0.1,0.2c-1.7,0.7-2.8,1.9-3.3,3.8
            c-0.6,2.4,0.6,4.9,2.8,6c2.7,1.3,6,0.1,7.2-2.6c0-0.1,0.1-0.1,0.1-0.2c0,0.1,0,0.1,0.1,0.1c0.3,0.5,0.5,1.1,0.8,1.6
            c0,0.1,0,0.1,0,0.2c-1.1,1.6-2.7,2.7-4.7,3c-2.9,0.5-5.7-0.9-7.2-3.5c-1.5-2.7-1.1-6.1,1.1-8.3c0.9-0.9,1.9-1.5,3-1.8
            C935.9,117.3,936,117.3,936,117.3z"></path>
                        <path className="fill-darkgray" d="M940.1,111.6c0,1.3-1.1,2.3-2.4,2.3c-1.3,0-2.3-1.1-2.3-2.3c0-1.3,1.1-2.3,2.3-2.3
            C939.1,109.2,940.1,110.3,940.1,111.6z"></path>
                    </g>
                </g>
                <g id="_x31_fj75T_6_">
                    <g>
                        <path className="fill-darkgray" d="M964.1,224.9c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
            c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
            c0.2,0.2,0.3,0.5,0.4,0.9C964.1,216.8,964.1,220.8,964.1,224.9z"></path>
                        <path className="fill-darkgray" d="M942.6,212.7c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
            c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
            C942.6,220.9,942.6,216.8,942.6,212.7z"></path>
                        <path className="fill-darkgray" d="M959.2,227c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
            c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
            c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
            c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C959.2,226.9,959.2,227,959.2,227z M956.5,210.3
            c0-0.4-0.1-0.7-0.1-1.1c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
            C952.3,210.1,954.4,210.1,956.5,210.3z"></path>
                    </g>
                </g>
                <g id="_x31_fj75T_5_">
                    <g>
                        <path className="fill-darkgray" d="M96.5,217c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
            c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
            c0.2,0.2,0.3,0.5,0.4,0.9C96.5,208.8,96.5,212.9,96.5,217z"></path>
                        <path className="fill-darkgray" d="M75,204.7c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
            c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
            C75,212.9,75,208.8,75,204.7z"></path>
                        <path className="fill-darkgray" d="M91.6,219.1c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
            c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
            c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
            c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C91.6,218.9,91.6,219,91.6,219.1z M88.9,202.4c0-0.4-0.1-0.7-0.1-1.1
            c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
            C84.7,202.2,86.8,202.2,88.9,202.4z"></path>
                    </g>
                </g>
                <g id="_x31_fj75T_4_">
                    <g>
                        <path className="fill-darkgray" d="M96.5,113c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
            c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
            c0.2,0.2,0.3,0.5,0.4,0.9C96.5,104.9,96.5,109,96.5,113z"></path>
                        <path className="fill-darkgray" d="M75,100.8c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
            c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
            C75,109,75,104.9,75,100.8z"></path>
                        <path className="fill-darkgray" d="M91.6,115.1c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
            c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0
            c0.6,0,1.1,0.2,1.5,0.7c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1
            c0.1,0,0.2,0.1,0.2,0.2c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C91.6,115,91.6,115.1,91.6,115.1z M88.9,98.4c0-0.4-0.1-0.7-0.1-1.1
            c0-0.3-0.2-0.5-0.6-0.5c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3
            C84.7,98.2,86.8,98.2,88.9,98.4z"></path>
                    </g>
                </g>
                <g id="G1dcqi_2_">
                    <g>
                        <path className="fill-lightgray" d="M52.8,190.8c0,2.6,0,5.3,0,7.9c0,1.7-1.3,3-3,3c-5.3,0-10.6,0-15.8,0c-1.7,0-3-1.3-3-3c0-3.7,0-7.4,0-11
            c0-1.6,0-3.1,0-4.7c0-1.8,1.3-3.1,3.1-3.1c1.8,0,3.7,0,5.5,0c3.4,0,6.8,0,10.2,0c1.4,0,2.6,0.9,2.9,2.3c0,0.2,0.1,0.4,0.1,0.6
            c0,1.6,0,3.2,0,4.7C52.8,188.6,52.8,189.7,52.8,190.8C52.8,190.8,52.8,190.8,52.8,190.8z M31.9,190.7
            C31.9,190.7,31.9,190.7,31.9,190.7c0,2.6,0,5.2,0,7.8c0,1.2,0.9,2.2,2.2,2.2c5.2,0,10.4,0,15.6,0c1.3,0,2.2-0.9,2.2-2.2
            c0-3.5,0-7,0-10.5c0-1.7,0-3.5,0-5.2c0-1.3-0.9-2.1-2.2-2.1c-4.2,0-8.3,0-12.5,0c-1.1,0-2.1,0-3.2,0c-1.2,0-2.1,0.9-2.1,2.1
            c0,1.2,0,2.4,0,3.6C31.9,187.9,31.9,189.3,31.9,190.7z"></path>
                        <path className="fill-darkgray" d="M48.6,190.8c0,3.7-3,6.7-6.6,6.7c-3.7,0.1-6.8-2.9-6.8-6.6c-0.1-3.8,2.9-6.8,6.6-6.9
            C45.3,183.9,48.6,186.8,48.6,190.8z M41.4,185c-2.5,0.1-5.2,2.2-5.3,5.6c-0.1,3.4,2.6,5.8,5.3,5.9c0,0,0-0.1,0-0.1
            c0-0.3,0-0.7,0-1c0-0.3,0.2-0.4,0.4-0.5c0.3,0,0.5,0.2,0.5,0.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.5,0,0.8c1.3,0,3.5-0.8,4.6-2.9
            c1.1-2.1,1-4.2-0.3-6.1c-1-1.5-2.5-2.3-4.3-2.5c0,0.4,0,0.8,0,1.1c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5
            C41.4,185.7,41.4,185.4,41.4,185z"></path>
                        <path className="fill-darkgray"
                              d="M44.8,189.7c0.6,0,1.1,0.5,1,1c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1.1C43.8,190.2,44.2,189.7,44.8,189.7z"></path>
                        <path className="fill-darkgray"
                              d="M37.9,190.8c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1.1,1c0,0.6-0.4,1-1,1C38.3,191.8,37.9,191.3,37.9,190.8z"></path>
                    </g>
                </g>
                <g className={(availableSeats.hasOwnProperty('55') ?
                    (selectedSeats.includes('55') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('55')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('55')}>
                    <path d="M704.7,239.1L704.7,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C706.2,238.4,705.5,239.1,704.7,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 710.7014 230.6826)" className="train-seat__text">55</text>
                    <path d="M729.5,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H729.5 M729.5,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C735.3,212.6,732.7,210,729.5,210L729.5,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('51') ?
                    (selectedSeats.includes('51') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('51')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('51')}>
                    <path d="M664.2,239.1L664.2,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C665.7,238.4,665,239.1,664.2,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 670.2161 230.6826)" className="train-seat__text">51</text>
                    <path d="M689,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H689 M689,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H689c3.2,0,5.8-2.6,5.8-5.8
                  v-17.5C694.8,212.6,692.2,210,689,210L689,210z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('47') ?
                    (selectedSeats.includes('47') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('47')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('47')}>
                    <path d="M623.7,239.1L623.7,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C625.2,238.4,624.5,239.1,623.7,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 629.7307 230.6826)" className="train-seat__text">47</text>
                    <path d="M648.5,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H648.5 M648.5,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C654.3,212.6,651.7,210,648.5,210L648.5,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('43') ?
                    (selectedSeats.includes('43') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('43')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('43')}>
                    <path d="M583.2,239.1L583.2,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C584.7,238.4,584,239.1,583.2,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 589.2454 230.6826)" className="train-seat__text">43</text>
                    <path d="M608.1,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H608.1 M608.1,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C613.8,212.6,611.2,210,608.1,210L608.1,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('39') ?
                    (selectedSeats.includes('39') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('39')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('39')}>
                    <path d="M542.8,239.1L542.8,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C544.2,238.4,543.6,239.1,542.8,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 548.76 230.6826)" className="train-seat__text">39</text>
                    <path d="M567.6,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H567.6 M567.6,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C573.3,212.6,570.8,210,567.6,210L567.6,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('35') ?
                    (selectedSeats.includes('35') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('35')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('35')}>
                    <path d="M502.3,239.1L502.3,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C503.7,238.4,503.1,239.1,502.3,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 508.2747 230.6826)" className="train-seat__text">35</text>
                    <path d="M527.1,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H527.1 M527.1,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C532.8,212.6,530.3,210,527.1,210L527.1,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('56') ?
                    (selectedSeats.includes('56') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('56')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('56')}>
                    <path d="M704.7,206.2L704.7,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C706.2,205.5,705.5,206.2,704.7,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 710.7014 197.7891)" className="train-seat__text">56</text>
                    <path d="M729.5,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H729.5 M729.5,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C735.3,179.7,732.7,177.1,729.5,177.1L729.5,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('52') ?
                    (selectedSeats.includes('52') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('52')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('52')}>
                    <path d="M664.2,206.2L664.2,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C665.7,205.5,665,206.2,664.2,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 670.2161 197.7891)" className="train-seat__text">52</text>
                    <path d="M689,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H689 M689,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1H689c3.2,0,5.8-2.6,5.8-5.8
                  v-17.5C694.8,179.7,692.2,177.1,689,177.1L689,177.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('48') ?
                    (selectedSeats.includes('48') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('48')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('48')}>
                    <path d="M623.7,206.2L623.7,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C625.2,205.5,624.5,206.2,623.7,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 629.7307 197.7891)" className="train-seat__text">48</text>
                    <path d="M648.5,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H648.5 M648.5,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C654.3,179.7,651.7,177.1,648.5,177.1L648.5,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('44') ?
                    (selectedSeats.includes('44') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('44')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('44')}>
                    <path d="M583.2,206.2L583.2,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C584.7,205.5,584,206.2,583.2,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 589.2454 197.7891)" className="train-seat__text">44</text>
                    <path d="M608.1,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H608.1 M608.1,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C613.8,179.7,611.2,177.1,608.1,177.1L608.1,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('40') ?
                    (selectedSeats.includes('40') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('40')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('40')}>
                    <path d="M542.8,206.2L542.8,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C544.2,205.5,543.6,206.2,542.8,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 548.76 197.7891)" className="train-seat__text">40</text>
                    <path d="M567.6,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H567.6 M567.6,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C573.3,179.7,570.8,177.1,567.6,177.1L567.6,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('36') ?
                    (selectedSeats.includes('36') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('36')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('36')}>
                    <path d="M502.3,206.2L502.3,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C503.7,205.5,503.1,206.2,502.3,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 508.2747 197.7891)" className="train-seat__text">36</text>
                    <path d="M527.1,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H527.1 M527.1,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C532.8,179.7,530.3,177.1,527.1,177.1L527.1,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('54') ?
                    (selectedSeats.includes('54') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('54')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('54')}>
                    <path d="M704.7,137.9L704.7,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C706.2,137.2,705.5,137.9,704.7,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 710.7014 129.4697)" className="train-seat__text">54</text>
                    <path d="M729.5,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H729.5 M729.5,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C735.3,111.4,732.7,108.8,729.5,108.8L729.5,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('50') ?
                    (selectedSeats.includes('50') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('50')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('50')}>
                    <path d="M664.2,137.9L664.2,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C665.7,137.2,665,137.9,664.2,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 670.2161 129.4697)" className="train-seat__text">50</text>
                    <path d="M689,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H689 M689,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H689c3.2,0,5.8-2.6,5.8-5.8
                  v-17.5C694.8,111.4,692.2,108.8,689,108.8L689,108.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('46') ?
                    (selectedSeats.includes('46') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('46')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('46')}>
                    <path d="M623.7,137.9L623.7,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C625.2,137.2,624.5,137.9,623.7,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 629.7307 129.4697)" className="train-seat__text">46</text>
                    <path d="M648.5,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H648.5 M648.5,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C654.3,111.4,651.7,108.8,648.5,108.8L648.5,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('42') ?
                    (selectedSeats.includes('42') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('42')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('42')}>
                    <path d="M583.2,137.9L583.2,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C584.7,137.2,584,137.9,583.2,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 589.2454 129.4697)" className="train-seat__text">42</text>
                    <path d="M608.1,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H608.1 M608.1,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C613.8,111.4,611.2,108.8,608.1,108.8L608.1,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('38') ?
                    (selectedSeats.includes('38') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('38')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('38')}>
                    <path d="M542.8,137.9L542.8,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C544.2,137.2,543.6,137.9,542.8,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 548.76 129.4697)" className="train-seat__text">38</text>
                    <path d="M567.6,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H567.6 M567.6,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C573.3,111.4,570.8,108.8,567.6,108.8L567.6,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('34') ?
                    (selectedSeats.includes('34') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('34')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('34')}>
                    <path d="M502.3,137.9L502.3,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C503.7,137.2,503.1,137.9,502.3,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 508.2747 129.4697)" className="train-seat__text">34</text>
                    <path d="M527.1,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H527.1 M527.1,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C532.8,111.4,530.3,108.8,527.1,108.8L527.1,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('53') ?
                    (selectedSeats.includes('53') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('53')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('53')}>
                    <path d="M704.7,105L704.7,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C706.2,104.3,705.5,105,704.7,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 710.7014 96.5762)" className="train-seat__text">53</text>
                    <path d="M729.5,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H729.5 M729.5,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C735.3,78.5,732.7,75.9,729.5,75.9L729.5,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('49') ?
                    (selectedSeats.includes('49') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('49')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('49')}>
                    <path d="M664.2,105L664.2,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C665.7,104.3,665,105,664.2,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 670.2161 96.5762)" className="train-seat__text">49</text>
                    <path d="M689,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H689 M689,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H689c3.2,0,5.8-2.6,5.8-5.8
                  V81.7C694.8,78.5,692.2,75.9,689,75.9L689,75.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('45') ?
                    (selectedSeats.includes('45') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('45')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('45')}>
                    <path d="M623.7,105L623.7,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C625.2,104.3,624.5,105,623.7,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 629.7307 96.5762)" className="train-seat__text">45</text>
                    <path d="M648.5,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H648.5 M648.5,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C654.3,78.5,651.7,75.9,648.5,75.9L648.5,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('41') ?
                    (selectedSeats.includes('41') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('41')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('41')}>
                    <path d="M583.2,105L583.2,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C584.7,104.3,584,105,583.2,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 589.2454 96.5762)" className="train-seat__text">41</text>
                    <path d="M608.1,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H608.1 M608.1,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C613.8,78.5,611.2,75.9,608.1,75.9L608.1,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('37') ?
                    (selectedSeats.includes('37') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('37')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('37')}>
                    <path d="M542.8,105L542.8,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C544.2,104.3,543.6,105,542.8,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 548.76 96.5762)" className="train-seat__text">37</text>
                    <path d="M567.6,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H567.6 M567.6,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C573.3,78.5,570.8,75.9,567.6,75.9L567.6,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('33') ?
                    (selectedSeats.includes('33') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('33')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('33')}>
                    <path d="M502.3,105L502.3,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C503.7,104.3,503.1,105,502.3,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 508.2747 96.5762)" className="train-seat__text">33</text>
                    <path d="M527.1,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H527.1 M527.1,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C532.8,78.5,530.3,75.9,527.1,75.9L527.1,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('21') ?
                    (selectedSeats.includes('21') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('21')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('21')}>
                    <path d="M295,239.1L295,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C296.4,238.4,295.8,239.1,295,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 301.3723 230.6826)" className="train-seat__text">21</text>
                    <path d="M319.8,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,212.6,323,210,319.8,210L319.8,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('15') ?
                    (selectedSeats.includes('15') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('15')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('15')}>
                    <path d="M254.5,239.1L254.5,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C255.9,238.4,255.3,239.1,254.5,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 260.887 230.6826)" className="train-seat__text">15</text>
                    <path d="M279.3,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,212.6,282.5,210,279.3,210L279.3,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('11') ?
                    (selectedSeats.includes('11') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('11')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('11')}>
                    <path d="M214,239.1L214,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C215.4,238.4,214.8,239.1,214,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 220.4016 230.6826)" className="train-seat__text">11</text>
                    <path d="M238.8,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,212.6,242,210,238.8,210L238.8,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('7') ?
                    (selectedSeats.includes('7') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('7')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('7')}>
                    <path d="M173.5,239.1L173.5,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C175,238.4,174.3,239.1,173.5,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 179.9163 230.6826)" className="train-seat__text">07</text>
                    <path d="M198.3,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,212.6,201.5,210,198.3,210L198.3,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('3') ?
                    (selectedSeats.includes('3') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('3')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('3')}>
                    <path d="M133,239.1L133,239.1c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C134.5,238.4,133.8,239.1,133,239.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 139.4309 230.6826)" className="train-seat__text">03</text>
                    <path d="M157.8,210.5c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,210h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,212.6,161,210,157.8,210L157.8,210z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('22') ?
                    (selectedSeats.includes('22') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('22')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('22')}>
                    <path d="M295,206.2L295,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C296.4,205.5,295.8,206.2,295,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 301.3723 197.7891)" className="train-seat__text">22</text>
                    <path d="M319.8,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,179.7,323,177.1,319.8,177.1L319.8,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('16') ?
                    (selectedSeats.includes('16') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('16')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('16')}>
                    <path d="M254.5,206.2L254.5,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C255.9,205.5,255.3,206.2,254.5,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 260.887 197.7891)" className="train-seat__text">16</text>
                    <path d="M279.3,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,179.7,282.5,177.1,279.3,177.1L279.3,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('12') ?
                    (selectedSeats.includes('12') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('12')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('12')}>
                    <path d="M214,206.2L214,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C215.4,205.5,214.8,206.2,214,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 220.4016 197.7891)" className="train-seat__text">12</text>
                    <path d="M238.8,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,179.7,242,177.1,238.8,177.1L238.8,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('8') ?
                    (selectedSeats.includes('8') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('8')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('8')}>
                    <path d="M173.5,206.2L173.5,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C175,205.5,174.3,206.2,173.5,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 179.9163 197.7891)" className="train-seat__text">08</text>
                    <path d="M198.3,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,179.7,201.5,177.1,198.3,177.1L198.3,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('4') ?
                    (selectedSeats.includes('4') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('4')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('4')}>
                    <path d="M133,206.2L133,206.2c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C134.5,205.5,133.8,206.2,133,206.2z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 139.4309 197.7891)" className="train-seat__text">04</text>
                    <path d="M157.8,177.6c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,177.1h-20.2c-1.7,0-3.1,1.4-3.1,3.1V203c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,179.7,161,177.1,157.8,177.1L157.8,177.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('18') ?
                    (selectedSeats.includes('18') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('18')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('18')}>
                    <path d="M295,137.9L295,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C296.4,137.2,295.8,137.9,295,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 301.3723 129.4697)" className="train-seat__text">18</text>
                    <path d="M319.8,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C325.5,111.4,323,108.8,319.8,108.8L319.8,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('14') ?
                    (selectedSeats.includes('14') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('14')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('14')}>
                    <path d="M254.5,137.9L254.5,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C255.9,137.2,255.3,137.9,254.5,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 260.887 129.4697)" className="train-seat__text">14</text>
                    <path d="M279.3,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C285,111.4,282.5,108.8,279.3,108.8L279.3,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('10') ?
                    (selectedSeats.includes('10') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('10')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('10')}>
                    <path d="M214,137.9L214,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C215.4,137.2,214.8,137.9,214,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 220.4016 129.4697)" className="train-seat__text">10</text>
                    <path d="M238.8,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C244.6,111.4,242,108.8,238.8,108.8L238.8,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('6') ?
                    (selectedSeats.includes('6') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('6')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('6')}>
                    <path d="M173.5,137.9L173.5,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C175,137.2,174.3,137.9,173.5,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 179.9163 129.4697)" className="train-seat__text">06</text>
                    <path d="M198.3,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C204.1,111.4,201.5,108.8,198.3,108.8L198.3,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('2') ?
                    (selectedSeats.includes('2') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('2')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('2')}>
                    <path d="M133,137.9L133,137.9c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C134.5,137.2,133.8,137.9,133,137.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 139.4309 129.4697)" className="train-seat__text">02</text>
                    <path d="M157.8,109.3c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
                  c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,108.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8v-17.5C163.6,111.4,161,108.8,157.8,108.8L157.8,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('17') ?
                    (selectedSeats.includes('17') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('17')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('17')}>
                    <path d="M295,105L295,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C296.4,104.3,295.8,105,295,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 301.3723 96.5762)" className="train-seat__text">17</text>
                    <path d="M319.8,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H319.8 M319.8,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C325.5,78.5,323,75.9,319.8,75.9L319.8,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('13') ?
                    (selectedSeats.includes('13') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('13')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('13')}>
                    <path d="M254.5,105L254.5,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C255.9,104.3,255.3,105,254.5,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 260.887 96.5762)" className="train-seat__text">13</text>
                    <path d="M279.3,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H279.3 M279.3,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C285,78.5,282.5,75.9,279.3,75.9L279.3,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('9') ?
                    (selectedSeats.includes('9') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('9')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('9')}>
                    <path d="M214,105L214,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C215.4,104.3,214.8,105,214,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 220.4016 96.5762)" className="train-seat__text">09</text>
                    <path d="M238.8,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H238.8 M238.8,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C244.6,78.5,242,75.9,238.8,75.9L238.8,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('5') ?
                    (selectedSeats.includes('5') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('5')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('5')}>
                    <path d="M173.5,105L173.5,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C175,104.3,174.3,105,173.5,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 179.9163 96.5762)" className="train-seat__text">05</text>
                    <path d="M198.3,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H198.3 M198.3,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C204.1,78.5,201.5,75.9,198.3,75.9L198.3,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('1') ?
                    (selectedSeats.includes('1') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('1')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('1')}>
                    <path d="M133,105L133,105c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
                  C134.5,104.3,133.8,105,133,105z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 139.4309 96.5762)" className="train-seat__text">01</text>
                    <path d="M157.8,76.4c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V79
                  c0-1.4,1.2-2.6,2.6-2.6H157.8 M157.8,75.9h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2
                  c3.2,0,5.8-2.6,5.8-5.8V81.7C163.6,78.5,161,75.9,157.8,75.9L157.8,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('31') ?
                    (selectedSeats.includes('31') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('31')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('31')}>
                    <path d="M487.6,210L487.6,210c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C486.1,210.7,486.8,210,487.6,210z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 462.0393 230.6826)" className="train-seat__text">31</text>
                    <path d="M483,210.6c1.4,0,2.6,1.2,2.6,2.6V236c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H483 M483,210.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
                  v-22.8C486.1,211.4,484.7,210.1,483,210.1L483,210.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('27') ?
                    (selectedSeats.includes('27') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('27')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('27')}>
                    <path d="M447.1,210L447.1,210c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C445.6,210.7,446.3,210,447.1,210z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 421.554 230.6826)" className="train-seat__text">27</text>
                    <path d="M442.5,210.6c1.4,0,2.6,1.2,2.6,2.6V236c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,210.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2
                  c1.7,0,3.1-1.4,3.1-3.1v-22.8C445.6,211.4,444.2,210.1,442.5,210.1L442.5,210.1z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('23') ?
                    (selectedSeats.includes('23') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('23')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('23')}>
                    <path d="M406.6,210L406.6,210c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C405.2,210.7,405.8,210,406.6,210z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 381.0696 230.6826)" className="train-seat__text">23</text>
                    <path d="M402,210.6c1.4,0,2.6,1.2,2.6,2.6V236c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H402 M402,210.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
                  v-22.8C405.1,211.4,403.7,210.1,402,210.1L402,210.1z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('32') ?
                    (selectedSeats.includes('32') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('32')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('32')}>
                    <path d="M487.6,177.1L487.6,177.1c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C486.1,177.8,486.8,177.1,487.6,177.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 462.0393 197.7891)" className="train-seat__text">32</text>
                    <path d="M483,177.7c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H483 M483,177.2h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
                  v-22.8C486.1,178.6,484.7,177.2,483,177.2L483,177.2z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('28') ?
                    (selectedSeats.includes('28') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('28')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('28')}>
                    <path d="M447.1,177.1L447.1,177.1c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C445.6,177.8,446.3,177.1,447.1,177.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 421.554 197.7891)" className="train-seat__text">28</text>
                    <path d="M442.5,177.7c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,177.2h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2
                  c1.7,0,3.1-1.4,3.1-3.1v-22.8C445.6,178.6,444.2,177.2,442.5,177.2L442.5,177.2z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('24') ?
                    (selectedSeats.includes('24') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('24')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('24')}>
                    <path d="M406.6,177.1L406.6,177.1c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C405.2,177.8,405.8,177.1,406.6,177.1z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 381.0696 197.7891)" className="train-seat__text">24</text>
                    <path d="M402,177.7c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H402 M402,177.2h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
                  v-22.8C405.1,178.6,403.7,177.2,402,177.2L402,177.2z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('30') ?
                    (selectedSeats.includes('30') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('30')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('30')}>
                    <path d="M487.6,108.8L487.6,108.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C486.1,109.4,486.8,108.8,487.6,108.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 462.0393 129.4697)" className="train-seat__text">30</text>
                    <path d="M483,109.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H483 M483,108.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
                  V112C486.1,110.2,484.7,108.8,483,108.8L483,108.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('26') ?
                    (selectedSeats.includes('26') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('26')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('26')}>
                    <path d="M447.1,108.8L447.1,108.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C445.6,109.4,446.3,108.8,447.1,108.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 421.554 129.4697)" className="train-seat__text">26</text>
                    <path d="M442.5,109.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,108.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2
                  c1.7,0,3.1-1.4,3.1-3.1V112C445.6,110.2,444.2,108.8,442.5,108.8L442.5,108.8z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('20') ?
                    (selectedSeats.includes('20') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('20')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('20')}>
                    <path d="M406.6,108.8L406.6,108.8c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
                  C405.2,109.4,405.8,108.8,406.6,108.8z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 381.0696 129.4697)" className="train-seat__text">20</text>
                    <path d="M402,109.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
                  c0-2.9,2.4-5.2,5.2-5.2H402 M402,108.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
                  V112C405.1,110.2,403.7,108.8,402,108.8L402,108.8z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('29') ?
                    (selectedSeats.includes('29') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('29')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('29')}>
                    <path d="M487.6,75.9L487.6,75.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V77.3
                  C486.1,76.5,486.8,75.9,487.6,75.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 462.0393 96.5762)" className="train-seat__text">29</text>
                    <path d="M483,76.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V81.7
                  c0-2.9,2.4-5.2,5.2-5.2H483 M483,75.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H483c1.7,0,3.1-1.4,3.1-3.1
                  V79.1C486.1,77.3,484.7,75.9,483,75.9L483,75.9z" className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('25') ?
                    (selectedSeats.includes('25') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('25')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('25')}>
                    <path d="M447.1,75.9L447.1,75.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V77.3
                  C445.6,76.5,446.3,75.9,447.1,75.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 421.554 96.5762)" className="train-seat__text">25</text>
                    <path d="M442.5,76.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V81.7
                  c0-2.9,2.4-5.2,5.2-5.2H442.5 M442.5,75.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2
                  c1.7,0,3.1-1.4,3.1-3.1V79.1C445.6,77.3,444.2,75.9,442.5,75.9L442.5,75.9z"
                          className="train-seat__border"></path>
                </g>
                <g className={(availableSeats.hasOwnProperty('19') ?
                    (selectedSeats.includes('19') ? 'selected' : 'available')
                    : 'disabled') + ' train-seat'}
                   onMouseEnter={() => props.handleHover('19')}
                   onMouseLeave={() => props.handleEndHover( )}
                   onClick={() => props.handleClick('19')}>
                    <path d="M406.6,75.9L406.6,75.9c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V77.3
                  C405.2,76.5,405.8,75.9,406.6,75.9z" className="train-seat__dash"></path>
                    <text transform="matrix(1 0 0 1 381.0696 96.5762)" className="train-seat__text">19</text>
                    <path d="M402,76.5c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V81.7
                  c0-2.9,2.4-5.2,5.2-5.2H402 M402,75.9h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H402c1.7,0,3.1-1.4,3.1-3.1
                  V79.1C405.1,77.3,403.7,75.9,402,75.9L402,75.9z" className="train-seat__border"></path>
                </g>
            </g>
        </svg>
    );
}
