import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { PageContainer, InnerPageContainer } from "../../styles.js";
import { px2vw, px2vh } from "../../../Utilities/util.js";
import Video from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Video.png";
import Learning from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Learning.png";
import Design from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Design.png";
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

  @media (min-width: 2560px) {
    margin: ${px2vw(80)} ${px2vw(50)} 0 ${px2vw(50)};
  }
`;

const ProductionTitle = styled.h3`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: #f3803b;
  letter-spacing: 2px;
  text-decoration-line: underline;
  text-decoration-thickness: 6px;
  text-decoration-color: black;
  text-underline-offset: 10px;
  //margin-left: -20px;

  @media (min-width: 2560px) {
    font-size: 6rem;
  }
`;

const SectionContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 6rem 0px;
  align-items: start;
  justify-items: start;
  margin: ${px2vw(0)} ${px2vw(50)} 0 ${px2vw(0)};
  //padding: ${px2vw(20)};
  // margin-left: ${px2vw(110)};
`;

const ItemContainer = styled.div`
  @media (max-width: 1024px) {
    //min-height: ${px2vw(700)};
  }
`;

const ItemContainerRight = styled.div`
  /* margin-top: ${px2vh(-260)};

  @media (max-width: 1440px) {
    margin-top: ${px2vw(-60)};
  }

  @media (max-width: 1300px) {
    margin-top: ${px2vw(-100)};
  }

  @media (max-width: 1200px) {
    margin-top: ${px2vw(-70)};
  }

  @media (max-width: 1024px) {
    margin-top: ${px2vw(-170)};
  }

  @media (min-width: 1440px) {
    margin-top: ${px2vw(-50)};
  }

  @media (min-width: 2560px) {
    margin-top: ${px2vh(-110)};
  }

  @media (min-width: 2658px) {
    margin-top: ${px2vh(-30)};
  } */
`;

const ItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    // margin-top: ${px2vw(-100)};
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-auto-rows: 1fr;
  gap: 0.625rem 0.625rem;
  margin: ${px2vw(-300)} ${px2vw(50)} 0 ${px2vw(-60)};

  @media (min-width: 2560px) {
    margin: ${px2vw(-220)} ${px2vw(50)} 0 ${px2vw(-60)};
  }
`;

const InternalItemImage = styled.div`
  margin-left: ${px2vw(50)};
  //margin-top: ${px2vw(-15)};

  img {
    width: 100%;
  }
`;

const InternalItemTitle = styled.h3`
  color: rgba(40, 40, 40);
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 2px;
  text-decoration-line: underline;
  text-decoration-color: #f3803b;
  text-decoration-thickness: 5px;
  text-underline-offset: 8px;
  transition: color 0.25s ease 0s, text-decoration-color 0.25s ease 0s;

  &:hover {
    color: #f3803b;
    text-decoration-color: rgba(40, 40, 40);
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const TitleLink = styled(Link)`
  color: rgba(40, 40, 40);
  text-decoration: none;

  &:hover {
    color: #f3803b;
  }
`;

const InternalItemContent = styled.div`
  font-size: 1.3rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  color: #282828;

  @media (min-width: 2560px) {
    font-size: 2rem;
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

  @media (max-width: 1300px) {
    min-height: ${px2vh(250)};
  }

  @media (max-width: 1250px) {
    min-height: ${px2vh(120)};
  }

  @media (max-width: 1200px) {
    min-height: ${px2vh(120)};
  }

  @media (max-width: 1024px) {
    min-height: ${px2vh(300)};
  }

  @media (max-width: 990px) {
    min-height: ${px2vh(220)};
  }

  @media (min-width: 1440px) {
    min-height: ${px2vh(120)};
  }

  @media (min-width: 2560px) {
    min-height: ${px2vh(80)};
  }
`;

const HomeProductionSection = () => {
  return (
    <>
      <ProductionContainter>
        <Filler />
        <ProductionTitle>PRODUCTION</ProductionTitle>
        <SectionContentContainer>
          <ItemContainer>
            <ItemImage style={{ marginLeft: `${px2vw(-250)}` }}>
              <img src={Video} alt="Woman with camera" loading="lazy"></img>
            </ItemImage>
            <ItemContent>
              <InternalItemImage style={{ marginTop: "-5px" }}>
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
          </ItemContainer>
          <ItemContainerRight>
            <ItemImage style={{ marginLeft: `${px2vw(100)}` }}>
              <img src={Learning} alt="Brain" loading="lazy"></img>
            </ItemImage>
            <ItemContent>
              <InternalItemImage>
                <img
                  src={LearningIcon}
                  alt="Learning icon"
                  loading="lazy"
                ></img>
              </InternalItemImage>
              <div style={{ marginTop: "8px" }}>
                <TitleLink to="/elearning">
                  <InternalItemTitle>LEARNING</InternalItemTitle>
                </TitleLink>
                <InternalItemContent>
                  <LearningContent />
                  <SeeMoreLink to="/elearning">Go to Learning</SeeMoreLink>
                  {/* <FillerLearning /> */}
                </InternalItemContent>
              </div>
            </ItemContent>
          </ItemContainerRight>
          <ItemContainer>
            <ItemImage style={{ marginLeft: `${px2vw(-250)}` }}>
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
          </ItemContainer>
          <ItemContainerRight>
            <ItemImage style={{ marginLeft: `${px2vw(100)}` }}>
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
                  {/* <FillerEvents /> */}
                </InternalItemContent>
              </div>
            </ItemContent>
          </ItemContainerRight>
        </SectionContentContainer>
      </ProductionContainter>
    </>
  );
};

export default HomeProductionSection;
