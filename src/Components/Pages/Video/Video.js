import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
  BackImage,
} from "../../styles.js";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_VIDEO_page-splash.jpg";
import VideoTitle from "./VideoTitle.js";
import VideoPortfolioAdSection from "./VideoPortfolioAdSection.js";
import VideoBlogAdSection from "./VideoBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const Video = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Video</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/video")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Chicago Video Production Company"
        />
        <meta
          name="twitter:description"
          content="Chicago video production company offering studio and location shoots, post-production services, live stream video production, and more."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_VIDEO_page-splash.bea9c187aceda5694905.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Chicago Video Production Company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/video" />
        <meta
          name="og:description"
          content="Chicago video production company offering studio and location shoots, post-production services, live stream video production, and more."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_VIDEO_page-splash.bea9c187aceda5694905.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Camera man" loading="lazy"></img>
          <VideoTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Emotion drives engagement, and no medium delivers emotional impact
              like video. From marketing and sales to employee and customer
              training, video is the tool of choice for any business with a
              message to deliver.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <VideoPortfolioAdSection />
          <VideoBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Video;
