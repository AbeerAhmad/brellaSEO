import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
  BackImage,
} from "../../styles.js";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_STRATEGIC-LEARNING_splash.jpg";
import LearningTitle from "./LearningTitle.js";
import LearningTitleMobile from "./LearningTitleMobile.js";
import LearningPortfolioAdSection from "./LearningPortfolioAdSection.js";
import LearningBlogAdSection from "./LearningBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const Learning = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Learning</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/learning")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Digital Learning & Engagement Specialists"
        />
        <meta
          name="twitter:description"
          content="Brella devises and implements digital learning strategies rooted in tested instructional design and UX principles to optimize your organization’s training and development initiatives."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_STRATEGIC-LEARNING_splash.0fd3aa03d95c268ba577.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Digital Learning & Engagement Specialists"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/learning" />
        <meta
          name="og:description"
          content="Brella devises and implements digital learning strategies rooted in tested instructional design and UX principles to optimize your organization’s training and development initiatives."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_STRATEGIC-LEARNING_splash.0fd3aa03d95c268ba577.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Man with laptop" loading="lazy"></img>
          {width < breakpoint ? <LearningTitleMobile /> : <LearningTitle />}
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Learning is an ongoing investment in your organization’s future,
              driving innovation, efficiency, and growth. Brella delivers
              digital learning strategies that strengthen your workforce,
              satisfy regulators, and supports your customers.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <LearningPortfolioAdSection />
          <LearningBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Learning;
