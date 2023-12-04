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
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin-top: ${px2vw(calculateMargin(50), screenWidth)};
  margin-bottom: ${px2vw(calculateMargin(200), screenWidth)};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemImage = styled.div`
  img {
    width: 60%;
    margin-top: ${px2vw(0)};
    margin-left: 0%;
  }
`;

const ItemContainer = styled.div`
  border-left: #f3803b 4px solid;
  margin: ${px2vw(-180)} 0 0 ${px2vw(250)};
`;

const ItemContent = styled.div`
  font-size: 1.2rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  margin-left: ${px2vw(20)};
  padding: 0 20px 0 10px;
`;

const MiddleSectionMobile = () => {
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

export default MiddleSectionMobile;
