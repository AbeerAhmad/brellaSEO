import React from "react";
import styled from "styled-components";
import Forge from "../../../assets/img/Brella_Web-refresh_STRATEGIC-LEARNING_illustration_forge-future.png";
import Compliance from "../../../assets/img/Brella_Web-refresh_STRATEGIC-LEARNING_illustration_coordinating-compliance.png";
import Support from "../../../assets/img/Brella_Web-refresh_STRATEGIC-LEARNING_illustration_customer-service.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  ForgeYourFuture,
  Coordinating,
  Customize,
} from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px 50px;
  align-items: center;
  justify-items: center;
  margin-top: 150px;
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
  margin-left: ${px2vw(0)};
`;

const ItemTitle = styled.h2`
  margin: ${px2vw(10)} 0 0 0;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 1;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 960px) {
    font-size: 1.9rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: ${px2vw(0)} 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  white-space: nowrap;
  letter-spacing: 2px;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (max-width: 960px) {
    font-size: 1.9rem;
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
          <img src={Forge} alt="Laptop with books" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>FORGE</ItemTitle>
            <ItemTitle2>YOUR FUTURE</ItemTitle2>
            <ForgeYourFuture />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>COORDINATING</ItemTitle>
            <ItemTitle2>COMPLIANCE</ItemTitle2>
            <Coordinating />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(100)}` }}>
          <img
            src={Compliance}
            alt="Illustration of note board"
            loading="lazy"
          ></img>
        </ItemImage>
        <ItemImage>
          <img src={Support} alt="Customer Support" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>CUSTOMIZE YOUR</ItemTitle>
            <ItemTitle2>CUSTOMER SUPPORT</ItemTitle2>
            <Customize />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
