import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowBack from "../assets/icons/arrow-back-circle.png";
import { animated } from "react-spring";
import Background_Circles1 from "../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../assets/img/parallax-bokeh_layer2.png";
import { px2vw, calculateMargin, screenWidth } from "../Utilities/util.js";

export const PageContainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  //min-height: 200vh;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const InnerPageContainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  //min-height: 200vh;
  z-index: 1;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SecondaryPageContainer = styled.div`
  display: block;
  grid-template-rows: 19%;
  margin: 40px 60px;
  position: relative;
  /* overflow: hidden; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 2;

  @media (max-width: 768px) {
    margin: 40px 0px;
  }
`;

export const PageTitleContainer = styled.div`
  display: flex;
  color: white;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  width: 100%;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const PageMainTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #f3803b;
  line-height: 1;
  letter-spacing: 2px;
  white-space: nowrap;
  text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);
  animation-name: headlineAnimation;
  animation-timing-function: ease-out;
  animation-duration: 1.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes headlineAnimation {
    0% {
      filter: blur(15px);
      transform: translate(0px, 20px);
    }
    80% {
      filter: blur(0px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 800px) {
    font-size: 4rem;
    text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 4px;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 10rem;
  }
`;

export const IndividualTitleContainer = styled.div`
  display: flex;
  color: white;
  width: 100%;
  flex-direction: column;
  margin-top: ${px2vw(50)};
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: ${px2vw(150)};
  }
`;

export const FirstLine = styled.h2`
  margin: 0 0 0 ${px2vw(150)};
  font-size: 6rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  /* text-shadow: 3px 4px 0 #f3803b, -3px 4px 0 #f3803b, 3px -4px 0 #f3803b,
    3px 4px 0 #f3803b; */
  -webkit-text-stroke: 2px #f3803b;
  //-webkit-text-fill-color: white;
  //-o-text-stroke: 1px #f3803b;
  //-moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    //color: #f3803b;
    font-size: 4rem;
    margin: ${px2vw(30)} 0 0 ${px2vw(100)};
  }
`;

export const SecondLine = styled.h2`
  margin-left: ${px2vw(180)};
  margin-top: -5px;
  font-size: 6rem;
  font-weight: bold;
  color: #282828;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  // -webkit-text-stroke: 1px #282828;
  //-o-text-stroke: 1px #282828;
  //-moz-text-stroke: 1px #282828;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const PageTitleRow = styled.div`
  margin: ${px2vw(180)} 0 0 ${px2vw(80)};
`;

export const PageTitle = styled.div`
  color: white;
  margin-bottom: ${px2vw(50)};
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AdTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin: ${px2vw(150)} ${px2vw(180)} 0 ${px2vw(80)};
  color: white;
`;

export const AdTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  line-height: 0.8;
  letter-spacing: 2px;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

export const AdTitleBlack = styled.h2`
  margin: ${px2vw(5)} 0 ${px2vw(50)} ${px2vw(50)};
  color: #282828;
  font-size: 3.5rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  -webkit-text-stroke: 1px #282828;
  -o-text-stroke: 1px #282828;
  -moz-text-stroke: 1px #282828;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

export const AdItemTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  color: #282828;
  font-weight: bold;
  margin: ${px2vw(10)} 0 0 ${px2vw(5)};
  //font-size: clamp(1rem, 3vw, 3rem);

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
  }
`;

export const AdGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 65px;
  align-items: center;
  justify-items: center;
  margin: 0 ${px2vw(180)} ${px2vw(50)} ${px2vw(180)};

  @media (min-width: 268px) {
    margin: 0 ${px2vw(180)} ${px2vw(100)} ${px2vw(180)};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 75px;
    //margin: 0 ${px2vw(180)} ${px2vw(50)} ${px2vw(180)};
  }
`;

export const AdItemSection = styled.figure`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: white 3px solid;
    border-radius: ${px2vw(20)};
    //box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 0 ${px2vw(5)} #212529;
    background-color: #ccc;
    transition: box-shadow 0.3s ease;
  }

  img:hover {
    box-shadow: 0 0 11px #f4803b;
  }

  @media (max-width: 768px) {
    //width: 100%;
  }
`;

