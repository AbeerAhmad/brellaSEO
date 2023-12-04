import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetPlayful from "../../../assets/img/GetPlayful.jpg";
import State from "../../../assets/img/StateOfPlay.jpg";
import QLearning from "../../../assets/img/QuickLearning.jpg";
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

const ElearningBlogAdSection = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);
  const handleMouseEnter2 = () => setHover2(true);
  const handleMouseLeave2 = () => setHover2(false);
  const handleMouseEnter3 = () => setHover3(true);
  const handleMouseLeave3 = () => setHover3(false);

  const screenSize = window.innerWidth;
  const storedScrollY = sessionStorage.navScrollY ?? 0;

  useEffect(() => {
    setTimeout(() => {
      // Scroll Logic
      if (storedScrollY) window.scroll(0, storedScrollY);
    }, 10);
  }, [screenSize, storedScrollY]);

  return (
    <>
      <AdTitleContainer>
        <AdTitle>HOW</AdTitle>
        <AdTitleBlack>WE THINK</AdTitleBlack>
      </AdTitleContainer>
      <AdGridContainer>
        <AdItemSection>
          <AdItemLink
            to="/blog/get-playful--gamifying-your-next-training-course"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={GetPlayful}
              alt="Get Playful – Gamifying Your Next Training Course"
              loading="lazy"
              style={{
                ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Get Playful – Gamifying Your Next Training Course
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/the-state-of-play"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={State}
              alt="The State of Play"
              loading="lazy"
              style={{
                ...(hover2 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              The State of Play
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/blog/quick-learning"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={QLearning}
              alt="Quick Learning! "
              loading="lazy"
              style={{
                ...(hover3 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              Quick Learning!
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

export default ElearningBlogAdSection;
