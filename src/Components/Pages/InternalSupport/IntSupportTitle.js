import React from "react";
import styled from "styled-components";
import { PageTitleContainer, PageMainTitle } from "../../styles.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(850), screenWidth)} 0 0 ${px2vw(150)};
`;

const IntSupportTitle = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <PageMainTitle style={{ color: "white" }}>UNLOCK THE</PageMainTitle>
        <PageMainTitle>POWER OF PARTNERSHIP</PageMainTitle>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default IntSupportTitle;
