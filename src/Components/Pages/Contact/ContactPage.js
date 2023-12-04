import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import ContactFormNS from "../../Shared/Contact/ContactFormNS.js";
import Background_Circles1 from "../../../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";
import { getCanoicalUrl } from "Utilities/util.js";

const ContactPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-x: hidden !important;
`;

const ContactInnerPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContactContentContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  z-index: 20;
`;

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Brella | Contact</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/contact")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Insights and Inspiration"
        />
        <meta
          name="twitter:description"
          content="Reach out to learn how Brella can help with your toughest communications, events, and eLearning production challenges."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Brella Productions | Insights and Inspiration"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/contact" />
        <meta
          name="og:description"
          content="Reach out to learn how Brella can help with your toughest communications, events, and eLearning production challenges."
        />
        <meta
          property="og:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />
      </Helmet>
      <ContactPageContainer>
        <ContactInnerPageContainer>
          <ContactContentContainer>
            <ContactFormNS />
          </ContactContentContainer>
        </ContactInnerPageContainer>
      </ContactPageContainer>
    </>
  );
};

export default ContactPage;
