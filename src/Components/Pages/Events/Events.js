import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import { PageContainer, InnerPageContainer, BackImage } from "../../styles.js";
import styled from "styled-components";
import BackgroundImg from "../../../assets/img/events-page-splash.jpg";
import EventsTitle from "./EventsTitle.js";
import EventsPortfolioAdSection from "./EventsPortfolioAdSection.js";
import EventsBlogAdSection from "./EventsBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
  getCanoicalUrl,
} from "../../../Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const TopSectionContainer = styled.div`
  border-left: solid 4px #f3803b;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  position: relative;
  z-index: 1;
  margin: ${px2vw(calculateMargin(500), screenWidth)} ${px2vw(100)} ${px2vw(50)}
    ${px2vw(250)};

  p {
    line-height: 2;
    padding: 0 ${px2vw(200)} 0 ${px2vw(20)};
    margin-left: ${px2vw(20)};

    @media (max-width: 425px) {
      margin-left: ${px2vw(35)};
    }
  }

  @media only screen and (min-width: 762px) and (max-width: 800px) {
    font-size: 1.3rem;
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 600px) and (max-width: 762px) {
    font-size: 1.2rem;
    padding: 0 ${px2vw(50)} 0 ${px2vw(20)};
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 200px) and (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: ${px2vw(150)};
  }

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const Events = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Events</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/events")} />

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Corporate Event Production Company"
        />
        <meta
          name="twitter:description"
          content="Corporate event production company offering creative design and management solutions for in-person, virtual, and hybrid events."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/events-page-splash.e45305ee349d651dcde6.jpg"
        /> */}

        {/* Open Graph Meta Tags */}
        {/* <meta
          property="og:title"
          content="Brella Productions | Corporate Event Production Company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/events" />
        <meta
          name="og:description"
          content="Corporate event production company offering creative design and management solutions for in-person, virtual, and hybrid events."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/events-page-splash.e45305ee349d651dcde6.jpg"
        /> */}
      </Helmet>

      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Event" loading="lazy"></img>
          <EventsTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Corporate meetings and events are complex machines with lots of
              moving parts. Whether you are hosting an in-person training event,
              a virtual global conference, or a hybrid national sales meeting,
              you need a competent, experienced production team to keep things
              running smoothly. For immersive event production services, you
              can’t do better than Brella.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <EventsPortfolioAdSection />
          <EventsBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Events;
