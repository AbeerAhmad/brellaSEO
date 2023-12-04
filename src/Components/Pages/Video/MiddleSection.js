import React from "react";
import styled from "styled-components";
import CameraImage from "../../../assets/img/Brella_Web-refresh_VIDEO_exacting-education-illo_camera_TRANSPARENT.png";
import LadyTabletImage from "../../../assets/img/Brella_Web-refresh_VIDEO_illo_Options-and-Opportunities_TRANSPARENT.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  ExactingExecution,
  OptionsOpportunities,
} from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.9fr 0.9fr;
  gap: 0px 0px;
  align-items: center;
  justify-items: center;
  //margin-top: 50px;
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
  margin: ${px2vw(10)} 0 0 0;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  white-space: nowrap;
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
          <img src={CameraImage} alt="Camera" loading="lazy"></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>EXACTING</ItemTitle>
            <ItemTitle2>EXECUTION</ItemTitle2>
            <ExactingExecution />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>OPTIONS</ItemTitle>
            <ItemTitle2>& OPPORTUNITIES</ItemTitle2>
            <OptionsOpportunities />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(0)}` }}>
          <img
            src={LadyTabletImage}
            alt="Lady with Tablet"
            loading="lazy"
          ></img>
        </ItemImage>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
