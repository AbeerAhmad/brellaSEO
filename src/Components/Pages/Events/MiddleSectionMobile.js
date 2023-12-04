import React from "react";
import styled from "styled-components";
import SpeakerImage from "../../../assets/img/Brella_Web-refresh_EVENTS_Speaker-Illustration_Transparent.png";
import TVImage from "../../../assets/img/Brella_Web-refresh_EVENTS_illo_Virtual-Yet-Personal_transparent_MOBILE.png";
import DisplaysImage from "../../../assets/img/Brella_Web-refresh_EVENTS_Best-of-Both-Worlds_Transparent.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  FaceToFace,
  VirtualPersonal,
  TheBest,
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
  margin: ${px2vw(-280)} 0 0 ${px2vw(150)};
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: 0 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
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
  padding: 0 13% 0 10px;
`;

const MiddleSectionMobile = () => {
  return (
    <>
      <MiddleSectionContainer>
        <ItemImage style={{ textAlign: "right" }}>
          <img
            src={SpeakerImage}
            alt="Speaker"
            loading="lazy"
            style={{ marginTop: `${px2vw(20)}` }}
          ></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>FACE-TO-FACE</ItemTitle>
            <ItemTitle2>FUNCTIONS</ItemTitle2>
            <FaceToFace />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={TVImage} alt="Lady with Tablet" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>VIRTUAL,</ItemTitle>
            <ItemTitle2>YET PERSONAL</ItemTitle2>
            <VirtualPersonal />
          </ItemContent>
        </ItemContainer>
        <ItemImage>
          <img src={DisplaysImage} alt="Monitors" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>THE BEST OF</ItemTitle>
            <ItemTitle2>BOTH WORLDS</ItemTitle2>
            <TheBest />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
