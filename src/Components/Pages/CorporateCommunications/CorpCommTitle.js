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

const CorpCommTitle = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <PageMainTitle style={{ color: "white" }}>CRUCIAL</PageMainTitle>
        <PageMainTitle>CONNECTIONS</PageMainTitle>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default CorpCommTitle;
