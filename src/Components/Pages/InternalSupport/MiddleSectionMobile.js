import React from "react";
import styled from "styled-components";
import Invest from "../../../assets/img/Brella_Web-refresh_STRATEGY-IN-HOUSE-AGENCY_illustration_Creative-Production-Solutions_MOBILE.png";
import Choose from "../../../assets/img/Brella_Web-refresh_STRATEGY-IN-HOUSE-AGENCY_illustration_SCALABLE-SUSTAINABLE.png";
import { px2vw } from "../../../Utilities/util.js";
import { InvestInCreative, ChooseAScalable } from "./MiddleSectionContent.js";

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
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 1;
  letter-spacing: 2px;
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
  margin: ${px2vw(10)} 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bolder;
  line-height: 0.8;
  letter-spacing: 2px;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    white-space: nowrap;
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
          <img src={Invest} alt="Arrow up" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>INVEST IN</ItemTitle>
            <ItemTitle2>CREATIVE PRODUCTION</ItemTitle2>
            <ItemTitle2>SOLUTIONS</ItemTitle2>
            <InvestInCreative />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={Choose} alt="Brush and color palette" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>CHOOSE A</ItemTitle>
            <ItemTitle2>SCALABLE & SUSTAINABLE</ItemTitle2>
            <ItemTitle2>APPROACH</ItemTitle2>
            <ChooseAScalable />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
