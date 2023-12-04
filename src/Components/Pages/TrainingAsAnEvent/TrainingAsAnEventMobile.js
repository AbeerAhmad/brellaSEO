import React from "react";
import styled from "styled-components";
import { PageContainer, InnerPageContainer } from "../../styles.js";
import { px2vw } from "../../../Utilities/util.js";
import MarkM from "../../../assets/img/MarkMallchok.jpg";
import JoshuaS from "../../../assets/img/Joshua_Stroud.jpg";
import TrainingMagLogo from "../../../assets/img/Traning-Mag-Network-Logo.jpg";

const TitleAndImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 2px;
  justify-items: center;
  color: black;
  margin-top: ${px2vw(150)};
`;

const PageTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: white;
  letter-spacing: 2px;
  line-height: 1.5;
  margin-left: 10%;
  margin-top: 15%;
  white-space: nowrap;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  p {
    color: black;
    margin-left: 8%;
    line-height: 1;
    -webkit-text-stroke: 1px black;
    -o-text-stroke: 1px black;
    -moz-text-stroke: 1px black;
  }

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 2560px) {
    font-size: 10rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  border-left: #f3803b 4px solid;
  margin: 15% 5% 12%;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    border: solid 8px #afb3b7;
    border-radius: 7%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
  }
`;

const ImageTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "FuturaStd-Book", Helvetica, Arial, sans-serif;
  color: black;
  white-space: nowrap;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  font-family: "FuturaStd-Book", Helvetica, Arial, sans-serif;
  line-height: 2;
  color: black;
  font-size: 1rem;
  margin-left: 5%;
  min-width: 80%;
`;

const MagContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0 0 0 5%;

  img {
    width: 90%;
    margin: auto;
  }
`;

const LinkMag = styled.p`
  font-size: 0.8rem;
  font-family: "FuturaStd-Book", Helvetica, Arial, serif;
`;

const TrainingAsAnEvent = () => {
  return (
    <>
      <PageContainer>
        <InnerPageContainer>
          <PageTitle>
            WEBINAR: <p>TRAINING AS</p>
            <p style={{ marginLeft: "15%" }}>AN EVENT</p>
          </PageTitle>
          <TitleAndImagesContainer>
            <ImagesContainer>
              <img src={MarkM} alt="Mark Mallchok"></img>
              <ImageTitle>Mark Mallchok</ImageTitle>
            </ImagesContainer>
            <ImagesContainer>
              <img src={JoshuaS} alt="Joshua Stroud"></img>
              <ImageTitle>Joshua Stroud</ImageTitle>
            </ImagesContainer>
          </TitleAndImagesContainer>
          <Description>
            <DescriptionContainer>
              Getting the most out of your virtual training efforts requires
              creativity, careful planning, and a deep understanding of the
              technical tools at your disposal. Brella’s resident experts Mark
              Mallchok and Joshua Stroud walk you through how to add impact to
              your live virtual training by treating it as an event.
            </DescriptionContainer>
          </Description>
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/825486480?h=f01fdf46a0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                padding: "0 5% 0 5%",
              }}
              title="Training as an Event:  Achieving Superior Production for Your Virtual Training"
            ></iframe>
          </div>
          <MagContainer>
            <LinkMag>
              Visit&nbsp;
              <a
                href="https://www.trainingmagnetwork.com/"
                target="_blank"
                style={{
                  fontStyle: "italic",
                  color: "black",
                  textDecoration: "none",
                }}
                rel="noopener noreferrer"
              >
                www.TrainingMagNetwork.com for more free recorded webinars,
              </a>
              &nbsp;sponsored by Brella.
            </LinkMag>
            <img src={TrainingMagLogo} alt="Training Magazine Logo"></img>
          </MagContainer>
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default TrainingAsAnEvent;
