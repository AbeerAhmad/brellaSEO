import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {
  PageTitleContainer,
  IndividualTitleContainer,
  FirstLine,
  SecondLine,
} from "../../styles.js";
import PortfolioList from "./PortfolioList.js";
import "./portfolio.css";
import Background_Circles1 from "../../../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";
import { fetchByDocument } from "../../../prismicApi.js";
import { getCanoicalUrl } from "Utilities/util.js";

const PageContainerP = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerPageContainerP = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Portfolio = () => {
  const [examples, setExamples] = useState([]);

  const screenSize = window.innerWidth;
  const storedScrollY = sessionStorage.navScrollY ?? 0;

  useEffect(() => {
    let storedPortfolioData = [];

    if (sessionStorage.portfolioData) {
      //console.log("From storage");
      storedPortfolioData = JSON.parse(sessionStorage.portfolioData);
      setExamples(storedPortfolioData);
    } else {
      try {
        fetchByDocument("portfolio", {
          orderings: "my.portfolio.order",
        }).then((response) => {
          //console.log("From fetch");
          sessionStorage.portfolioData = JSON.stringify(response.results);
          storedPortfolioData = JSON.parse(sessionStorage.portfolioData);
          setExamples(storedPortfolioData);
        });
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }

    setTimeout(() => {
      // Scroll Logic
      if (storedScrollY) window.scroll(0, storedScrollY);
    }, 10);
  }, [screenSize, storedScrollY]);

  return (
    <>
      <Helmet>
        <title>Brella | Portfolio</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/portfolio")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brella Productions | Our Work" />
        <meta
          name="twitter:description"
          content="Browse case studies and examples of Brella’s creative approach and problem-solving capabilities in communications, events, and eLearning."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Brella Productions | Our Work" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/portfolio" />
        <meta
          name="og:description"
          content="Browse case studies and examples of Brella’s creative approach and problem-solving capabilities in communications, events, and eLearning."
        />
        <meta
          property="og:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />
      </Helmet>
      <PageContainerP>
        <InnerPageContainerP>
          <PageTitleContainer>
            <IndividualTitleContainer>
              <FirstLine>OUR</FirstLine>
              <SecondLine>WORK</SecondLine>
            </IndividualTitleContainer>
          </PageTitleContainer>
          <PortfolioList examples={examples} />
        </InnerPageContainerP>
      </PageContainerP>
    </>
  );
};

export default Portfolio;
