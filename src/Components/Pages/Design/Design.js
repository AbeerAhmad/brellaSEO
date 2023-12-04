import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import {
  PageContainer,
  InnerPageContainer,
  TopSectionContainer,
} from "../../styles.js";
import styled from "styled-components";
import BackgroundImg from "../../../assets/img/DesignHero_v7-2.jpg";
import DesignTitle from "./DesignTitle.js";
import DesignPortfolioAdSection from "./DesignPortfolioAdSection.js";
import DesignBlogAdSection from "./DesignBlogAdSection.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import DesignTitleMobile from "./DesignTitleMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

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
  }

  @media (max-width: 320px) {
    //margin-top: 2vw;
  }
`;

const Design = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | Design</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/design")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Engagement & Digital Design Company"
        />
        <meta
          name="twitter:description"
          content="Comprehensive creative design services to inspire and engage your target audience."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/DesignHero_v7-2.21d26adf44d8dd381ace.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Engagement & Digital Design Company"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/design" />
        <meta
          name="og:description"
          content="Comprehensive creative design services to inspire and engage your target audience."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/DesignHero_v7-2.21d26adf44d8dd381ace.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Baloons" loading="lazy"></img>
          {width < breakpoint ? <DesignTitleMobile /> : <DesignTitle />}
        </BackImage>
        <InnerPageContainer>
          <TopSectionContainer>
            <p>
              Deep engagement with your customers, employees, or affiliates
              calls for more than clever messaging set against attractive
              backdrops. To meet your business objectives, you need to offer
              curated experiences that stimulate their senses and appeal to
              their needs and tastes.
              <br /> <br />
              Our creative design services teams perform deep analyses of your
              goals and audience to blend message and medium into high-impact
              moments of connection.
            </p>
          </TopSectionContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
        </InnerPageContainer>
        <InnerPageContainer>
          <DesignPortfolioAdSection />
          <DesignBlogAdSection />
        </InnerPageContainer>
        <InnerPageContainer>
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default Design;
