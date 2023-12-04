import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  BackImage,
  TopSectionContainer,
} from "../../styles.js";
import BackgroundImg from "../../../assets/img/brellaprod_CustomerEducation_splash_v3.jpg";
import CustEduTitle from "./CustEduTitle.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import CustEduPortfolioAdSection from "./CustEduPortfolioAdSection.js";
import CustEduBlogAdSection from "./CustEduBlogAdSection.js";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactFormNS = lazy(() =>
  import("../../Shared/Contact/ContactFormNS.js")
);

const CustomerEducation = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Customer Education</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/customer")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Customer Education & Engagement Experts"
        />
        <meta
          name="twitter:description"
          content="Creative design and production to help you forge meaningful customer relationships and build enduring customer communities."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/brellaprod_CustomerEducation_splash_v3.d7bad9bc5e241a679b3e.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Customer Education & Engagement Experts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/customer" />
        <meta
          name="og:description"
          content="Creative design and production to help you forge meaningful customer relationships and build enduring customer communities."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/brellaprod_CustomerEducation_splash_v3.d7bad9bc5e241a679b3e.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img
            src={BackgroundImg}
            alt="Customer Education"
            loading="lazy"
          ></img>
          <CustEduTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Information is the essence of all decision making. Help your
              customers make sound choices with high-impact videos, events, and
              digital tools to educate them on the features, uses, and
              maintenance of your products. <br />
              <br />
              Count on Brella to strengthen your customer education efforts with
              sound strategic guidance and exceptional production capabilities.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <CustEduPortfolioAdSection />
          <CustEduBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default CustomerEducation;
