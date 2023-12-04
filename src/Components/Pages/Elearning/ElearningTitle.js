import React from "react";
import styled from "styled-components";
import { PageTitleContainer, PageMainTitle } from "../../styles.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(920), screenWidth)} 0 0 ${px2vw(150)};
`;

const ElearningTitle = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <PageMainTitle style={{ color: "white" }}>LEARNING</PageMainTitle>
        <PageMainTitle>WITHOUT LIMITS</PageMainTitle>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default ElearningTitle;
