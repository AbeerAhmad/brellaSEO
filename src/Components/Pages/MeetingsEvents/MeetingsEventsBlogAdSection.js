import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MMImage from "../../../assets/img/Brella_Web-refresh_v1-9_desktop.jpg";
import Meetings from "../../../assets/img/BuildingBetter.jpg";
import TrainingAsAnEvent from "../../../assets/img/TrainingAsAnEvent.jpg";
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

const MeetingsEventsBlogAdSection = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseEnter2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);
  const handleMouseEnter3 = () => setHover3(true);
  const handleMouseLeave3 = () => setHover3(false);

  const capitalizeString = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  };

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
            to="/blog/training-as-an-event-achieving-superior-production"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={TrainingAsAnEvent}
              alt="Training as an event Achieving Superior Production"
              loading="lazy"
              style={{
                ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              {capitalizeString(
                "TRAINING AS AN EVENT: ACHIEVING SUPERIOR PRODUCTION FOR YOUR VIRTUAL TRAINING (WEBINAR VOD)"
              )}
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/virtual-meetings-the-basics-are-still-important"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={MMImage}
              alt="Virtual Meetings: The Basics Are Still Important"
              loading="lazy"
              style={{
                ...(hover2 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Virtual Meetings: The Basics Are Still Important
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/building-better-meetings-designing-content-rich-events"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={Meetings}
              alt="Building Better Meetings: Designing Content-Rich Events"
              loading="lazy"
              style={{
                ...(hover3 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              Building Better Meetings: Designing Content-Rich Events
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
      </AdGridContainer>
      <ButtonContainer style={{ marginTop: "50px" }}>
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

export default MeetingsEventsBlogAdSection;
