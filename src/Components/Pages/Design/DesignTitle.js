import React from "react";
import styled from "styled-components";
import { PageTitleContainer, PageMainTitle } from "../../styles.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(calculateMargin(950), screenWidth)} 0 0 ${px2vw(150)};
`;

const DesignTitle = () => {
  return (
    <PageTitleContainer>
      <TitleRow>
        <PageMainTitle style={{ color: "white" }}>CONNECTION</PageMainTitle>
        <PageMainTitle>THROUGH CREATIVITY</PageMainTitle>
      </TitleRow>
    </PageTitleContainer>
  );
};

export default DesignTitle;
