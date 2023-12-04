import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuraCacia from "../../../assets/img/AuraCacia.jpg";
import Lumicoil from "../../../assets/img/LumicoilVideo.jpg";
import ConferenceDisplay from "../../../assets/img/ConferenceDisplay.jpg";
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

const CustEduPortfolioAdSection = () => {
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
        <AdTitle>WHAT</AdTitle>
        <AdTitleBlack>WE'VE DONE</AdTitleBlack>
      </AdTitleContainer>
      <AdGridContainer>
        <AdItemSection>
          <AdItemLink
            to="/portfolio/aura-cacia-in-store-display-app"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={AuraCacia}
              alt="Aura Cacia In-Store Display App"
              loading="lazy"
              style={{
                ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              Aura Cacia In-Store Display App
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/portfolio/bs-lumicoil-video"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={Lumicoil}
              alt="Boston Scientific Lumicoil Instructional Video"
              style={{
                ...(hover2 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Boston Scientific Lumicoil Instructional Video
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
        <AdItemSection>
          <AdItemLink
            to="/portfolio/fortune-500-pharma-client-medical-conference-display"
            onClick={() => {
              sessionStorage.navScrollY = window.scrollY;
            }}
          >
            <img
              src={ConferenceDisplay}
              alt="Fortune 500 Pharma Client Medical Conference Display"
              loading="lazy"
              style={{
                ...(hover3 && { boxShadow: "0 0 11px #f4803b" }),
              }}
            ></img>
            <AdItemTitle
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              Fortune 500 Pharma Client Medical Conference Display
            </AdItemTitle>
          </AdItemLink>
        </AdItemSection>
      </AdGridContainer>
      <ButtonContainer>
        <ItemImageLeft>
          <img src={DividerImage} alt="Grey line" loading="lazy"></img>
        </ItemImageLeft>
        <Link
          to="/portfolio"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          onClick={() => {
            sessionStorage.navScrollY = 0;
          }}
        >
          <OrangeLinkButton>VIEW FULL PORTFOLIO</OrangeLinkButton>
        </Link>
        <ItemImageRight>
          <img src={DividerImage} alt="Grey line" loading="lazy"></img>
        </ItemImageRight>
      </ButtonContainer>
    </>
  );
};

export default CustEduPortfolioAdSection;
