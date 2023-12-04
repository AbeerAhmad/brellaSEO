import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandBuilding from "../../../assets/img/BrandBuilding.jpg";
import BuildWorkfoce from "../../../assets/img/BuildWorkfoce.jpg";
import EngagingPresentations from "../../../assets/img/EngagingPresentations.jpg";
import {
  AdTitleContainer,
  AdTitle,
  AdTitleBlack,
  AdItemTitle,
  AdGridContainer,
  AdItemSection,
  AdItemLink,
  ButtonContainer,
  OrangeLinkButton,
  ItemImageLeft,
  ItemImageRight,
} from "../../styles.js";
import DividerImage from "../../../assets/img/Brella_Web-refresh_grey-divider-line.png";

const CorpCommBlogAdSection = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseEnter2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);
  const handleMouseEnter3 = () => setHover3(true);
  const handleMouseLeave3 = () => setHover3(false);

  //const screenSize = window.innerWidth;
  const storedScrollY = sessionStorage.navScrollY ?? 0;

  useEffect(() => {
    setTimeout(() => {
      // Scroll Logic
      if (storedScrollY) window.scroll(0, storedScrollY);
    }, 10);
  }, [storedScrollY]);

  return (
    <>
      <AdTitleContainer>
        <AdTitle>HOW</AdTitle>
        <AdTitleBlack>WE THINK</AdTitleBlack>
      </AdTitleContainer>
      <AdGridContainer>
        <AdItemSection>
          <AdItemLink
            to="/blog/brand-building-video-for-a-nonprofits-narrative"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={BrandBuilding}
              alt="Brand Building: Video for a Nonprofit’s Narrative"
              loading="lazy"
              style={{
                ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Brand Building: Video for a Nonprofit’s Narrative
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/build-up-your-workforce-and-boost-your-brand-with-employee"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={BuildWorkfoce}
              alt="Build Up Your Workforce and Boost Your Brand with Employee Journey Videos"
              loading="lazy"
              style={{
                ...(hover2 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Build Up Your Workforce and Boost Your Brand with Employee Journey
              Videos
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/engaging-event-presentations-do-this--and-then-some"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={EngagingPresentations}
              alt="Engaging Event Presentations Do This – And Then Some"
              loading="lazy"
              style={{
                ...(hover3 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              Engaging Event Presentations Do This – And Then Some
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
      </AdGridContainer>
      <ButtonContainer>
        <ItemImageLeft>
          <img src={DividerImage} alt="Grey line" loading="lazy"></img>
        </ItemImageLeft>
        <Link
          to="/blog"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => {
            sessionStorage.navScrollY = 0;
          }}
        >
          <OrangeLinkButton>VISIT OUR BLOG</OrangeLinkButton>
        </Link>
        <ItemImageRight>
          <img src={DividerImage} alt="Grey line" loading="lazy"></img>
        </ItemImageRight>
      </ButtonContainer>
    </>
  );
};

export default CorpCommBlogAdSection;
