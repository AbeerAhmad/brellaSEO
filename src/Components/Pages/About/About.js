import React from "react";
import { Helmet } from "react-helmet-async";
import useViewport from "CustomHooks/UseViewport.js";
import { PageContainer } from "../../styles.js";
import styled from "styled-components";
import BackgroundImg from "../../../assets/img/Brella_Web-refresh_header-image-About_v3.jpg";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";
import AboutUsTitle from "./AboutUsTitle.js";
import ContactFormNS from "../../Shared/Contact/ContactFormNS.js";
import MiddleSection from "./MiddleSection.js";
import MiddleSectionMobile from "./MiddleSectionMobile.js";
import { getCanoicalUrl } from "Utilities/util.js";

const BackImage = styled.div`
  position: relative;
  margin-top: -5vw;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    //object-fit: scale-down;
  }

  @media (max-width: 425px) {
    margin-top: 5vw;
  }
`;

const InnerPageContainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
`;

const AboutUs = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return (
    <>
      <Helmet>
        <title>Brella | About</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/about")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brella Productions | Who We Are" />
        <meta
          name="twitter:description"
          content="WBE-certified communications and digital learning company with more than three decades of experience serving global clients in pharma, manufacturing and other heavily regulated industries."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/Brella_Web-refresh_header-image-About_v3.5cfec8e1333c2916de71.jpg"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Brella Productions | Who We Are" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/about" />
        <meta
          name="og:description"
          content="WBE-certified communications and digital learning company with more than three decades of experience serving global clients in pharma, manufacturing and other heavily regulated industries."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/Brella_Web-refresh_header-image-About_v3.5cfec8e1333c2916de71.jpg"
        />
      </Helmet>
      <PageContainer>
        <BackImage>
          <img src={BackgroundImg} alt="Brella team" loading="lazy"></img>
          <AboutUsTitle />
        </BackImage>
        <InnerPageContainer>
          {width < breakpoint ? <MiddleSectionMobile /> : <MiddleSection />}
          <ContactFormNS />
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default AboutUs;
