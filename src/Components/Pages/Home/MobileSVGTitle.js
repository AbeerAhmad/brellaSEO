import React from "react";
import styled from "styled-components";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  width: 70%;
  margin: ${px2vw(calculateMargin(600), screenWidth)} 0 ${px2vw(50)}
    ${px2vw(100)};

  @media (max-width: 768px) {
    margin: ${px2vw(calculateMargin(500), screenWidth)} 0 ${px2vw(100)}
      ${px2vw(110)};
  }
`;

const PathStyle = styled.path`
  color: white;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke: #ffffff;
  stroke-width: 1;
  stroke-linecap: square;
  -webkit-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fillingWhite {
    from {
      fill: #ffffff;
      fill-opacity: 0;
    }
    to {
      fill: #ffffff;
      fill-opacity: 1;
    }
  }
`;

const PathStyleOrange = styled.path`
  color: #f3803b;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke: #f5803a;
  stroke-width: 1;
  stroke-linecap: square;
  -webkit-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes fillingOrange {
    from {
      fill: #f5803a;
      fill-opacity: 0;
    }
    to {
      fill: #f5803a;
      fill-opacity: 1;
    }
  }
`;

const MobileSVGTitle = () => {
  //   const T_1 = document.getElementById("t1");
  //   const T_1Length = T_1?.getTotalLength();
  //   console.log(T_1Length);
  //   const H_1 = document.getElementById("h1");
  //   const H_1Length = H_1?.getTotalLength();
  //   console.log(H_1Length);
  //   const E_1 = document.getElementById("e1");
  //   const E_1Length = E_1?.getTotalLength();
  //   console.log(E_1Length);

  return (
    <>
      <TitleRow>
        <h1>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 403.2 142.9"
          >
            <g>
              <g>
                <PathStyle d="M6.8,21V5.1H3.7V0h12v5.1h-3.3V21H6.8z" />
                <PathStyle d="M26.4,21v-8.5h-2.7V21h-5.7V0h5.7v7.5h2.7V0h5.7v21C32.1,21,26.4,21,26.4,21z" />
                <PathStyle d="M35.5,0H46v4.9h-4.9v2.9h4.4v4.9h-4.4V16H46V21H35.5V0z" />
              </g>
              <g>
                <PathStyle
                  d="M119.4,52.3c6.3,0,8.8,6.3,8.8,11.9c0,5.6-2.5,11.9-8.8,11.9c-6.3,0-8.8-6.3-8.8-11.9
			C110.6,58.6,113.1,52.3,119.4,52.3z M119.4,70.3c2.4,0,2.4-4.7,2.4-6.1c0-1.4-0.1-6.1-2.4-6.1c-2.4,0-2.4,4.7-2.4,6.1
			C117,65.7,117.1,70.3,119.4,70.3z"
                />
                <PathStyle d="M131.2,75.7v-23h11v5.4h-4.8v3.3h4.5v5.4h-4.5v8.8C137.4,75.7,131.2,75.7,131.2,75.7z" />
              </g>
              <g>
                <PathStyleOrange
                  d="M23.1,75.7L22.2,70h-8l-1,5.7H0.9l10.6-44.1h14.6l9.4,44.1H23.1z M20.8,60.7l-1.3-10.2
			c-0.4-2.7-0.6-5.6-0.9-8.3h-0.1c-0.4,2.7-0.6,5.6-1.1,8.3l-1.6,10.2H20.8z"
                />
                <PathStyleOrange
                  d="M57.8,75.7l-6.6-18.4l-0.1,0.1c0.1,2.2,0.2,4.3,0.2,6.5v11.8H39.4V31.6h11.5c10.4,0,17.8,3,17.8,14.7
			c0,4.9-2.1,9.2-6.8,11.1l8.9,18.4C70.8,75.7,57.8,75.7,57.8,75.7z M52.1,52c3.2,0,4.9-2.7,4.9-5.6c0-3.9-2.3-5.5-5.6-5.3V52
			L52.1,52z"
                />
                <PathStyleOrange d="M78,75.7V42.4h-6.6V31.6h25.3v10.8h-6.8v33.3L78,75.7L78,75.7z" />
              </g>
              <g>
                <PathStyle d="M4.1,91.1h25.6v12H17.8v7.1h10.6v12H17.8v7.8h11.8v12H4.1V91.1z" />
                <PathStyle
                  d="M37.8,91.1h13.1l11,30.7l0.1-0.1c-0.5-5.9-1.6-11.7-1.6-17.6v-13h13.2v50.9H60.5l-10.3-29.4l-0.1,0.1
			c0.3,4.8,0.9,9.5,0.9,14.3v14.9H37.8V91.1z"
                />
                <PathStyle
                  d="M118.5,112.6l0.1,2.2c0,12.6-2.4,28.2-18.4,28.2c-15,0-19.9-13.2-19.9-26.1c0-12.6,4.8-26.6,19.7-26.6
			c8.2,0,14.4,5.2,17.4,12.6l-13.3,4.9c-0.1-2-1.5-5.2-3.9-5.2c-6.4,0-5.8,11.7-5.8,15.5c0.2,3.6-0.1,12.6,5.3,12.6
			c3.6,0,4.8-4.3,4.7-7.3h-5.1v-10.7L118.5,112.6L118.5,112.6z"
                />
                <PathStyle
                  d="M146.7,142.1l-1-6.6h-9.3l-1.2,6.6h-14.2l12.2-50.9h16.8l10.8,50.9H146.7z M144.1,124.7l-1.5-11.8
			c-0.4-3.2-0.7-6.4-1-9.6h-0.1c-0.4,3.2-0.7,6.4-1.3,9.6l-1.9,11.8L144.1,124.7L144.1,124.7z"
                />
                <PathStyle
                  d="M202.2,112.6l0.1,2.2c0,12.6-2.4,28.2-18.4,28.2c-15,0-19.9-13.2-19.9-26.1c0-12.6,4.8-26.6,19.7-26.6
			c8.2,0,14.4,5.2,17.4,12.6l-13.3,4.9c-0.1-2-1.5-5.2-3.9-5.2c-6.4,0-5.8,11.7-5.8,15.5c0.2,3.6-0.1,12.6,5.3,12.6
			c3.6,0,4.8-4.3,4.7-7.3H183v-10.7L202.2,112.6L202.2,112.6z"
                />
                <PathStyle d="M208.3,91.1h25.6v12h-11.8v7.1h10.6v12h-10.6v7.8h11.8v12h-25.6L208.3,91.1L208.3,91.1z" />
                <PathStyle
                  d="M278.4,142.1l-1.3-32H277c-0.6,3.7-1.1,7.4-1.8,11.1l-3.9,20.9h-11.2l-4.8-32h-0.1c-0.1,3.8,0,7.5-0.2,11.3
			l-1.2,20.7H239l5.9-50.9h17.2l3.9,27.1h0.1c0.4-3.2,0.7-6.3,1.4-9.5l3.3-17.6h17l4.9,50.9H278.4L278.4,142.1z"
                />
                <PathStyle d="M297.8,91.1h25.6v12h-11.8v7.1h10.6v12h-10.6v7.8h11.8v12h-25.6L297.8,91.1L297.8,91.1z" />
                <PathStyle
                  d="M331.5,91.1h13.1l11,30.7l0.1-0.1c-0.5-5.9-1.6-11.7-1.6-17.6v-13h13.2v50.9h-13.2l-10.3-29.4l-0.1,0.1
			c0.3,4.8,0.9,9.5,0.9,14.3v14.9h-13.2V91.1z"
                />
                <PathStyle d="M380.6,142.1v-38.5H373V91.1h29.2v12.4h-7.9v38.5H380.6z" />
              </g>
            </g>
          </svg>
        </h1>
      </TitleRow>
    </>
  );
};

export default MobileSVGTitle;
