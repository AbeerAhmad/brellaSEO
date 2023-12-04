import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AdTitleContainer,
  AdTitle,
  AdTitleBlack,
  AdItemTitle,
  AdGridContainer,
  AdItemSection,
  ButtonContainer,
  OrangeLinkButton,
  ItemImageLeft,
  ItemImageRight,
  AdItemLink,
} from "../styles.js";
import DividerImage from "../../assets/img/Brella_Web-refresh_grey-divider-line.png";

// const AdPortfolioData = [
//   {
//     url: "/portfolio/virtual-meeting-sizzle-reel",
//     src: "",
//     alt: "Virtual Meeting",
//     title: "Samples of Virtual Meetings",
//   },
//   {
//     url: "/portfolio/bs-orise-gel",
//     src: "",
//     alt: "Boston Scientific Orise Gel Video",
//     title: "Boston Scientific Orise Gel Video",
//   },
//   {
//     url: "/portfolio/jill-patient-interview",
//     src: "",
//     alt: "Jill Patient Journey Video",
//     title: "Jill Patient Journey Video",
//   },
// ];

const PortfolioAdSection = ({ portfolio }) => {
  const [hover1, setHover1] = useState(false);

  const handleMouseEnter1 = () => setHover1(true);
  const handleMouseLeave1 = () => setHover1(false);

  const storedScrollY = sessionStorage.navScrollY ?? 0;

  useEffect(() => {
    setTimeout(() => {
      // Scroll Logic
      if (storedScrollY) window.scroll(0, storedScrollY);
    }, 10);
  }, [storedScrollY]);

  console.log(portfolio);

  return (
    <>
      <AdTitleContainer>
        <AdTitle>WHAT</AdTitle>
        <AdTitleBlack>WE'VE DONE</AdTitleBlack>
      </AdTitleContainer>
      <AdGridContainer>
        {portfolio.map((item) => {
          return (
            <AdItemSection>
              <AdItemLink
                to={item.url}
                onClick={() => {
                  sessionStorage.navScrollY = window.scrollY;
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    ...(hover1 && { boxShadow: "0 0 11px #f4803b" }),
                  }}
                ></img>
                <AdItemTitle
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  {item.title}
                </AdItemTitle>
              </AdItemLink>
            </AdItemSection>
          );
        })}
      </AdGridContainer>
      <ButtonContainer>
        <ItemImageLeft>
          <img src={DividerImage} alt="Grey line" loading="lazy"></img>
        </ItemImageLeft>
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "white" }}
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

export default PortfolioAdSection;
