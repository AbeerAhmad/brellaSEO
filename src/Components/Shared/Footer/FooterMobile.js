import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import YoutubeIcon from "../../../assets/icons/Brella_Web-refresh_menu-YouTube-icon.png";
import LinkedIcon from "../../../assets/icons/Brella_Web-refresh_menu-LinkedIn-icon.png";
import TwitterIcon from "../../../assets/icons/Brella_Web-refresh_social-media-icon_Twitter-x.png";
import FacebookIcon from "../../../assets/icons/Brella_Web-refresh_social-Facebook-icon.png";
import BrellaLogo from "../../../assets/img/logo-nav.svg";
import DividerLine from "../../../assets/img/Brella_Web-refresh_v1-9_desktop_white-line-divider.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  flex-direction: column;
  color: white;
  font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, sans-serif;
  position: sticky;
  top: 100vh;
  padding-top: 40px;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
  color: #ebeff3;
  font-size: 1rem;
`;

const AddressRow = styled.div`
  //margin-left: 20px;
  text-align: center;

  p {
    line-height: 1.5;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const MenuItem = styled.p`
  line-height: 1;
  font-size: 1.2rem;

  &:hover {
    color: #f3803b;
    cursor: pointer;
    transition: color 0.25s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  z-index: 2;
  margin-top: 20px;
  margin-bottom: 20px;
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
`;

const PageLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const FooterMobile = () => {
  return (
    <FooterContainer>
      <ItemRow>
        {" "}
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
        <Link to="tel:8478644040" style={{ color: "inherit" }}>
          <ItemRow>847-864-4040</ItemRow>
        </Link>
      </ItemRow>
      <ItemRow
        style={{
          margin: "10px 0 10px 0",
        }}
      >
        <img src={DividerLine} alt="Divider line"></img>
      </ItemRow>

      <ItemRow>
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
      </ItemRow>
      <ItemRow
        style={{
          marginTop: "40px",
        }}
      >
        <img src={BrellaLogo} alt="Brella Logo" style={{ width: "25%" }}></img>
      </ItemRow>
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

export default FooterMobile;
