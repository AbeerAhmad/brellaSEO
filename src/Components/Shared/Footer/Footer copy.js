import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BrellaLogo from "../../../assets/img/logo-nav.svg";

const FooterContainer = styled.div`
  display: flex;
  justify-content: left;
  background: #282828;
  flex-direction: row;
  font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, sans-serif;
  color: white;
  margin-top: 50px;
  position: relative;
  bottom: 0;
  padding: 20px;
  width: 100%;
  z-index: 1;
`;

const ItemRow = styled.div`
  margin: 30px 25px 5px 20px;

  @media (max-width: 320px) {
    margin: 30px 0px 0px 00px;
  }
`;

const MenuRow = styled.div`
  line-height: 2;
  font-size: 1rem;
  margin: 5px 20px 5px 20px;
  border-left: white 2px solid;
`;

const MenuItem = styled.div`
  margin-left: 20px;
  &:hover {
    color: #f3803b;
    cursor: pointer;
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ItemRow>
        <Link to="/">
          <img src={BrellaLogo} alt="Brella Logo"></img>{" "}
        </Link>
      </ItemRow>

      <MenuRow>
        <MenuItem>SOLUTIONS</MenuItem>
        <Link
          to="/portfolio"
          style={{ textDecoration: "none", color: "white" }}
        >
          <MenuItem> PORTFOLIO</MenuItem>
        </Link>
        <MenuItem>SERVICES</MenuItem>
      </MenuRow>
      <MenuRow>
        <Link to="/blog" style={{ textDecoration: "none", color: "white" }}>
          <MenuItem>BLOG</MenuItem>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
          <MenuItem> ABOUT</MenuItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
          <MenuItem> CONTACT</MenuItem>
        </Link>
      </MenuRow>

      {/* <ItemRow style={{ color: "#afb3b7", marginTop: "20px" }}>
        Copyright &copy; 2023 Brella Productions. All Rights Reserved.
      </ItemRow> */}
    </FooterContainer>
  );
};

export default Footer;

// import React from "react";
// import styled from "styled-components";

// import YoutubeIcon from "../../assets/icons/youtube.svg";
// import LinkedIcon from "../../assets/icons/linkedin.svg";
// import TwitterIcon from "../../assets/icons/twitter.svg";
// import FacebookIcon from "../../assets/icons/facebook.svg";
// import BrellaLogo from "../../assets/img/logo-nav.svg";
// import DividerLine from "../../assets/img/Brella_Web-refresh_v1-9_desktop_white-line-divider.png";

// const FooterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   background: black;
//   flex-direction: column;
//   color: white;
//   position: sticky;
//   top: 100vh;
// `;
// const ItemRow = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   line-height: 2;
//   color: #ebeff3;
//   font-size: 0.8rem;
// `;

// const IconContainer = styled.div`
//   display: flex;
//   grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
//   justify-content: center;
//   z-index: 2;
//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

// export const IconLink = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 8px;
// `;

// export const IconImg = styled.img`
//   width: 50px;
//   height: 40px;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <ItemRow
//         style={{
//           marginTop: "40px",
//         }}
//       >
//         <img src={BrellaLogo} alt="Brella Logo"></img>
//       </ItemRow>
//       <ItemRow
//         style={{
//           margin: "20px 0 20px 0",
//         }}
//       >
//         <img src={DividerLine} alt="Divider line"></img>
//       </ItemRow>

//       <ItemRow style={{ fontWeight: "bolder" }}>
//         BRELLA PRODUCTIONS CHICAGO HEADQUARTERS
//       </ItemRow>
//       <ItemRow>1601 SIMPSON ST, EVANSTON, IL 60201</ItemRow>
//       <ItemRow>847-864-4040</ItemRow>

//       <IconContainer>
//         <IconLink>
//           <a
//             href="https://www.linkedin.com/company/brella-productions?trk=biz-companies-cym"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconImg src={LinkedIcon} alt="Linkedin icon" />
//           </a>
//         </IconLink>
//         <IconLink>
//           <a
//             href="https://www.youtube.com/user/brellaproductionsinc"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconImg src={YoutubeIcon} alt="YouTube icon" />
//           </a>
//         </IconLink>
//         <IconLink>
//           <a
//             href="https://twitter.com/brellaprod"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconImg src={TwitterIcon} alt="Twitter icon" />
//           </a>
//         </IconLink>
//         <IconLink>
//           <a
//             href="https://www.facebook.com/BrellaProductions"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconImg src={FacebookIcon} alt="Facebook icon" />
//           </a>
//         </IconLink>
//       </IconContainer>

//       <ItemRow style={{ color: "#afb3b7", marginTop: "20px" }}>
//         Copyright &copy; 2023 Brella Productions. All Rights Reserved.
//       </ItemRow>
//     </FooterContainer>
//   );
// };

// export default Footer;
