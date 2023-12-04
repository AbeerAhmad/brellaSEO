import React from "react";
import styled from "styled-components";
import CameraImage from "../../../assets/img/Brella_Web-refresh_VIDEO_exacting-education-illo_camera_MOBILE.png";
import LadyTabletImage from "../../../assets/img/Brella_Web-refresh_VIDEO_illo_Options-and-Opportunities_TRANSPARENT.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  ExactingExecution,
  OptionsOpportunities,
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
  line-height: 0.7;
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
  padding: 0 20px 0 10px;
`;

const MiddleSectionMobile = () => {
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
        <ItemImage>
          <img
            src={LadyTabletImage}
            alt="Lady with Tablet"
            loading="lazy"
          ></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>OPTIONS</ItemTitle>
            <ItemTitle2>& OPPORTUNITIES</ItemTitle2>
            <OptionsOpportunities />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSectionMobile;
