import React from "react";
import styled from "styled-components";
import Forge from "../../../assets/img/Brella_Web-refresh_STRATEGIC-LEARNING_illustration_forge-future_mobile.png";
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
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`;

const ItemImage = styled.div`
  img {
    width: 90%;
    margin-top: ${px2vw(0)};
    margin-left: 10%;
  }

  @media (max-width: 768px) {
    img {
      //width: 60%;
    }
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
  line-height: 0.9;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: ${px2vw(0)} 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  white-space: nowrap;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
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
          <img
            src={Forge}
            alt="Laptop with books"
            loading="lazy"
            style={{ marginLeft: "-5%" }}
          ></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>FORGE</ItemTitle>
            <ItemTitle2>YOUR FUTURE</ItemTitle2>
            <ForgeYourFuture />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(100)}` }}>
          <img
            src={Compliance}
            alt="Illustration of note board"
            loading="lazy"
          ></img>
        </ItemImage>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>COORDINATING</ItemTitle>
            <ItemTitle2>COMPLIANCE</ItemTitle2>
            <Coordinating />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img
            src={Support}
            alt="Customer Support"
            loading="lazy"
            style={{ marginLeft: "0%" }}
          ></img>
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

export default MiddleSectionMobile;
