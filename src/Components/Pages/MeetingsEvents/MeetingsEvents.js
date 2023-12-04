import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
  BackImage,
} from "../../styles.js";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_header-image-gradient.jpg";
import MeetingsEventsTitle from "./MeetingsEventsTitle.js";
import MeetingsEventsPortfolioAdSection from "./MeetingsEventsPortfolioAdSection.js";
import MeetingsEventsBlogAdSection from "./MeetingsEventsBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const MeetingsEvents = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Meetings & Events</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/meetingsevents")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Corporate Events Engagement Specialists"
        />
        <meta
          name="twitter:description"
          content="Customized in-person and virtual event production tailored to your business goals and your audience’s needs."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_header-image-gradient.eda345f4972d2918e4ff.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Corporate Events Engagement Specialists"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/meetingsevents" />
        <meta
          name="og:description"
          content="Customized in-person and virtual event production tailored to your business goals and your audience’s needs."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_header-image-gradient.eda345f4972d2918e4ff.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Stage" loading="lazy"></img>
          <MeetingsEventsTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Meetings and events are powerful business tools, binding teams
              together, promoting your brand, and creating vital human
              touchpoints with critical audiences.
              <br />
              <br />
              To maximize their impact, you need a corporate event production
              company that will help you strategize and act with intention,
              developing and focusing the goals and objectives that will give
              your event purpose and value.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <MeetingsEventsPortfolioAdSection />
          <MeetingsEventsBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default MeetingsEvents;
