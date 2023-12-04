import React from "react";
import styled from "styled-components";
import Immersive from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Immersive-Invigorating_v1-2.png";
import Unity from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Unity-Opportunity_v1-3.png";
import Virtual from "../../../assets/img/Brella_Web-refresh_STRATEGY-EVENTS_illustration-Promise-of-Virtual_MOBILE.png";
import { px2vw } from "../../../Utilities/util.js";
import {
  ImmersiveInvigorating,
  UnityYeilds,
  ThePromise,
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
  }
`;

const ItemContainer = styled.div`
  border-left: #f3803b 4px solid;
  margin: ${px2vw(-80)} 0 0 ${px2vw(150)};
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
        <ItemImage style={{ marginTop: `${px2vw(100)}` }}>
          <img
            src={Unity}
            alt="Unity yields opportunity"
            loading="lazy"
            style={{ marginLeft: "40%" }}
          ></img>
        </ItemImage>
        <ItemContainer style={{ marginLeft: `${px2vw(150)}` }}>
          <ItemContent>
            <ItemTitle>UNITY YIELDS</ItemTitle>
            <ItemTitle2>OPPORTUNITY</ItemTitle2>
            <UnityYeilds />
          </ItemContent>
        </ItemContainer>

        <ItemImage>
          <img
            src={Virtual}
            alt="The promise of virtual"
            loading="lazy"
            style={{ marginLeft: "40%" }}
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

export default MiddleSectionMobile;
