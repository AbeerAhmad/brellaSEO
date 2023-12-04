import React from "react";
import styled from "styled-components";
import Laptop from "../../../assets/img/Brella_Web-refresh_eLEARNING_illustration_LAPTOP-WITH-BOOKS_MOBILE.png";
import Target from "../../../assets/img/Brella_Web-refresh_eLEARNING_illustration_TARGET.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  EncourageInstruct,
  TargetedSolutions,
} from "./MiddleSectionContent.js";

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
  line-height: 0.9;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: ${px2vw(0)} 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (max-width: 768px) {
    font-size: 2rem;
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
          <img src={Laptop} alt="Laptop with books" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>ENCOURAGE.</ItemTitle>
            <ItemTitle>INSTRUCT.</ItemTitle>
            <ItemTitle2>EVOLVE.</ItemTitle2>
            <EncourageInstruct />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={Target} alt="Illustration of target" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>TARGETED</ItemTitle>
            <ItemTitle2>SOLUTIONS</ItemTitle2>
            <TargetedSolutions />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
