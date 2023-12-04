import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrainingAsAnEvent from "../../../assets/img/TrainingAsAnEvent.jpg";
import Business from "../../../assets/img/BosteringYourBusiness.jpg";
import Workforce from "../../../assets/img/BuildWorkfoce.jpg";
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

const BlogAdSection = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseEnter2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);
  const handleMouseEnter3 = () => setHover3(true);
  const handleMouseLeave3 = () => setHover3(false);

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
            to="/blog/training-as-an-event-achieving-superior-production"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={TrainingAsAnEvent}
              alt="Training as an Event"
              loading="lazy"
              style={{
                ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Training As an Event: Achieving Superior Production for Your
              Virtual Training (Webinar VOD)
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/bolstering-your-business-with-customer-education-experiences"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={Business}
              alt="Bolster Your Business with Customer Education Experiences "
              loading="lazy"
              style={{
                ...(hover2 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Bolster Your Business with Customer Education Experiences
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
              src={Workforce}
              alt="Build Up Your Workforce and Boost Your Brand with Employee Journey Videos "
              loading="lazy"
              style={{
                ...(hover3 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              Build Up Your Workforce and Boost Your Brand with Employee Journey
              Videos
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
      </AdGridContainer>
      <ButtonContainer style={{ marginBottom: "100px" }}>
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

export default BlogAdSection;
