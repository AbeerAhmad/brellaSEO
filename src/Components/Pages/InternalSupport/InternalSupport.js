import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import styled from "styled-components";
import { PageContainer, InnerPageContainer } from "../../styles.js";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_IN-HOUSE-AGENCY_header-image-gradient_v2-1.jpg";
import IntSupportTitle from "./IntSupportTitle.js";
import IntSupportTitleMobile from "./IntSupportTitleMobile.js";
import IntSupportPortfolioAdSection from "./IntSupportPortfolioAdSection.js";
import IntSupportBlogAdSection from "./IntSupportBlogAdSection.js";
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

const BackImage = styled.div`
  position: relative;
  margin-top: -5vw;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    //object-fit: scale-down;
  }

  @media (max-width: 768px) {
    margin-top: 0vw;
  }
`;

const TopSectionContainerInternal = styled.div`
  border-left: solid 4px #f3803b;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  position: relative;
  z-index: 1;
  margin: ${px2vw(calculateMargin(200), screenWidth)} ${px2vw(100)} ${px2vw(50)}
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
    margin-top: ${px2vw(calculateMargin(400), screenWidth)};
  }

  @media only screen and (min-width: 600px) and (max-width: 762px) {
    font-size: 1.2rem;
    padding: 0 ${px2vw(50)} 0 ${px2vw(20)};
    margin-left: ${px2vw(150)};
    margin-top: ${px2vw(calculateMargin(400), screenWidth)};
  }

  @media only screen and (min-width: 200px) and (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: ${px2vw(150)};
    margin-top: ${px2vw(calculateMargin(400), screenWidth)};
  }

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const InternalSupport = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Internal Agency Support</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/internal")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Chicago Internal Agency Support Experts"
        />
        <meta
          name="twitter:description"
          content="Dependable creative production partner offering strategic support and staffing solutions to realize your organization’s business goals."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_IN-HOUSE-AGENCY_header-image-gradient_v2-1.42c17d88f75c9b71acd6.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Chicago Internal Agency Support Experts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/internal" />
        <meta
          name="og:description"
          content="Dependable creative production partner offering strategic support and staffing solutions to realize your organization’s business goals."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_IN-HOUSE-AGENCY_header-image-gradient_v2-1.42c17d88f75c9b71acd6.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="In house Agency" loading="lazy"></img>

          {width < breakpoint ? <IntSupportTitleMobile /> : <IntSupportTitle />}
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainerInternal>
            <p>
              The complexities of producing a campaign can challenge even the
              most experienced in-house agency or internal team. When it comes
              to its execution, you need a creative production partner to help
              alleviate the pressures of delivering quality projects on time and
              on budget. <br /> <br />
              Brella provides a comprehensive combination of production and
              strategic services so your team can focus on what’s important –
              your campaigns and your clients.
            </p>
          </TopSectionContainerInternal>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <IntSupportPortfolioAdSection />
          <IntSupportBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default InternalSupport;
