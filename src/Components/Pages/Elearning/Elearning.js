import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
  BackImage,
} from "../../styles.js";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_eLEARNING_SPLASH.jpg";
import ElearningTitle from "./ElearningTitle.js";
import ElearningPortfolioAdSection from "./ElearningPortfolioAdSection.js";
import ElearningBlogAdSection from "./ElearningBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const Elearning = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | eLearning</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/elearning")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | eLearning Design & Development Company"
        />
        <meta
          name="twitter:description"
          content="Engaging and scalable custom eLearning production, ranging from training videos and simulations to Articulate course development and leadership training."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_eLEARNING_SPLASH.e2fc493e4ec3715266c9.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | eLearning Design & Development Company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/elearning" />
        <meta
          name="og:description"
          content="Engaging and scalable custom eLearning production, ranging from training videos and simulations to Articulate course development and leadership training."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_eLEARNING_SPLASH.e2fc493e4ec3715266c9.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Camera man" loading="lazy"></img>
          <ElearningTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              21st century adult learning has evolved beyond the physical
              classroom. To meet the needs of your learners wherever they may
              be, you need digital learning solutions that are convenient,
              updateable, and scalable.
              <br />
              <br />
              Champion your organization’s learning and development with
              customized eLearning programs that offer a substantial ROI by
              fostering deep engagement and boosting retention.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <ElearningPortfolioAdSection />
          <ElearningBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Elearning;
