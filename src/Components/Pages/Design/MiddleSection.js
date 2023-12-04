import React from "react";
import styled from "styled-components";
import Senses from "../../../assets/img/Brella_Web-refresh_PROD-DESIGN_illo_sense_sensibilities.png";
import Interaction from "../../../assets/img/Brella_Web-refresh_PROD-DESIGN_illo_satisfaction-interaction.png";
import { px2vw } from "../../../Utilities/util.js";
import { SensesSensibilities, Satisfaction } from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 50px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
`;

const ItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    margin-top: ${px2vw(-100)};
  }
`;

const ItemContainer = styled.div`
  border-left: #f3803b 4px solid;
  margin-left: ${px2vw(20)};
`;

const ItemTitle = styled.h2`
  margin: ${px2vw(10)} 0 0 0;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 0.7;
  letter-spacing: 2px;
  white-space: nowrap;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: 9px 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  white-space: nowrap;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
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
          <img src={Senses} alt="Hand with pen" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>SENSES</ItemTitle>
            <ItemTitle2>& SENSIBILITIES</ItemTitle2>
            <SensesSensibilities />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>THE SATISFACTION</ItemTitle>
            <ItemTitle2>OF INTERACTION</ItemTitle2>
            <Satisfaction />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(100)}` }}>
          <img src={Interaction} alt="Tablet in hands" loading="lazy"></img>
        </ItemImage>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
