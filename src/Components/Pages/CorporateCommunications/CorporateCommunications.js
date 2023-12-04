import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import { PageContainer, InnerPageContainer, BackImage } from "../../styles.js";
import styled from "styled-components";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_header-gradient.jpg";
import CorpCommTitle from "./CorpCommTitle.js";
import CorpCommPortfolioAdSection from "./CorpCommPortfolioAdSection.js";
import CorpCommBlogAdSection from "./CorpCommBlogAdSection.js";
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

const TopSectionContainerCorporate = styled.div`
  border-left: solid 4px #f3803b;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  position: relative;
  z-index: 1;
  margin: ${px2vw(calculateMargin(250), screenWidth)} ${px2vw(100)} ${px2vw(50)}
    ${px2vw(250)};

  p {
    line-height: 2;
    padding: 0 ${px2vw(100)} 0 ${px2vw(20)};
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

const CorporateCommunications = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Corporate Communications</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/corporate")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Engagement Strategy & Production Experts"
        />
        <meta
          name="twitter:description"
          content="Strategies and solutions for internal and external communications in support of your organization’s values and objectives."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_header-gradient.243d19317a7a79326726.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Engagement Strategy & Production Experts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/corporate" />
        <meta
          name="og:description"
          content="Strategies and solutions for internal and external communications in support of your organization’s values and objectives."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_CORPORATE-COMMUNICATIONS_header-gradient.243d19317a7a79326726.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img
            src={BackgroundImg}
            alt="Corporate Communications"
            loading="lazy"
          ></img>
          <CorpCommTitle />
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainerCorporate>
            <p>
              Communication is the essence of strong relationships, especially
              in the business realm. How your organization presents itself and
              interfaces with customers, colleagues, and collaborators sets the
              foundation for your brand. <br /> <br />
              Brella partners with you to develop high-impact communications
              strategies that express your values and align with your business
              objectives.
            </p>
          </TopSectionContainerCorporate>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <CorpCommPortfolioAdSection />
          <CorpCommBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default CorporateCommunications;