export const AdItemLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
  align-items: center;
  justify-items: center;
  padding: 0 100px 0 100px;
  margin: ${px2vw(30)} 0 ${px2vw(20)} 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }

  @media (max-width: 300px) {
    margin: ${px2vw(100)} 0 ${px2vw(20)} 0;
  }
`;

export const OrangeLinkButton = styled.button`
  background-color: #f3803b;
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  letter-spacing: 2px;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;
  font-family: "FuturaStd-CondensedBold", Futura, "Helvetica Neue", Arial,
    sans-serif;
  letter-spacing: 2px;
  font-size: ${px2vw(18)};
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
  margin: ${px2vw(50)} 0 ${px2vw(25)} 0;
  &:hover {
    background-color: #e07839;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 10px 20px;
    white-space: nowrap;
  }

  @media (max-width: 400px) {
    margin: ${px2vw(100)} 0 ${px2vw(25)} 0;
  }

  /*@media (max-width: 425px) {
    margin: ${px2vw(100)} 0 ${px2vw(25)} 0;
  }

  @media (max-width: 375px) {
    margin: ${px2vw(200)} 0 ${px2vw(25)} 0;
  } */

  /* @media (max-width: 320px) {
    margin: ${px2vw(200)} 0 ${px2vw(25)} 0;
  }

  @media (max-width: 300px) {
    margin: ${px2vw(300)} 0 ${px2vw(25)} 0;
  } */
`;

export const TopSectionContainer = styled.div`
  border-left: solid 4px #f3803b;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.8rem;
  position: relative;
  z-index: 1;
  margin: ${px2vw(calculateMargin(250), screenWidth)} ${px2vw(0)} ${px2vw(50)}
    ${px2vw(250)};

  p {
    line-height: 2;
    padding: 0 ${px2vw(200)} 0 ${px2vw(20)};
    margin-left: ${px2vw(20)};

    @media (max-width: 425px) {
      margin-left: ${px2vw(35)};
    }
  }

  @media only screen and (min-width: 762px) and (max-width: 800px) {
    font-size: 1.3rem;
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 600px) and (max-width: 762px) {
    font-size: 1.2rem;
    padding: 0 ${px2vw(50)} 0 ${px2vw(20)};
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 200px) and (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: ${px2vw(150)};
  }

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

export const BackImage = styled.div`
  position: relative;
  margin-top: -10vw;

  img {
    position: absolute;
    width: 100%;
    height: auto;
    //object-fit: scale-down;
  }

  @media (max-width: 425px) {
    margin-top: 0vw;
  }
`;

export const ItemImageLeft = styled.div`
  padding: 25px 5px 0 50px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    img {
      width: 0%;
    }
  }
`;

export const ItemImageRight = styled.div`
  padding: 25px 50px 0 5px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    img {
      width: 0%;
    }
  }
`;

export const SignUpContainer = styled.div`
  display: block;
  grid-template-rows: 19%;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 1;
`;

