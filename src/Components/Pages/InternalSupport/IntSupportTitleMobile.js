import React from "react";
import styled from "styled-components";
import { PageTitleContainer, PageMainTitle } from "../../styles.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(1000), screenWidth)} 0 0 ${px2vw(140)};
`;

const IntSupportTitleMobile = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <PageMainTitle style={{ color: "white" }}>UNLOCK</PageMainTitle>
        <PageMainTitle> THE POWER</PageMainTitle>
        <PageMainTitle>OF PARTNERSHIP</PageMainTitle>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default IntSupportTitleMobile;
