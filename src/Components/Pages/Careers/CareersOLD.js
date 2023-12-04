import React from "react";
import { Helmet } from "react-helmet-async";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import CareersMainImage from "../../../assets/img/careers-header@2x.jpg";
import MobileHeader from "../../Shared/MobileHeader.js";
import DesktopHeaderCenter from "../../Shared/DesktopHeaderCenter.js";

const Container = styled.div`
  display: block;
  grid-template-rows: 19%;
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 1;
`;

const StyledIframe = styled.iframe`
  display: flex;
  position: relative;
  max-width: 800px;
  max-height: 800px;
  background-color: white;
  padding: 10px;
  margin: 80px auto;
  z-index: 2;

  @media (min-width: 768px) {
    max-height: 570px;
  }
`;

const data = {
  content: [
    {
      type: "paragraph",
      text: "JOIN US",
      spans: [],
    },
  ],
};

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Brella</title>
        <meta
          name="description"
          content="Brella is a full-spectrum digital production company, providing communications, learning, event and staffing solutions for healthcare and wellness organizations."
        />
      </Helmet>
      <Container>
        <MobileHeader
          alt="Lady in the park"
          img={CareersMainImage}
          items={[RichText.asText(data.content)]}
        />
        <DesktopHeaderCenter
          img={CareersMainImage}
          items={[RichText.asText(data.content)]}
        />
        <StyledIframe
          id="careersframe"
          title="HRM Direct Career Site iFrame"
          width="101%"
          height="1200px"
          src="https://brella.hrmdirect.com/employment/job-openings.php?nohd"
        />
      </Container>
    </>
  );
};

export default Careers;