export const FormRow = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  div {
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    .error {
      position: absolute;
      bottom: -19px;
      font-size: 12px;
      left: 0;
    }
  }
  label {
    font-family: "FuturaStd-CondensedBold", Futura, "Helvetica Neue", Arial,
      sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  input {
    color: black;
    height: 34px;
    background-color: transparent;
    border: 1px black solid;
    padding: 10px;
    transition: box-shadow 0.27s;
  }

  input:active {
    box-shadow: 0 0 11px #f4803b;
  }

  input:focus {
    box-shadow: 0 0 11px #f4803b;
  }

  @media (min-width: 425px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    div:nth-child(4) {
      grid-column-start: 3;
    }
  }
`;

export const BlogRow = styled.div`
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  grid-template-rows: 1fr;
  margin: 20px 0;
  padding: 0 100px 0 100px;

  @media (min-width: 200px) {
    grid-template-columns: 1fr;
    padding: 0px;
  }
  @media (min-width: 320px) {
    grid-template-columns: 1fr;
    padding: 0 50px 0 20px;
  }

  @media (min-width: 375px) {
    grid-template-columns: 1fr;
    padding: 0 50px 0 20px;
  }

  @media (min-width: 425px) {
    grid-template-columns: 1fr;
    padding: 0 50px 0 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 80px 0 80px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 100px 0 100px;
  }
`;

export const BlogCard = styled(Link)`
  position: relative;
  color: black;
  justify-items: center;
  padding: 1em 1em;
  text-decoration: none;
  width: 100%;

  &:hover {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 250px;

    object-fit: cover;
    border: white 3px solid;
    border-radius: ${px2vw(20)};
    //box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 0 ${px2vw(5)} #212529;
    //background-color: #ccc;
    transition: box-shadow 0.3s ease;

    @media (min-width: 2560px) {
      height: 400px;
    }
  }

  img:hover {
    box-shadow: 0 0 11px #f4803b;
  }
`;

export const BlogCardTitle = styled(Link)`
  display: flex;
  text-align: start;
  justify-content: start;
  align-items: start;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 0 0 0 15px;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 2560px) {
    font-size: 30px;
  }
`;

export const StyledResponse = styled.p`
  color: black;
`;

export const StyledLinkBack = styled.div`
  display: inline-flex;
  position: relative;
  transform: translate(40px, 55px);
  background-image: url(${ArrowBack});
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-top: ${px2vw(100)};
  width: 50px;
  height: 50px;
  transition: all 0.3s;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1600px) {
    transform: translate(24px, 5px);
    margin-bottom: 5px;
  }
`;

export const Section = ({ children, col, padding, size }) => {
  if (size === 2560) {
    return (
      <div className="container">
        <div className="row px-4 pb-4" style={{}}>
          <div
            className={`col-md-${col} p-4 px-md-5`}
            style={{
              color: "black",
              fontSize: "32px",
              /*background: 'rgba(128, 128, 128, 0.4)',*/
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row px-4 pb-4" style={{}}>
          <div
            className={`col-md-${col} p-4 px-md-5`}
            style={{
              color: "black",
              fontSize: "20px",
              /*background: 'rgba(128, 128, 128, 0.4)',*/
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export const Title = styled.h1`
  color: black;
  font-family: "FuturaStd-CondensedBold", Futura, "Helvetica Neue", Arial,
    sans-serif;
  font-size: 3.6rem;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 960px) {
    font-size: 2.4rem;
    //text-align: center;
  }
`;

export const BigFont = styled(animated.div)`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  //max-font-size: 60px;
  font-size: ${(props) => props.size};
  z-index: 99;

  @media (min-width: 768px) {
    //font-size: 3.5vw;
  }
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

export const SmallerHeaderContainer = styled.div`
  position: relative;
  top: 0;
  min-height: 68vh;
  display: none;

  @media (min-width: 768px) {
    height: 80vh;
    display: block;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 10% 0 0 7%;
`;

export const SmallerImageCover = styled.img`
  display: block;
  min-height: 80vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

export const BackgroundSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 63, 62, 1);
  z-index: -1;
  height: ${(props) => (props.height ? `${props.height / 2.3}px` : "100%")};

  @media (min-width: 1440px) {
    height: ${(props) => `${props.height}px` || "100%"};
  }
`;

export const MediumText = styled.div`
  padding: ${(props) => props.padding};
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  text-align: ${(props) => props.align};
  font-size: 30px;
  font-weight: bold;
  color: black;

  @media (min-width: 1440px) {
    font-size: 50px;
  }

  @media (min-width: 2560px) {
    font-size: 6rem;
  }
`;

export const AddPadding = styled.div`
  padding-top: ${(props) =>
    props.padding === "200px" ? "100px" : props.padding};

  @media (min-width: 768px) {
    padding-top: ${(props) => props.padding};
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

  @media (min-width: 768px) {
    font-size: ${(props) => props.size};
    padding-top: ${(props) => props.padding};
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;
