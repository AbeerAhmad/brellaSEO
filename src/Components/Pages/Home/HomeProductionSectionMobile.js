import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { px2vw, px2vh } from "../../../Utilities/util.js";
import Video from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Video.png";
import Learning from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Learning.png";
import Design from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Design_MOBILE.png";
import Events from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Events.png";
import VideoIcon from "../../../assets/icons/Brella_Web-refresh_HOME-icon-Video.png";
import LearningIcon from "../../../assets/icons/Brella_Web-refresh_HOME-icon-Learning.png";
import DesignIcon from "../../../assets/icons/Brella_Web-refresh_HOME-icon-Design.png";
import EventsIcon from "../../../assets/icons/Brella_Web-refresh_HOME-icon-People.png";
import {
  DesignContent,
  EventsContent,
  LearningContent,
  VideoContent,
} from "./ProductionSectionContent.js";

const ProductionContainter = styled.div`
  margin: ${px2vw(80)} ${px2vw(50)} 0 ${px2vw(180)};
`;

const ProductionTitle = styled.h3`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 3rem;
  color: #f3803b;
  letter-spacing: 2px;
  text-decoration-line: underline;
  text-decoration-thickness: 5px;
  text-decoration-color: black;

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 375px) {
  }

  @media (max-width: 320px) {
  }
`;

const SectionContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin: ${px2vw(0)} ${px2vw(0)} 0 ${px2vw(0)};
  //padding: ${px2vw(20)};
  // margin-left: ${px2vw(110)};
`;

const ItemImage = styled.div`
  //margin-left: ${px2vw(400)};
  text-align: right;

  img {
    width: 80%;
    margin-left: 24%;
    //margin-top: ${px2vw(-50)};
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: start;
  margin: ${px2vw(-600)} ${px2vw(0)} 0 ${px2vw(0)};
  padding: ${px2vw(0)};
  min-height: ${px2vh(0)};
`;

const InternalItemImage = styled.div`
  //margin-left: ${px2vw(50)};
  //margin-top: ${px2vw(-15)};

  img {
    width: 40%;
  }
`;

const InternalItemTitle = styled.h3`
  color: rgba(40, 40, 40);
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  text-decoration-line: underline;
  text-decoration-color: #f3803b;
  text-decoration-thickness: 5px;
  //transition: color 0.25s ease 0s, text-decoration-color 0.25s ease 0s;

  &:hover {
    color: #f3803b;
    text-decoration-color: rgba(40, 40, 40);
  }
`;

const TitleLink = styled(Link)`
  color: rgba(40, 40, 40);
  text-decoration: none !important;

  &:hover {
    color: #f3803b;
  }
`;

const InternalItemContent = styled.div`
  font-size: 1.3rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  color: #282828;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

const SeeMoreLink = styled(Link)`
  color: #f3803b;
  //text-decoration: none;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: normal;
  //letter-spacing: 1px;
  transition: color 0.25s ease 0s;

  &:hover {
    color: rgb(40, 40, 40);
  }
`;

const Filler = styled.div`
  min-height: ${px2vh(140)};
`;

const HomeProductionSectionMobile = () => {
  return (
    <>
      <ProductionContainter>
        <Filler />
        <ProductionTitle>PRODUCTION</ProductionTitle>
        <SectionContentContainer>
          <ItemImage>
            <img src={Video} alt="Woman with camera" loading="lazy"></img>
          </ItemImage>
          <ItemContent>
            <InternalItemImage>
              <img src={VideoIcon} alt="Camera" loading="lazy"></img>
            </InternalItemImage>
            <div style={{ marginTop: "0px" }}>
              <TitleLink to="/video">
                <InternalItemTitle>VIDEO</InternalItemTitle>
              </TitleLink>
              <InternalItemContent>
                <VideoContent />
                <SeeMoreLink to="/video"> Go to Video</SeeMoreLink>
              </InternalItemContent>
            </div>
          </ItemContent>
          <ItemImage>
            <img src={Learning} alt="Brain" loading="lazy"></img>
          </ItemImage>
          <ItemContent>
            <InternalItemImage>
              <img src={LearningIcon} alt="Learning icon" loading="lazy"></img>
            </InternalItemImage>
            <div style={{ marginTop: "0px" }}>
              <TitleLink to="/elearning">
                <InternalItemTitle>LEARNING</InternalItemTitle>
              </TitleLink>
              <InternalItemContent>
                <LearningContent />
                <SeeMoreLink to="/elearning">Go to Learning</SeeMoreLink>
              </InternalItemContent>
            </div>
          </ItemContent>
          <ItemImage style={{ marginTop: "55px" }}>
            <img src={Design} alt="Person drawing" loading="lazy"></img>
          </ItemImage>
          <ItemContent>
            <InternalItemImage>
              <img src={DesignIcon} alt="Color palette" loading="lazy"></img>
            </InternalItemImage>
            <div style={{ marginTop: "0px" }}>
              <TitleLink to="/design">
                <InternalItemTitle>DESIGN</InternalItemTitle>
              </TitleLink>
              <InternalItemContent>
                <DesignContent />
                <SeeMoreLink to="/design">Go to Design</SeeMoreLink>
              </InternalItemContent>
            </div>
          </ItemContent>
          <ItemImage>
            <img src={Events} alt="Man by display" loading="lazy"></img>
          </ItemImage>
          <ItemContent>
            <InternalItemImage>
              <img src={EventsIcon} alt="Events icon" loading="lazy"></img>
            </InternalItemImage>
            <div style={{ marginTop: "0px" }}>
              <TitleLink to="/events">
                <InternalItemTitle>EVENTS</InternalItemTitle>
              </TitleLink>
              <InternalItemContent>
                <EventsContent />
                <SeeMoreLink to="/events">Go to Events</SeeMoreLink>
                <Filler />
              </InternalItemContent>
            </div>
          </ItemContent>
        </SectionContentContainer>
      </ProductionContainter>
    </>
  );
};

export default HomeProductionSectionMobile;
