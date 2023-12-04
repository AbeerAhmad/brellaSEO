import React from "react";
import styled from "styled-components";
import Laptop from "../../../assets/img/Brella_Web-refresh_eLEARNING_illustration_LAPTOP-WITH-BOOKS.png";
import Target from "../../../assets/img/Brella_Web-refresh_eLEARNING_illustration_TARGET.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  EncourageInstruct,
  TargetedSolutions,
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
  margin-left: ${px2vw(20)};
`;

const ItemTitle = styled.h2`
  //margin: ${px2vw(10)} 0 0 0;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 1;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: ${px2vw(-3)} 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

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
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>TARGETED</ItemTitle>
            <ItemTitle2>SOLUTIONS</ItemTitle2>
            <TargetedSolutions />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(100)}` }}>
          <img src={Target} alt="Illustration of target" loading="lazy"></img>
        </ItemImage>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
