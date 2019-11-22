import React from 'react';

export default props => {
  const { handleClick, availableSeats, selectedSeats } = props;
  
  return (
    <svg version="1.1" id="Layer_1" pointerEvents="bounding-box" xmlnssvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1140 306.8" style={{enableBackground:"new 0 0 1140 306.8"}} xmlSpace="preserve">
   <g>
     <path className="fill-lightgray" d="M410.7,176.7c7.4,0,13.3,6,13.3,13.3v43.7h-26.7V190C397.4,182.6,403.3,176.7,410.7,176.7 M410.7,175.6
       L410.7,175.6c-7.9,0-14.4,6.4-14.4,14.4v44.7h28.7V190C425.1,182.1,418.6,175.6,410.7,175.6L410.7,175.6z"></path>
     <path className="fill-lightgray" d="M424,72.5v43.7c0,7.4-6,13.3-13.3,13.3c-7.4,0-13.3-6-13.3-13.3V72.5H424 M425.1,71.5h-28.7v44.7
       c0,7.9,6.4,14.4,14.4,14.4h0c7.9,0,14.4-6.4,14.4-14.4V71.5L425.1,71.5z"></path>
     <path className="fill-lightgray" d="M821,176.7c7.4,0,13.3,6,13.3,13.3v43.7h-26.7V190C807.6,182.6,813.6,176.7,821,176.7 M821,175.6L821,175.6
       c-7.9,0-14.4,6.4-14.4,14.4v44.7h28.7V190C835.3,182.1,828.9,175.6,821,175.6L821,175.6z"></path>
     <path className="fill-lightgray" d="M834.3,72.5v43.7c0,7.4-6,13.3-13.3,13.3c-7.4,0-13.3-6-13.3-13.3V72.5H834.3 M835.3,71.5h-28.7v44.7
       c0,7.9,6.4,14.4,14.4,14.4h0c7.9,0,14.4-6.4,14.4-14.4V71.5L835.3,71.5z"></path>
     <path className="fill-lightgray" d="M167.6,72.5c3.3,0,5.9,2.6,5.9,5.9v45.5c0,3.3-2.6,5.9-5.9,5.9h-45.5c-3.3,0-5.9-2.6-5.9-5.9V78.4
       c0-3.3,2.6-5.9,5.9-5.9H167.6 M167.6,71.5h-45.5c-3.8,0-6.9,3.1-6.9,6.9v45.5c0,3.8,3.1,6.9,6.9,6.9h45.5c3.8,0,6.9-3.1,6.9-6.9
       V78.4C174.5,74.6,171.4,71.5,167.6,71.5L167.6,71.5z"></path>
     <polyline className="t60-arrow" points="1107.8,87.6 1123.4,72 1139,87.6 	"></polyline>
     <polyline className="t60-arrow" points="1107.8,218.6 1123.4,234.2 1139,218.6 	"></polyline>
     <polyline className="t60-arrow" points="1123.4,168.7 1139,153.1 1123.4,137.5 	"></polyline>
     <polyline className="t60-arrow" points="16.2,137.9 1,153.1 16.2,168.4 	"></polyline>
     <path className="fill-lightgray" d="M978.6,129.8c-3.3,0-5.9-2.6-5.9-5.9V78.4c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
       c0,3.3-2.6,5.9-5.9,5.9H978.6 M978.6,130.8h45.5c3.8,0,6.9-3.1,6.9-6.9V78.4c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
       v45.5C971.7,127.7,974.8,130.8,978.6,130.8L978.6,130.8z"></path>
     <text  transform="matrix(1 0 0 1 924.4227 108.3323)" className="fill-darkgray svg-helveticabold svg-fontsize">WC</text>
     <path className="fill-lightgray" d="M916.4,129.8c-3.3,0-5.9-2.6-5.9-5.9V78.4c0-3.3,2.6-5.9,5.9-5.9h45.5c3.3,0,5.9,2.6,5.9,5.9v45.5
       c0,3.3-2.6,5.9-5.9,5.9H916.4 M916.4,130.8h45.5c3.8,0,6.9-3.1,6.9-6.9V78.4c0-3.8-3.1-6.9-6.9-6.9h-45.5c-3.8,0-6.9,3.1-6.9,6.9
       v45.5C909.5,127.7,912.6,130.8,916.4,130.8L916.4,130.8z"></path>
     <text  transform="matrix(1 0 0 1 986.6121 108.3323)" className="fill-darkgray svg-helveticabold svg-fontsize">WC</text>
     <path className="fill-darkgray" d="M155.6,108.6c-0.1,0.2-0.1,0.5-0.3,0.7c-0.2,0.3-0.4,0.5-0.7,0.7c-0.6,0.3-1.2,0.5-1.9,0.5
       c-0.3,0-0.5,0.1-0.8,0.1c0-5.4,0-10.8,0-16.2c0.2,0,0.4,0,0.6,0.1c0.3,0,0.5,0.1,0.8,0.1c0.7,0.1,1.4,0.4,1.9,1
       c0.2,0.2,0.3,0.5,0.4,0.9C155.6,100.5,155.6,104.5,155.6,108.6z"></path>
     <path className="fill-darkgray" d="M134.1,96.4c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.4,0.6-0.7,1-0.9c0.5-0.3,1.1-0.4,1.7-0.4c0.2,0,0.4,0,0.6-0.1
       c0,5.4,0,10.8,0,16.2c-0.2,0-0.4,0-0.6-0.1c-0.5-0.1-1-0.1-1.5-0.3c-0.5-0.3-1-0.6-1.3-1.2c0-0.1-0.1-0.2-0.1-0.3
       C134.1,104.6,134.1,100.5,134.1,96.4z"></path>
     <path className="fill-darkgray" d="M150.8,110.7c-4,0.5-8,0.5-11.9,0c0-5.5,0-10.9,0-16.4c0.3,0,0.5-0.1,0.8-0.1c0.2,0,0.4,0,0.5,0
       c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0.1-0.8,0.1-1.2c0.1-0.8,0.8-1.5,1.6-1.5c0.2,0,0.4,0,0.7,0c1.5,0,3.1,0,4.6,0c0.6,0,1.1,0.2,1.5,0.7
       c0.2,0.2,0.3,0.5,0.3,0.8c0,0.4,0.1,0.9,0.1,1.3c0,0.1,0,0.2,0.2,0.2c0.4,0,0.7,0.1,1.1,0.1c0.1,0,0.2,0.1,0.2,0.2
       c0,1.3,0,2.6,0,3.9c0,4,0,8.1,0,12.1C150.8,110.6,150.8,110.7,150.8,110.7z M148.1,94c0-0.4-0.1-0.7-0.1-1.1c0-0.3-0.2-0.5-0.6-0.5
       c-1.7,0-3.4,0-5,0c-0.4,0-0.6,0.2-0.6,0.6c0,0.2,0,0.5-0.1,0.7c0,0.1,0,0.2,0,0.3C143.8,93.8,145.9,93.8,148.1,94z"></path>
     <path className="fill-lightgray" d="M185,183.4c0,2.6,0,5.3,0,7.9c0,1.7-1.3,3-3,3c-5.3,0-10.6,0-15.8,0c-1.7,0-3-1.3-3-3c0-3.7,0-7.4,0-11
       c0-1.6,0-3.1,0-4.7c0-1.8,1.3-3.1,3.1-3.1c1.8,0,3.7,0,5.5,0c3.4,0,6.8,0,10.2,0c1.4,0,2.6,0.9,2.9,2.3c0,0.2,0.1,0.4,0.1,0.6
       c0,1.6,0,3.2,0,4.7C185,181.2,185,182.3,185,183.4C185,183.4,185,183.4,185,183.4z M164.1,183.3
       C164.1,183.3,164.1,183.3,164.1,183.3c0,2.6,0,5.2,0,7.8c0,1.2,0.9,2.2,2.2,2.2c5.2,0,10.4,0,15.6,0c1.3,0,2.2-0.9,2.2-2.2
       c0-3.5,0-7,0-10.5c0-1.7,0-3.5,0-5.2c0-1.3-0.9-2.1-2.2-2.1c-4.2,0-8.3,0-12.5,0c-1.1,0-2.1,0-3.2,0c-1.2,0-2.1,0.9-2.1,2.1
       c0,1.2,0,2.4,0,3.6C164.1,180.5,164.1,181.9,164.1,183.3z"></path>
     <path className="fill-darkgray" d="M180.8,183.4c0,3.7-3,6.7-6.6,6.7c-3.7,0.1-6.8-2.9-6.8-6.6c-0.1-3.8,2.9-6.8,6.6-6.9
       C177.6,176.5,180.8,179.4,180.8,183.4z M173.6,177.6c-2.5,0.1-5.2,2.2-5.3,5.6c-0.1,3.4,2.6,5.8,5.3,5.9c0,0,0-0.1,0-0.1
       c0-0.3,0-0.7,0-1c0-0.3,0.2-0.4,0.4-0.5c0.3,0,0.5,0.2,0.5,0.4c0,0.1,0,0.2,0,0.4c0,0.3,0,0.5,0,0.8c1.3,0,3.5-0.8,4.6-2.9
       c1.1-2.1,1-4.2-0.3-6.1c-1-1.5-2.5-2.3-4.3-2.5c0,0.4,0,0.8,0,1.1c0,0.3-0.2,0.5-0.5,0.5c-0.3,0-0.5-0.2-0.5-0.5
       C173.6,178.3,173.6,178,173.6,177.6z"></path>
     <path className="fill-darkgray" d="M177.1,182.3c0.6,0,1.1,0.5,1,1c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1.1C176,182.8,176.5,182.3,177.1,182.3z"></path>
     <path className="fill-darkgray" d="M170.1,183.4c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1.1,1c0,0.6-0.4,1-1,1C170.6,184.4,170.1,183.9,170.1,183.4z"></path>
     <polyline className="t60-arrow" points="1,87.6 16.6,72 32.2,87.6 	"></polyline>
     <polyline className="t60-arrow" points="1,218.6 16.6,234.2 32.2,218.6 	"></polyline>
   <g className={(availableSeats.includes('36') ? 
      (selectedSeats.includes('36') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('36')}><path d="M588.4,172.7L588.4,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C587,173.4,587.6,172.7,588.4,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 563.4237 193.3829)"  className="train-seat__text">36</text><path d="M563.6,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H563.6 M563.6,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       V196C557.9,199.2,560.5,201.8,563.6,201.8L563.6,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('40') ? 
      (selectedSeats.includes('40') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('40')}><path d="M628.9,172.7L628.9,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C627.5,173.4,628.1,172.7,628.9,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 602.9091 193.3829)"  className="train-seat__text">40</text><path d="M604.1,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H604.1 M604.1,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       V196C598.4,199.2,600.9,201.8,604.1,201.8L604.1,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('42') ? 
      (selectedSeats.includes('42') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('42')}><path d="M669.4,172.7L669.4,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C668,173.4,668.6,172.7,669.4,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 644.3944 193.3829)"  className="train-seat__text">42</text><path d="M644.6,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H644.6 M644.6,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       V196C638.9,199.2,641.4,201.8,644.6,201.8L644.6,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('44') ? 
      (selectedSeats.includes('44') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('44')}><path d="M709.9,172.7L709.9,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C708.5,173.4,709.1,172.7,709.9,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 684.8798 193.3829)"  className="train-seat__text">44</text><path d="M685.1,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H685.1 M685.1,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       V196C679.3,199.2,681.9,201.8,685.1,201.8L685.1,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('48') ? 
      (selectedSeats.includes('48') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('48')}><path d="M750.4,172.7L750.4,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C748.9,173.4,749.6,172.7,750.4,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 725.3651 193.3829)"  className="train-seat__text">48</text><path d="M725.6,201.3c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H725.6 M725.6,201.8h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       V196C719.8,199.2,722.4,201.8,725.6,201.8L725.6,201.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('35') ? 
      (selectedSeats.includes('35') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('35')}><path d="M588.4,205.6L588.4,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C587,206.2,587.6,205.6,588.4,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 563.4237 226.2765)"  className="train-seat__text">35</text><path d="M563.6,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H563.6 M563.6,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C557.9,232.1,560.5,234.7,563.6,234.7L563.6,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('39') ? 
      (selectedSeats.includes('39') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('39')}><path d="M628.9,205.6L628.9,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C627.5,206.2,628.1,205.6,628.9,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 602.9091 226.2765)"  className="train-seat__text">39</text><path d="M604.1,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H604.1 M604.1,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C598.4,232.1,600.9,234.7,604.1,234.7L604.1,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('41') ? 
      (selectedSeats.includes('41') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('41')}><path d="M669.4,205.6L669.4,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C668,206.2,668.6,205.6,669.4,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 644.3944 226.2765)"  className="train-seat__text">41</text><path d="M644.6,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H644.6 M644.6,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C638.9,232.1,641.4,234.7,644.6,234.7L644.6,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('43') ? 
      (selectedSeats.includes('43') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('43')}><path d="M709.9,205.6L709.9,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C708.5,206.2,709.1,205.6,709.9,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 684.8798 226.2765)"  className="train-seat__text">43</text><path d="M685.1,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H685.1 M685.1,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C679.3,232.1,681.9,234.7,685.1,234.7L685.1,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('47') ? 
      (selectedSeats.includes('47') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('47')}><path d="M750.4,205.6L750.4,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C748.9,206.2,749.6,205.6,750.4,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 725.3651 226.2765)"  className="train-seat__text">47</text><path d="M725.6,234.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H725.6 M725.6,234.7h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C719.8,232.1,722.4,234.7,725.6,234.7L725.6,234.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('33') ? 
      (selectedSeats.includes('33') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('33')}><path d="M588.4,71.5L588.4,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C587,72.1,587.6,71.5,588.4,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 562.4246 93.171)"  className="train-seat__text">33</text><path d="M563.6,100.1c-2.9,0-5.2-2.4-5.2-5.2V77.3c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H563.6 M563.6,100.6h20.2c1.7,0,3.1-1.4,3.1-3.1V74.7c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C557.9,98,560.5,100.6,563.6,100.6L563.6,100.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('37') ? 
      (selectedSeats.includes('37') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('37')}><path d="M628.9,71.5L628.9,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C627.5,72.1,628.1,71.5,628.9,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 602.9099 93.171)"  className="train-seat__text">37</text><path d="M604.1,100.1c-2.9,0-5.2-2.4-5.2-5.2V77.3c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H604.1 M604.1,100.6h20.2c1.7,0,3.1-1.4,3.1-3.1V74.7c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C598.4,98,600.9,100.6,604.1,100.6L604.1,100.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('34') ? 
      (selectedSeats.includes('34') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('34')}><path d="M588.4,104.4L588.4,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C587,105,587.6,104.4,588.4,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 562.4246 126.0646)"  className="train-seat__text">34</text><path d="M563.6,133c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H563.6 M563.6,133.5h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C557.9,130.9,560.5,133.5,563.6,133.5L563.6,133.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('38') ? 
      (selectedSeats.includes('38') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('38')}><path d="M628.9,104.4L628.9,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C627.5,105,628.1,104.4,628.9,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 602.9099 126.0646)"  className="train-seat__text">38</text><path d="M604.1,133c-2.9,0-5.2-2.4-5.2-5.2v-17.5c0-2.9,2.4-5.2,5.2-5.2h20.2c1.4,0,2.6,1.2,2.6,2.6v22.8
       c0,1.4-1.2,2.6-2.6,2.6H604.1 M604.1,133.5h20.2c1.7,0,3.1-1.4,3.1-3.1v-22.8c0-1.7-1.4-3.1-3.1-3.1h-20.2c-3.2,0-5.8,2.6-5.8,5.8
       v17.5C598.4,130.9,600.9,133.5,604.1,133.5L604.1,133.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('21') ? 
      (selectedSeats.includes('21') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('21')}><path d="M354.1,234.7L354.1,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C355.6,234,354.9,234.7,354.1,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 360.5211 227.2761)"  className="train-seat__text">21</text><path d="M378.9,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H378.9 M378.9,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C384.7,208.2,382.1,205.6,378.9,205.6L378.9,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('15') ? 
      (selectedSeats.includes('15') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('15')}><path d="M313.6,234.7L313.6,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C315.1,234,314.4,234.7,313.6,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 320.0357 227.2761)"  className="train-seat__text">15</text><path d="M338.4,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H338.4 M338.4,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C344.2,208.2,341.6,205.6,338.4,205.6L338.4,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('11') ? 
      (selectedSeats.includes('11') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('11')}><path d="M273.1,234.7L273.1,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C274.6,234,273.9,234.7,273.1,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 279.5504 227.2761)"  className="train-seat__text">11</text><path d="M298,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H298 M298,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H298c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C303.7,208.2,301.1,205.6,298,205.6L298,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('7') ? 
      (selectedSeats.includes('7') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('7')}><path d="M232.7,234.7L232.7,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C234.1,234,233.5,234.7,232.7,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 239.065 227.2761)"  className="train-seat__text">07</text><path d="M257.5,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H257.5 M257.5,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C263.2,208.2,260.6,205.6,257.5,205.6L257.5,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('3') ? 
      (selectedSeats.includes('3') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('3')}><path d="M192.2,234.7L192.2,234.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C193.6,234,193,234.7,192.2,234.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 198.5797 227.2761)"  className="train-seat__text">03</text><path d="M217,206.1c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H217 M217,205.6h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H217c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C222.7,208.2,220.2,205.6,217,205.6L217,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('22') ? 
      (selectedSeats.includes('22') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('22')}><path d="M354.1,201.8L354.1,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C355.6,201.1,354.9,201.8,354.1,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 360.5211 194.3826)"  className="train-seat__text">22</text><path d="M378.9,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H378.9 M378.9,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C384.7,175.3,382.1,172.7,378.9,172.7L378.9,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('16') ? 
      (selectedSeats.includes('16') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('16')}><path d="M313.6,201.8L313.6,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C315.1,201.1,314.4,201.8,313.6,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 320.0357 194.3826)"  className="train-seat__text">16</text><path d="M338.4,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H338.4 M338.4,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C344.2,175.3,341.6,172.7,338.4,172.7L338.4,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('12') ? 
      (selectedSeats.includes('12') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('12')}><path d="M273.1,201.8L273.1,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C274.6,201.1,273.9,201.8,273.1,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 279.5504 194.3826)"  className="train-seat__text">12</text><path d="M298,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H298 M298,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H298c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C303.7,175.3,301.1,172.7,298,172.7L298,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('8') ? 
      (selectedSeats.includes('8') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('8')}><path d="M232.7,201.8L232.7,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C234.1,201.1,233.5,201.8,232.7,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 239.065 194.3826)"  className="train-seat__text">08</text><path d="M257.5,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H257.5 M257.5,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C263.2,175.3,260.6,172.7,257.5,172.7L257.5,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('4') ? 
      (selectedSeats.includes('4') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('4')}><path d="M192.2,201.8L192.2,201.8c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C193.6,201.1,193,201.8,192.2,201.8z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 198.5797 194.3826)"  className="train-seat__text">04</text><path d="M217,173.2c2.9,0,5.2,2.4,5.2,5.2V196c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H217 M217,172.7h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H217c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C222.7,175.3,220.2,172.7,217,172.7L217,172.7z" className="train-seat__border"></path></g><g className={(availableSeats.includes('18') ? 
      (selectedSeats.includes('18') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('18')}><path d="M354.1,133.5L354.1,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
           C355.6,132.8,354.9,133.5,354.1,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 360.2713 126.0646)"  className="train-seat__text">18</text><path d="M378.9,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H378.9 M378.9,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C384.7,107,382.1,104.4,378.9,104.4L378.9,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('14') ? 
      (selectedSeats.includes('14') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('14')}><path d="M313.6,133.5L313.6,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
           C315.1,132.8,314.4,133.5,313.6,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 319.7859 126.0646)"  className="train-seat__text">14</text><path d="M338.4,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H338.4 M338.4,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C344.2,107,341.6,104.4,338.4,104.4L338.4,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('10') ? 
      (selectedSeats.includes('10') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('10')}><path d="M273.1,133.5L273.1,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
           C274.6,132.8,273.9,133.5,273.1,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 279.5506 126.0646)"  className="train-seat__text">10</text><path d="M298,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H298 M298,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H298c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C303.7,107,301.1,104.4,298,104.4L298,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('6') ? 
      (selectedSeats.includes('6') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('6')}><path d="M232.7,133.5L232.7,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4V132
           C234.1,132.8,233.5,133.5,232.7,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 239.0652 126.0646)"  className="train-seat__text">06</text><path d="M257.5,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H257.5 M257.5,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C263.2,107,260.6,104.4,257.5,104.4L257.5,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('2') ? 
      (selectedSeats.includes('2') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('2')}><path d="M192.2,133.5L192.2,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4V132
           C193.6,132.8,193,133.5,192.2,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 198.5809 126.0646)"  className="train-seat__text">02</text><path d="M217,104.9c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6v-22.8
           c0-1.4,1.2-2.6,2.6-2.6H217 M217,104.4h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H217c3.2,0,5.8-2.6,5.8-5.8
           v-17.5C222.7,107,220.2,104.4,217,104.4L217,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('17') ? 
      (selectedSeats.includes('17') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('17')}><path d="M354.1,100.6L354.1,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C355.6,99.9,354.9,100.6,354.1,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 360.2713 93.171)"  className="train-seat__text">17</text><path d="M378.9,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
           c0-1.4,1.2-2.6,2.6-2.6H378.9 M378.9,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.3C384.7,74.1,382.1,71.5,378.9,71.5L378.9,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('13') ? 
      (selectedSeats.includes('13') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('13')}><path d="M313.6,100.6L313.6,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C315.1,99.9,314.4,100.6,313.6,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 319.7859 93.171)"  className="train-seat__text">13</text><path d="M338.4,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
           c0-1.4,1.2-2.6,2.6-2.6H338.4 M338.4,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.3C344.2,74.1,341.6,71.5,338.4,71.5L338.4,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('9') ? 
      (selectedSeats.includes('9') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('9')}><path d="M273.1,100.6L273.1,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C274.6,99.9,273.9,100.6,273.1,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 279.5506 93.171)"  className="train-seat__text">09</text><path d="M298,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
           c0-1.4,1.2-2.6,2.6-2.6H298 M298,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H298c3.2,0,5.8-2.6,5.8-5.8V77.3
           C303.7,74.1,301.1,71.5,298,71.5L298,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('5') ? 
      (selectedSeats.includes('5') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('5')}><path d="M232.7,100.6L232.7,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5l0,0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C234.1,99.9,233.5,100.6,232.7,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 239.0652 93.171)"  className="train-seat__text">05</text><path d="M257.5,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
           c0-1.4,1.2-2.6,2.6-2.6H257.5 M257.5,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1h20.2c3.2,0,5.8-2.6,5.8-5.8
           V77.3C263.2,74.1,260.6,71.5,257.5,71.5L257.5,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('1') ? 
      (selectedSeats.includes('1') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('1')}><path d="M192.2,100.6L192.2,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
           C193.6,99.9,193,100.6,192.2,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 198.5809 93.171)"  className="train-seat__text">01</text><path d="M217,72c2.9,0,5.2,2.4,5.2,5.2v17.5c0,2.9-2.4,5.2-5.2,5.2h-20.2c-1.4,0-2.6-1.2-2.6-2.6V74.6
           c0-1.4,1.2-2.6,2.6-2.6H217 M217,71.5h-20.2c-1.7,0-3.1,1.4-3.1,3.1v22.8c0,1.7,1.4,3.1,3.1,3.1H217c3.2,0,5.8-2.6,5.8-5.8V77.3
           C222.7,74.1,220.2,71.5,217,71.5L217,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('31') ? 
      (selectedSeats.includes('31') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('31')}><path d="M546.7,205.6L546.7,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C545.3,206.2,545.9,205.6,546.7,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 521.1884 226.2765)"  className="train-seat__text">31</text><path d="M542.1,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H542.1 M542.1,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C545.3,207,543.9,205.6,542.1,205.6L542.1,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('27') ? 
      (selectedSeats.includes('27') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('27')}><path d="M506.2,205.6L506.2,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C504.8,206.2,505.4,205.6,506.2,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 480.703 226.2765)"  className="train-seat__text">27</text><path d="M501.7,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H501.7 M501.7,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C504.8,207,503.4,205.6,501.7,205.6L501.7,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('23') ? 
      (selectedSeats.includes('23') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('23')}><path d="M465.8,205.6L465.8,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C464.3,206.2,465,205.6,465.8,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 440.2186 226.2765)"  className="train-seat__text">23</text><path d="M461.2,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H461.2 M461.2,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C464.3,207,462.9,205.6,461.2,205.6L461.2,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('32') ? 
      (selectedSeats.includes('32') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('32')}><path d="M546.7,172.7L546.7,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C545.3,173.4,545.9,172.7,546.7,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 521.1884 193.3829)"  className="train-seat__text">32</text><path d="M542.1,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H542.1 M542.1,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C545.3,174.1,543.9,172.8,542.1,172.8L542.1,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('28') ? 
      (selectedSeats.includes('28') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('28')}><path d="M506.2,172.7L506.2,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C504.8,173.4,505.4,172.7,506.2,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 480.703 193.3829)"  className="train-seat__text">28</text><path d="M501.7,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H501.7 M501.7,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C504.8,174.1,503.4,172.8,501.7,172.8L501.7,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('24') ? 
      (selectedSeats.includes('24') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('24')}><path d="M465.8,172.7L465.8,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C464.3,173.4,465,172.7,465.8,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 440.2186 193.3829)"  className="train-seat__text">24</text><path d="M461.2,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H461.2 M461.2,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C464.3,174.1,462.9,172.8,461.2,172.8L461.2,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('30') ? 
      (selectedSeats.includes('30') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('30')}><path d="M546.7,104.4L546.7,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C545.3,105,545.9,104.4,546.7,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 520.9392 126.0646)"  className="train-seat__text">30</text><path d="M542.1,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H542.1 M542.1,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C545.3,105.8,543.9,104.4,542.1,104.4L542.1,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('26') ? 
      (selectedSeats.includes('26') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('26')}><path d="M506.2,104.4L506.2,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C504.8,105,505.4,104.4,506.2,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 480.4539 126.0646)"  className="train-seat__text">26</text><path d="M501.7,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H501.7 M501.7,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C504.8,105.8,503.4,104.4,501.7,104.4L501.7,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('20') ? 
      (selectedSeats.includes('20') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('20')}><path d="M465.8,104.4L465.8,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C464.3,105,465,104.4,465.8,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 440.7567 126.0646)"  className="train-seat__text">20</text><path d="M461.2,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H461.2 M461.2,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       v-22.8C464.3,105.8,462.9,104.4,461.2,104.4L461.2,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('29') ? 
      (selectedSeats.includes('29') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('29')}><path d="M546.7,71.5L546.7,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C545.3,72.1,545.9,71.5,546.7,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 520.9392 93.171)"  className="train-seat__text">29</text><path d="M542.1,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
       c0-2.9,2.4-5.2,5.2-5.2H542.1 M542.1,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       V74.7C545.3,72.9,543.9,71.5,542.1,71.5L542.1,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('25') ? 
      (selectedSeats.includes('25') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('25')}><path d="M506.2,71.5L506.2,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C504.8,72.1,505.4,71.5,506.2,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 480.4539 93.171)"  className="train-seat__text">25</text><path d="M501.7,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
       c0-2.9,2.4-5.2,5.2-5.2H501.7 M501.7,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       V74.7C504.8,72.9,503.4,71.5,501.7,71.5L501.7,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('19') ? 
      (selectedSeats.includes('19') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('19')}><path d="M465.8,71.5L465.8,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C464.3,72.1,465,71.5,465.8,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 440.7567 93.171)"  className="train-seat__text">19</text><path d="M461.2,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
       c0-2.9,2.4-5.2,5.2-5.2H461.2 M461.2,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8h20.2c1.7,0,3.1-1.4,3.1-3.1
       V74.7C464.3,72.9,462.9,71.5,461.2,71.5L461.2,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('51') ? 
      (selectedSeats.includes('51') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('51')}><path d="M875.6,205.6L875.6,205.6c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V207
       C874.2,206.2,874.8,205.6,875.6,205.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 850.0651 227.2795)"  className="train-seat__text">51</text><path d="M871,206.2c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H871 M871,205.6h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H871c1.7,0,3.1-1.4,3.1-3.1v-22.8
       C874.1,207,872.7,205.6,871,205.6L871,205.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('52') ? 
      (selectedSeats.includes('52') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('52')}><path d="M875.6,172.7L875.6,172.7c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C874.2,173.4,874.8,172.7,875.6,172.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 850.0651 194.386)"  className="train-seat__text">52</text><path d="M871,173.3c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H871 M871,172.8h-20.2c-3.2,0-5.8,2.6-5.8,5.8V196c0,3.2,2.6,5.8,5.8,5.8H871c1.7,0,3.1-1.4,3.1-3.1v-22.8
       C874.1,174.1,872.7,172.8,871,172.8L871,172.8z" className="train-seat__border"></path></g><g className={(availableSeats.includes('48') ? 
      (selectedSeats.includes('48') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('48')}><path d="M875.6,104.4L875.6,104.4c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4v-26.2
       C874.2,105,874.8,104.4,875.6,104.4z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 850.0651 125.0667)"  className="train-seat__text">48</text><path d="M871,104.9c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2v-17.5
       c0-2.9,2.4-5.2,5.2-5.2H871 M871,104.4h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H871c1.7,0,3.1-1.4,3.1-3.1v-22.8
       C874.1,105.8,872.7,104.4,871,104.4L871,104.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('47') ? 
      (selectedSeats.includes('47') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('47')}><path d="M875.6,71.5L875.6,71.5c2,0,3.5,1.6,3.5,3.5v22c0,2-1.6,3.5-3.5,3.5l0,0c-0.8,0-1.4-0.6-1.4-1.4V72.9
       C874.2,72.1,874.8,71.5,875.6,71.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 850.0651 92.1731)"  className="train-seat__text">47</text><path d="M871,72c1.4,0,2.6,1.2,2.6,2.6v22.8c0,1.4-1.2,2.6-2.6,2.6h-20.2c-2.9,0-5.2-2.4-5.2-5.2V77.3
       c0-2.9,2.4-5.2,5.2-5.2H871 M871,71.5h-20.2c-3.2,0-5.8,2.6-5.8,5.8v17.5c0,3.2,2.6,5.8,5.8,5.8H871c1.7,0,3.1-1.4,3.1-3.1V74.7
       C874.1,72.9,872.7,71.5,871,71.5L871,71.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('45') ? 
      (selectedSeats.includes('45') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('45')}><path d="M763.9,100.6L763.9,100.6c-2,0-3.5-1.6-3.5-3.5V75c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
       C765.3,99.9,764.7,100.6,763.9,100.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 769.8552 92.1718)"  className="train-seat__text">45</text><path d="M768.4,100c-1.4,0-2.6-1.2-2.6-2.6V74.6c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
       c0,2.9-2.4,5.2-5.2,5.2H768.4 M768.4,100.5h20.2c3.2,0,5.8-2.6,5.8-5.8V77.3c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
       v22.8C765.3,99.1,766.7,100.5,768.4,100.5L768.4,100.5z" className="train-seat__border"></path></g><g className={(availableSeats.includes('46') ? 
      (selectedSeats.includes('46') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('46')}><path d="M763.9,133.5L763.9,133.5c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4V132
       C765.3,132.8,764.7,133.5,763.9,133.5z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 769.8552 125.0653)"  className="train-seat__text">46</text><path d="M768.4,132.9c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
       c0,2.9-2.4,5.2-5.2,5.2H768.4 M768.4,133.4h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
       v22.8C765.3,132,766.7,133.4,768.4,133.4L768.4,133.4z" className="train-seat__border"></path></g><g className={(availableSeats.includes('50') ? 
      (selectedSeats.includes('50') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('50')}><path d="M763.9,201.7L763.9,201.7c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
       C765.3,201,764.7,201.7,763.9,201.7z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 769.8532 193.2734)"  className="train-seat__text">50</text><path d="M768.4,201.1c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
       c0,2.9-2.4,5.2-5.2,5.2H768.4 M768.4,201.6h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
       v22.8C765.3,200.2,766.7,201.6,768.4,201.6L768.4,201.6z" className="train-seat__border"></path></g><g className={(availableSeats.includes('49') ? 
      (selectedSeats.includes('49') ? 'selected' : 'available')
      : 'disabled') + ' train-seat'} onClick={() => props.handleClick('49')}><path d="M763.9,234.6L763.9,234.6c-2,0-3.5-1.6-3.5-3.5v-22c0-2,1.6-3.5,3.5-3.5h0c0.8,0,1.4,0.6,1.4,1.4v26.2
       C765.3,233.9,764.7,234.6,763.9,234.6z" className="train-seat__dash"></path><text transform="matrix(1 0 0 1 769.8532 226.167)"  className="train-seat__text">49</text><path d="M768.4,234c-1.4,0-2.6-1.2-2.6-2.6v-22.8c0-1.4,1.2-2.6,2.6-2.6h20.2c2.9,0,5.2,2.4,5.2,5.2v17.5
       c0,2.9-2.4,5.2-5.2,5.2H768.4 M768.4,234.5h20.2c3.2,0,5.8-2.6,5.8-5.8v-17.5c0-3.2-2.6-5.8-5.8-5.8h-20.2c-1.7,0-3.1,1.4-3.1,3.1
       v22.8C765.3,233.1,766.7,234.5,768.4,234.5L768.4,234.5z" className="train-seat__border"></path></g></g>
   <g id="zwquE5_1_">
     <g>
       <path className="fill-darkgray" d="M695.9,118.3c-6.5,0-12.9,0-19.4,0c-3.8,0-6.3-3-5.2-6.6c0.4-1.2,1.5-2.4,2.6-3.1c6.1-4,12.4-7.9,18.6-11.8
         c0.8-0.5,1.4-1,1.2-2.1c-0.2-1.9,0.5-3.3,2.2-4.1c0.2-0.1,0.3-0.2,0.5-0.4c0.9-0.5,1.8-1.3,1.2-2.2c-0.4-0.6-1.5-1-2.3-1.1
         c-1.1-0.1-1.8,0.6-2,1.8c-0.1,0.9,0.1,1.9-1.3,2.1c-2.4,0.3-3.1-0.4-2.7-2.7c0.6-3.2,3.1-5.4,6.4-5.3c3.2,0.1,5.9,2.3,6.2,5.3
         c0.2,1.9-0.5,3.5-2,4.7c-0.5,0.4-1,0.6-1.4,1c-1.2,1-1.1,2.1,0.2,2.9c6.4,4,12.8,8,19.2,12c2,1.2,2.9,3,2.7,5.3
         c-0.3,2.7-2.4,4.4-5.4,4.5C708.8,118.3,702.3,118.3,695.9,118.3z M695.9,114c6.3,0,12.5,0,18.8,0c0.5,0,1.1-0.4,1.6-0.7
         c-0.3-0.5-0.6-1.1-1-1.4c-6.1-3.9-12.2-7.6-18.2-11.5c-0.9-0.5-1.4-0.5-2.2,0.1c-1.9,1.3-3.9,2.5-5.9,3.7
         c-4.1,2.6-8.3,5.2-12.4,7.8c-0.4,0.3-0.6,0.9-0.8,1.3c0.4,0.2,0.8,0.5,1.3,0.6c0.4,0.1,0.8,0,1.3,0C684.1,114,690,114,695.9,114z"></path>
     </g>
   </g>
   </svg>
   
  );
}
