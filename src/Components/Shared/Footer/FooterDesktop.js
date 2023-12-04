import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BrellaLogo from "../../../assets/img/logo-nav.svg";
import YoutubeIcon from "../../../assets/icons/Brella_Web-refresh_menu-YouTube-icon.png";
import LinkedIcon from "../../../assets/icons/Brella_Web-refresh_menu-LinkedIn-icon.png";
import TwitterIcon from "../../../assets/icons/Brella_Web-refresh_social-media-icon_Twitter-x.png";
import FacebookIcon from "../../../assets/icons/Brella_Web-refresh_social-Facebook-icon.png";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 20% 20% 45%;
  grid-template-rows: 1fr;
  gap: 5px;
  align-items: left;
  justify-items: left;
  background: #282828;
  color: white;
  font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, sans-serif;
  //margin-top: 50px;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const ItemRow = styled.div`
  margin: 50px 25px 20px 50px;

  @media (max-width: 1024px) {
    margin: 50px 25px 20px 25px;
  }

  @media (min-width: 2560px) {
    margin: 100px 25px 20px 100px;

    img {
      width: 150%;
    }
  }
`;

const MenuRow = styled.div`
  font-size: 1rem;
  margin: 5px 20px 5px 20px;
  border-left: white 2px solid;

  @media (max-width: 1024px) {
    margin: 5px 0px 5px 20px;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const AddressRow = styled.div`
  margin-left: 20px;

  p {
    line-height: 1.5;
  }
`;

const MenuItem = styled.p`
  margin-left: 20px;

  line-height: 2;

  &:hover {
    color: #f3803b;
    cursor: pointer;
    transition: color 0.25s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  justify-content: right;
  z-index: 2;
  margin: ${px2vw(20)} 0 ${px2vw(20)}
    ${px2vw(calculateMargin(250), screenWidth)};

  @media (max-width: 2560px) {
    margin: ${px2vw(20)} 0 ${px2vw(20)}
      ${px2vw(calculateMargin(550), screenWidth)};
  }

  @media (max-width: 1440px) {
    margin: ${px2vw(20)} 0 ${px2vw(20)}
      ${px2vw(calculateMargin(550), screenWidth)};
  }
`;

const IconLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const IconImg = styled.img`
  width: 37px;
  height: 37px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.55;
  }

  @media (min-width: 2560px) {
    width: 60px;
    height: 60px;
  }
`;

const PageLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const FooterDesktop = () => {
  return (
    <FooterContainer>
      <ItemRow>
        <Link to="/">
          <img src={BrellaLogo} alt="Brella Logo"></img>{" "}
        </Link>
      </ItemRow>

      <MenuRow>
        <AddressRow>
          <p>
            <strong style={{ letterSpacing: "1px" }}>BRELLA PRODUCTIONS</strong>
            <br />
            CHICAGO HEADQUARTERS
            <br />
            1601 SIMPSON ST,
            <br />
            EVANSTON, IL 60201
            <br />
          </p>
        </AddressRow>
        <AddressRow>847-864-4040</AddressRow>
      </MenuRow>
      <MenuRow>
        <PageLink to="/contact">
          <MenuItem>CONTACT US</MenuItem>
        </PageLink>
        <PageLink to="/privacy">
          <MenuItem>PRIVACY POLICY</MenuItem>
        </PageLink>
        {/* <a
          href="https://brella.com/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <MenuItem>SITEMAP</MenuItem>
        </a> */}
      </MenuRow>
      <IconContainer>
        <IconLink>
          <a
            href="https://www.linkedin.com/company/brella-productions?trk=biz-companies-cym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImg src={LinkedIcon} alt="Linkedin icon" />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://www.youtube.com/user/brellaproductionsinc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImg src={YoutubeIcon} alt="YouTube icon" />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://twitter.com/brellaprod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImg src={TwitterIcon} alt="Twitter icon" />
          </a>
        </IconLink>
        <IconLink>
          <a
            href="https://www.facebook.com/BrellaProductions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconImg src={FacebookIcon} alt="Facebook icon" />
          </a>
        </IconLink>
      </IconContainer>

      {/* <ItemRow style={{ color: "#afb3b7", marginTop: "20px" }}>
        Copyright &copy; 2023 Brella Productions. All Rights Reserved.
      </ItemRow> */}
    </FooterContainer>
  );
};

export default FooterDesktop;
