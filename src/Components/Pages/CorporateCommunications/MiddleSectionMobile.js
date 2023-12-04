import React from "react";
import styled from "styled-components";
import Spreading from "../../../assets/img/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_illustration_Spreading-the-Word_MOBILE.png";
import Ramping from "../../../assets/img/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_illustration_Ramping-Revenue.png";
import Making from "../../../assets/img/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_illustration_Most-of-Video_MOBILE.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  SpreadingTheWord,
  RampingUp,
  MakingVideo,
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
  margin: ${px2vw(-180)} 0 0 ${px2vw(160)};
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
          <img src={Spreading} alt="Spreading the word" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>SPREADING</ItemTitle>
            <ItemTitle2>THE WORD</ItemTitle2>
            <SpreadingTheWord />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={Ramping} alt="Ramping up revenue" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>RAMPING UP</ItemTitle>
            <ItemTitle2>REVENUE</ItemTitle2>
            <RampingUp />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={Making} alt="Making the most of video" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>MAKING THE</ItemTitle>
            <ItemTitle2>MOST OF VIDEO</ItemTitle2>
            <MakingVideo />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
