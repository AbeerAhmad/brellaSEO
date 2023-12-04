import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import BackgroundImg from "../../../assets/img/homepage-splash-screen.jpg";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
} from "../../styles.js";
import styled from "styled-components";
import HomeProductionSection from "./HomeProductionSection.js";
import HomeProductionSectionMobile from "./HomeProductionSectionMobile.js";
import HomeTitle from "./HomeTitle.js";
import ServicesSectionDesktop from "./ServicesSectionDesktop.js";
import ServicesSectionMobile from "./ServicesSectionMobile.js";
import PortfolioAdSection from "./PortfolioAdSection.js";
import BlogAdSection from "./BlogAdSection.js";

const BackImage = styled.div`
  position: relative;
  //margin-top: -10vw;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    //object-fit: scale-down;
  }

  @media (max-width: 768px) {
    //margin-top: -5vw;
  }

  @media (max-width: 425px) {
    //margin-top: 0vw;

    img {
      width: 140%;
      right: 0;
    }
  }
`;

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const Home = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>CRAFTING COMMUNICATIONS AND DIGITAL LEARNING SOLUTIONS</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={window.location.origin} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Engagement Strategy & Production Experts"
        />
        <meta
          name="twitter:description"
          content="Digital production and strategic services focused on audience engagement in support of your business objectives."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Engagement Strategy & Production Experts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com" />
        <meta
          name="og:description"
          content="Digital production and strategic services focused on audience engagement in support of your business objectives."
        />
        <meta
          property="og:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Brella Lady" loading="eager"></img>
          <HomeTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Brella provides production services and strategic learning and
              communications guidance for organizations looking to forge
              profound, durable relationships that support their critical
              objectives. Our veteran teams of techs and artisans bring a
              signature blend of creativity, discipline, and efficiency to every
              new project.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? (
            <>
              <ServicesSectionMobile />
              <HomeProductionSectionMobile />
            </>
          ) : (
            <>
              <ServicesSectionDesktop />
              <HomeProductionSection />
            </>
          )}
        </InnerPageContainer>
        <InnerPageContainer>
          <PortfolioAdSection />
          <BlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Home;
