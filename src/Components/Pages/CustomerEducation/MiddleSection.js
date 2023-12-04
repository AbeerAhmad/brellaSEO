import React from "react";
import styled from "styled-components";
import Video from "../../../assets/img/Brella_Web-refresh_CUSTOMER-EDUCATION_illustration_Vast-Potential-of-Video.png";
import Tactile from "../../../assets/img/Brella_Web-refresh_CUSTOMER-EDUCATION_illustration_Tactile-Tactics.png";
import Tapping from "../../../assets/img/Brella_Web-refresh_CUSTOMER-EDUCATION_illustration_Tapping-Power-of-Apps.png";
import Creating from "../../../assets/img/Brella_Web-refresh_CUSTOMER-EDUCATION_illustration_Creating-Communities.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  PotentialOfVideo,
  TactilTactics,
  PowerOfApps,
  CreatingCommunities,
} from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
`;

const ItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    // margin-top: ${px2vw(-100)};
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
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

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
  letter-spacing: 1.5px;
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
          <img src={Video} alt="Video screens" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>THE VAST</ItemTitle>
            <ItemTitle2>POTENTIAL OF VIDEO</ItemTitle2>
            <PotentialOfVideo />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>TACTILE</ItemTitle>
            <ItemTitle2>TACTICS</ItemTitle2>
            <TactilTactics />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(0)}` }}>
          <img src={Tactile} alt="Lady with Tablet" loading="lazy"></img>
        </ItemImage>
        <ItemImage>
          <img src={Tapping} alt="Mobile devices" loading="lazy"></img>
        </ItemImage>
        <ItemContainer style={{ marginTop: `${px2vw(50)}` }}>
          <ItemContent>
            <ItemTitle>TAPPING THE</ItemTitle>
            <ItemTitle2>POWER OF APPS</ItemTitle2>
            <PowerOfApps />
          </ItemContent>
        </ItemContainer>
        <ItemContainer
          style={{ marginLeft: `${px2vw(150)}`, marginTop: `${px2vw(50)}` }}
        >
          <ItemContent>
            <ItemTitle>CREATING</ItemTitle>
            <ItemTitle2>COMMUNITIES</ItemTitle2>
            <CreatingCommunities />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(50)}` }}>
          <img src={Creating} alt="People talking" loading="lazy"></img>
        </ItemImage>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
