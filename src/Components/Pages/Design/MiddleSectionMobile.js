import React from "react";
import styled from "styled-components";
import Senses from "../../../assets/img/Brella_Web-refresh_PROD-DESIGN_illo_sense_sensibilities.png";
import Interaction from "../../../assets/img/Brella_Web-refresh_PROD-DESIGN_illo_satisfaction-interaction.png";
import { px2vw } from "../../../Utilities/util.js";
import { SensesSensibilities, Satisfaction } from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const ItemImage = styled.div`
  img {
    width: 60%;
    margin-top: ${px2vw(0)};
    margin-left: 40%;
  }
`;

const ItemContainer = styled.div`
  border-left: #f3803b 4px solid;
  margin: ${px2vw(-180)} 0 0 ${px2vw(150)};
`;

const ItemTitle = styled.h2`
  margin: ${px2vw(10)} 0 0 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 1;
  letter-spacing: 2px;
  white-space: nowrap;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: 0 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 2rem;
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

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
  }
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
          <img src={Senses} alt="Hand with pen" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>SENSES</ItemTitle>
            <ItemTitle2>& SENSIBILITIES</ItemTitle2>
            <SensesSensibilities />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={Interaction} alt="Tablet in hands" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>THE SATISFACTION</ItemTitle>
            <ItemTitle2>OF INTERACTION</ItemTitle2>
            <Satisfaction />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
