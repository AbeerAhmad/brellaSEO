import React from "react";
import styled from "styled-components";
import SpeakerImage from "../../../assets/img/Brella_Web-refresh_EVENTS_Speaker-Illustration_Transparent_v2.png";
import TVImage from "../../../assets/img/Brella_Web-refresh_EVENTS_illo_Virtual-Yet-Personal_transparent.png";
import DisplaysImage from "../../../assets/img/Brella_Web-refresh_EVENTS_Best-of-Both-Worlds_Transparent.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  FaceToFace,
  VirtualPersonal,
  TheBest,
} from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 50px;
  align-items: center;
  justify-items: center;
  margin-top: 150px;
`;

const ItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    //margin-top: ${px2vw(-100)};
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
  white-space: nowrap;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 0.9;
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
  white-space: nowrap;
  letter-spacing: 1.5px;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const ItemContent = styled.div`
  font-size: 1.3rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  margin-left: ${px2vw(20)};
  padding: 0 13% 0 10px;
  max-width: 720px;

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const MiddleSection = () => {
  return (
    <>
      <MiddleSectionContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>FACE-TO-FACE</ItemTitle>
            <ItemTitle2>FUNCTIONS</ItemTitle2>
            <FaceToFace />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={SpeakerImage} alt="Speaker" loading="lazy"></img>
        </ItemImage>
        <ItemImage style={{ marginTop: `${px2vw(0)}` }}>
          <img src={TVImage} alt="Lady on TV" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>VIRTUAL,</ItemTitle>
            <ItemTitle2>YET PERSONAL</ItemTitle2>
            <VirtualPersonal />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>THE BEST OF</ItemTitle>
            <ItemTitle2>BOTH WORLDS</ItemTitle2>
            <TheBest />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={DisplaysImage} alt="Monitors" loading="lazy"></img>
        </ItemImage>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
