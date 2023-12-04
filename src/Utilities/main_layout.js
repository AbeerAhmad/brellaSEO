import styled from "styled-components";
import { animated } from "react-spring";
import { Link } from "react-router-dom";

// import Background_img from "./../assets/homeload-bgtexture2x.png";
import Background_img from "./../assets/img/pages-background@2x.webp";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  desktop4k: "4096px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
  desktop4k: `(min-width: ${size.desktop4k})`,
};

export const Container = styled.div`
  display: block;
  grid-template-rows: 19%;
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 1;
  /* @media ${device.laptop} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  } */
`;

//background-image: url(${Background_img});
export const Backgroundimage = styled.div`
  background-image: url(${Background_img});
  background-color: rgba(255, 255, 255, 0);
  top: 0;
  height: 4288px;
  width: 100%;
  position: fixed;
  margin: 0;
  left: 0;
  transform: rotate(0);
  opacity: 0.65;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const BackgroundNoImage = styled.div`
  background-color: rgba(255, 255, 255, 0);
  top: 0;
  height: 4288px;
  width: 100%;
  position: fixed;
  margin: 0;
  left: 0;
  transform: rotate(0);
  opacity: 0.65;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const MediumText = styled.div`
  padding: ${(props) => props.padding};
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  text-align: ${(props) => props.align};
  font-size: 30px;
  font-weight: bold;
  color: black;
  @media ${device.laptopL} {
    font-size: 50px;
  }
`;

export const MainImage = styled.div`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0);
  background-size: cover;
  background-position: center;
  top: 0;
  height: 801px;
  width: 100%;
  margin: 0;
  transform: rotate(0);
  opacity: 1;
  display: flex;
  flex-direction: column;
  padding: 10% 0 0 7%;
`;

export const BigFont = styled(animated.div)`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  //max-font-size: 60px;
  font-size: ${(props) => props.size};
  @media ${device.tablet} {
    //font-size: 3.5vw;
  }
`;

export const MainText = styled(animated.div)`
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  height: auto;
  width: auto;
  margin: 0;
  transform: rotate(0);
  opacity: 1;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: ${(props) => props.size};
  color: rgba(255, 255, 255, 1);
  text-align: ${(props) => props.align};
  letter-spacing: 1.31px;
  padding-top: ${(props) => props.padding};
  @media ${device.tablet} {
    font-size: ${(props) => props.size};
    padding-top: ${(props) => props.padding};
  }
`;

export const ImgResponsive = styled(animated.img)`
  width: 100%;
  height: auto;
  vertical-align: bottom;
  object-fit: cover;
  max-width: 660px;
  width: ${(props) => props.width};
  position: relative;
  margin-top: ${(props) => props.mt};
  top: ${(props) => props.top};
  @media ${device.laptop} {
  }
`;

export const BackgroundSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 63, 62, 1);
  z-index: -1;
  height: ${(props) => (props.height ? `${props.height / 2.3}px` : "100%")};
  @media ${device.laptopL} {
    height: ${(props) => `${props.height}px` || "100%"};
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  top: 0;
  min-height: 68vh;
  display: none;
  @media ${device.tablet} {
    height: 100vh;
    display: block;
  }
`;

export const SmallerHeaderContainer = styled.div`
  position: relative;
  top: 0;
  min-height: 68vh;
  display: none;
  @media ${device.tablet} {
    height: 80vh;
    display: block;
  }
`;

export const HeaderContainerMobile = styled.div`
  top: 0;
  display: block;
  @media ${device.tablet} {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;

  padding: 10% 0 0 7%;
`;
export const TextWrapperMobile = styled(TextWrapper)`
  height: 100vh;
  padding: 0;
`;

export const ImageCover = styled.img`
  display: block;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

export const SmallerImageCover = styled.img`
  display: block;
  min-height: 80vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

export const ImageCoverMobile = styled(animated.img)`
  display: block;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: right;
  @media ${device.tablet} {
    display: none;
  }
`;

export const BrellaLandingTextImage = styled.img`
  padding-top: 1.3rem;
  padding-left: 0.2rem;
  width: 100%;
  height: 100%;
`;

export const AddPadding = styled.div`
  padding-top: ${(props) =>
    props.padding === "200px" ? "100px" : props.padding};
  @media ${device.tablet} {
    padding-top: ${(props) => props.padding};
  }
`;

export const MailToDesktop = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  z-index: 999;
  outline: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const IconImg = styled.img`
  width: 60px;
  height: auto;
  padding: 0.25rem;
`;
