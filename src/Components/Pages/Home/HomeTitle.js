import React from "react";
import useViewport from "CustomHooks/UseViewport.js";
import styled from "styled-components";
import { PageTitleContainer } from "../../styles.js";
import {
  px2vw,
  px2vh,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";
import MobileSVGTitle from "./MobileSVGTitle.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(580), screenWidth)} 0 0 ${px2vw(80)};

  /* @media (max-width: 768px) {
    margin: ${px2vw(calculateMargin(150), screenWidth)} 0 0 ${px2vw(80)};
  } */

  @media (max-width: 425px) {
    margin: ${px2vw(calculateMargin(-100), screenWidth)} 0 0 ${px2vw(80)};
  }

  @media (max-width: 375px) {
    margin: ${px2vw(calculateMargin(-250), screenWidth)} 0 0 ${px2vw(80)};
  }

  @media (max-width: 320px) {
    margin: ${px2vw(calculateMargin(-600), screenWidth)} 0 0 ${px2vw(80)};
  }
`;

const TitleContent = styled.text`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
  animation: headlineAnimation 1.2s ease-out;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    stroke-width: 2;
  }

  @media (max-width: 425px) {
    font-size: 3.2rem;
    letter-spacing: 3px;
    font-weight: normal;
  }

  @media (max-width: 375px) {
    font-size: 2.7rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 9rem;
  }

  @keyframes headlineAnimation {
    0% {
      filter: blur(15px);
      transform: translate(0px, 20px);
    }
    80% {
      filter: blur(0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

const LineOne = styled.tspan`
  font-size: 4rem;
  color: white;
  letter-spacing: 2px;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke: #ffffff;
  stroke-width: 1;
  stroke-linecap: square;
  transform: translate(0);
  -webkit-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 3.5rem;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 3.5rem;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    //stroke-width: 2;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: normal;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
  }

  @media (min-width: 2560px) {
    font-size: 5rem;
  }

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

const LineTwo = styled.tspan`
  font-size: 7rem;
  color: #f3803b;
  font-weight: bold;
  fill: none;
  letter-spacing: 2px;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke: #f5803a;
  stroke-width: 1;
  stroke-linecap: square;
  transform: translate(0);
  -webkit-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingOrange 4s ease-in forwards;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 6rem;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 6rem;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    //stroke-width: 2;
    /* stroke-dasharray: 100;
    stroke-dashoffset: 100; */
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 425px) {
    font-size: 3rem;
    font-weight: normal;
  }

  @media (max-width: 375px) {
    font-size: 2.8rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 9rem;
  }

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

const LineTwoSpan = styled.tspan`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 4rem;
  font-weight: bold;
  font-style: normal;
  fill: none;
  color: #ffffff;
  letter-spacing: 2px;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  stroke: #ffffff;
  stroke-width: 1;
  stroke-linecap: square;
  transform: translate(0);
  -webkit-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;

  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 3.5rem;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 3.5rem;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    //stroke-width: 2;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
    font-weight: normal;
    /* stroke-dasharray: 100;
    stroke-dashoffset: 100; */
  }

  @media (min-width: 2560px) {
    font-size: 5rem;
  }

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

const LineThree = styled.tspan`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 7rem;
  font-weight: bold;
  font-style: normal;
  fill: none;
  color: white;
  letter-spacing: 2px;
  stroke-dasharray: 800;
  stroke-dashoffset: 800;
  stroke: #ffffff;
  stroke-width: 1;
  stroke-linecap: square;
  transform: translate(0);
  -webkit-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -moz-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  -o-animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;
  animation: dash 5s linear forwards, fillingWhite 4s ease-in forwards;

  @media (max-width: 1200px) {
    font-size: 6rem;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 6rem;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 6rem;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    //stroke-width: 2;
    stroke-dasharray: 250;
    stroke-dashoffset: 250;
  }

  @media (max-width: 425px) {
    font-size: 3.4rem;
    font-weight: normal;
  }

  @media (max-width: 375px) {
    font-size: 2.9rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
    line-height: 0.5;
  }

  @media (min-width: 2560px) {
    font-size: 9rem;
  }

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

const CraftingContainer = styled.div`
  margin: ${px2vh(calculateMargin(-50), screenWidth)} 0 0 ${px2vw(90)};

  @media (max-width: 425px) {
    margin: ${px2vh(calculateMargin(-80), screenWidth)} 0 0 ${px2vw(140)};
  }

  @media (max-width: 375px) {
    margin: ${px2vh(calculateMargin(-70), screenWidth)} 0 0 ${px2vw(160)};
  }

  @media (max-width: 320px) {
    margin: ${px2vh(calculateMargin(-50), screenWidth)} 0 0 ${px2vw(160)};
  }

  @media (min-width: 768px) {
    margin: ${px2vh(calculateMargin(-100), screenWidth)} 0 0 ${px2vw(120)};
  }

  @media (min-width: 1024px) {
    margin: ${px2vh(calculateMargin(-50), screenWidth)} 0 0 ${px2vw(105)};
  }

  @media (min-width: 1440px) {
    margin: ${px2vw(calculateMargin(-200), screenWidth)} 0 0 ${px2vw(100)};
  }

  @media (min-width: 2560px) {
    margin: ${px2vh(calculateMargin(-150), screenWidth)} 0 0 ${px2vw(90)};
  }
`;

const CraftingTitle = styled.h3`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  color: black;
  animation-name: headlineAnimation;
  animation-timing-function: ease-out;
  animation-duration: 1.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media (max-width: 425px) {
    font-size: 1.3rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
  }

  @keyframes headlineAnimation {
    0% {
      filter: blur(15px);
      transform: translate(0px, 20px);
    }
    80% {
      filter: blur(0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

const HomeTitle = () => {
  const { width } = useViewport();

  return (
    <PageTitleContainer>
      {width <= 1024 && width > 428 ? (
        <MobileSVGTitle />
      ) : (
        <TitleRow>
          <h1>
            {width < 286 ? (
              <svg width="100%" height="300px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="200" dy="-1.7em" id={"the"}>
                    THE
                  </LineOne>
                  <LineTwo x="20" y="200" id={"art"}>
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan id={"of"}>OF</LineTwoSpan>
                  <LineThree x="20" y="200" dy="1.2em" id={"engagement"}>
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 322 ? (
              <svg width="100%" height="300px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="230" dy="-1.7em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="230">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>
                  <LineThree x="20" y="230" dy="1.2em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 378 ? (
              <svg width="100%" height="310px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="210" dy="-2em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="210">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="210" dy="1.1em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 428 ? (
              <svg width="100%" height="320px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="210" dy="-2.1em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="210">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="210" dy="1.1em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 780 ? (
              <svg width="100%" height="350px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="200" dy="-1.7em" id={"the"}>
                    THE
                  </LineOne>
                  <LineTwo x="20" y="200" id={"art"}>
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan id={"of"}>OF</LineTwoSpan>

                  <LineThree x="20" y="200" dy="1.1em" id={"engagement"}>
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 860 ? (
              <svg width="100%" height="350px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="140" dy="-1.7em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="140">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="130" dy="1.1em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width < 1026 ? (
              <svg width="100%" height="350px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="110" dy="-1.2em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="140">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="130" dy="1.2em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : width >= 1440 ? (
              <svg width="100%" height="550px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="220" dy="-2em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="220">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="220" dy="1.2em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            ) : (
              <svg width="100%" height="350px">
                <TitleContent x="50%" y="50%">
                  <LineOne x="20" y="200" dy="-1.7em">
                    THE
                  </LineOne>
                  <LineTwo x="20" y="200">
                    ART{" "}
                  </LineTwo>
                  <LineTwoSpan>OF</LineTwoSpan>

                  <LineThree x="20" y="200" dy="1em">
                    ENGAGEMENT
                  </LineThree>
                </TitleContent>
              </svg>
            )}
          </h1>
        </TitleRow>
      )}
      <CraftingContainer>
        <CraftingTitle>
          CRAFTING COMMUNICATIONS AND DIGITAL LEARNING SOLUTIONS
        </CraftingTitle>
      </CraftingContainer>
    </PageTitleContainer>
  );
};

export default HomeTitle;
