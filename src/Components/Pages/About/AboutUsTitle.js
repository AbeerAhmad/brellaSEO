import React from "react";
import styled from "styled-components";
import { PageTitleContainer } from "../../styles.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(920), screenWidth)} 0 0 ${px2vw(150)};
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #f3803b;
  line-height: 1;
  text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);
  animation-name: headlineAnimation;
  animation-timing-function: ease-out;
  animation-duration: 1.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

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

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 10rem;
  }
`;

const AboutUsTitle = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <Title style={{ color: "white" }}>
          ABOUT <span style={{ color: "#f3803b" }}>US</span>
        </Title>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default AboutUsTitle;
