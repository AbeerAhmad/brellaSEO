import React from "react";
import styled from "styled-components";
import Umbrella from "../../../assets/img/Brella_Web-refresh_ABOUT_illo_umbrella_v2.png";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";
import { Founded } from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 50px;
  align-items: center;
  justify-items: center;
  margin-top: ${px2vw(calculateMargin(150), screenWidth)};
  margin-bottom: ${px2vw(calculateMargin(150), screenWidth)};
`;

const ItemImage = styled.div`
  width: 100%;
  img {
    width: 95%;
    margin-top: ${px2vw(-100)};
  }
`;

const ItemContainer = styled.div`
  border-left: #f3803b 4px solid;
  margin-left: ${px2vw(20)};
`;

const ItemContent = styled.div`
  font-size: 1.2rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  margin-left: ${px2vw(20)};
  padding: 0 13% 0 10px;

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const MiddleSection = () => {
  return (
    <>
      <MiddleSectionContainer>
        <ItemImage>
          <img src={Umbrella} alt="Umbrella" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <Founded />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
