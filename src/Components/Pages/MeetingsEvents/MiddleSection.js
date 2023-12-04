import React from "react";
import styled from "styled-components";
import Immersive from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Immersive-Invigorating_v1-2.png";
import Unity from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Unity-Opportunity_v1-3.png";
import Virtual from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Promise-of-Virtual.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  ImmersiveInvigorating,
  UnityYeilds,
  ThePromise,
} from "./MiddleSectionContent.js";

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.9fr 0.9fr;
  gap: 50px 50px;
  /* align-items: center;
  justify-items: center; */
  margin-top: 150px;
`;

const ItemImage = styled.div`
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
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 0.7;
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
  margin: 9px 0 ${px2vw(20)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
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
  font-size: 1.8rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  margin-left: ${px2vw(20)};
  padding: 0 5% 0 10px;

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const MiddleSection = () => {
  return (
    <>
      <MiddleSectionContainer>
        <ItemImage>
          <img
            src={Immersive}
            alt="Immersive and invigorating"
            loading="lazy"
          ></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>IMMERSIVE</ItemTitle>
            <ItemTitle2>& INVIGORATING</ItemTitle2>
            <ImmersiveInvigorating />
          </ItemContent>
        </ItemContainer>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>UNITY YIELDS</ItemTitle>
            <ItemTitle2>OPPORTUNITY</ItemTitle2>
            <UnityYeilds />
          </ItemContent>
        </ItemContainer>
        <ItemImage style={{ marginTop: `${px2vw(0)}` }}>
          <img
            src={Unity}
            alt="Unity yields opportunity"
            loading="lazy"
            style={{ marginTop: "0px" }}
          ></img>
        </ItemImage>
        <ItemImage>
          <img
            src={Virtual}
            alt="The promise of virtual"
            loading="lazy"
            style={{ marginTop: "0px" }}
          ></img>
        </ItemImage>
        <ItemContainer>
          <ItemContent>
            <ItemTitle>THE PROMISE</ItemTitle>
            <ItemTitle2>OF VIRTUAL</ItemTitle2>
            <ThePromise />
          </ItemContent>
        </ItemContainer>
      </MiddleSectionContainer>
    </>
  );
};

export default MiddleSection;
