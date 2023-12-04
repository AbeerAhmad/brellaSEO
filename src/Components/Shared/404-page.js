import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Image404 from "../../assets/img/Brella_Web-refresh_404_illustration_yeti.png";
import styled from "styled-components";
import { px2vw } from "../../Utilities/util.js";
import Background_Circles1 from "../../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../../assets/img/parallax-bokeh_layer2.png";

const PageContainer404 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerPageContainer404 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
`;

const MiddleSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  margin-top: ${px2vw(150)};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 320px) {
    margin-top: ${px2vw(250)};
  }
`;

const ItemImage = styled.div`
  width: 100%;

  img {
    width: 100%;

    @media (max-width: 425px) {
      width: 80%;
    }
  }
`;

const ItemContainer = styled.div`
  margin-right: ${px2vw(20)};
`;

const ItemTitle = styled.h1`
  margin: ${px2vw(0)} 0 0 0;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  line-height: 0.7;
  -webkit-text-stroke: 1px #f3803b;
  -o-text-stroke: 1px #f3803b;
  -moz-text-stroke: 1px #f3803b;

  @media (max-width: 768px) {
    margin: ${px2vw(-700)} 0 0 ${px2vw(-150)};
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
    margin: ${px2vw(-600)} 0 0 ${px2vw(50)};
  }

  @media (min-width: 2560px) {
    font-size: 6rem;
  }
`;

const ItemTitle2 = styled.h2`
  margin: 9px 0 ${px2vw(0)} 0;
  color: #282828;
  font-size: 3rem;
  font-weight: bold;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: ${px2vw(50)} 0 0 ${px2vw(-150)};
  }

  @media (max-width: 425px) {
    font-size: 1.7rem;
    margin: ${px2vw(50)} 0 0 ${px2vw(50)};
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }

  @media (max-width: 286px) {
    font-size: 1.2rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const BackHomeButton = styled.button`
  background-color: #f3803b;
  border: none;
  color: white;
  padding: 17px 40px;
  text-align: center;
  letter-spacing: 2px;
  transition: background-color 0.2s;
  text-decoration: none;
  display: inline-block;
  font-family: "FuturaStd-CondensedBold", Futura, "Helvetica Neue", Arial,
    sans-serif;
  letter-spacing: 2px;
  font-size: ${px2vw(28)};
  font-weight: bold;
  border-radius: 10px;
  width: 80%;
  margin: ${px2vw(50)} 0 ${px2vw(25)} 0;
  &:hover {
    background-color: #e07839;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 10px 40px;
    white-space: nowrap;
    margin: ${px2vw(50)} 0 0 ${px2vw(-150)};
    width: 60%;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin: ${px2vw(50)} 0 0 ${px2vw(60)};
    width: 60%;
  }

  @media (max-width: 375px) {
    margin: ${px2vw(50)} 0 0 ${px2vw(60)};
    padding: 10px 10px;
    width: 50%;
  }

  @media (max-width: 320px) {
    margin: ${px2vw(50)} 0 0 ${px2vw(60)};
    padding: 10px 10px;
    width: 50%;
  }

  @media (max-width: 286px) {
    font-size: 0.8rem;
    margin: ${px2vw(50)} 0 0 ${px2vw(60)};
    padding: 5px 5px;
    width: 50%;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
    width: 80%;
  }
`;

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Brella</title>
        <meta
          name="description"
          content="Brella is a full-spectrum digital production company, providing communications, learning, event and staffing solutions for healthcare and wellness organizations."
        />
      </Helmet>
      <PageContainer404>
        <InnerPageContainer404>
          <MiddleSectionContainer>
            <ItemImage>
              <img src={Image404} alt="Yeti" loading="lazy"></img>
            </ItemImage>
            <ItemContainer>
              <ItemTitle>OOPS!</ItemTitle>
              <ItemTitle2>This page does not exist.</ItemTitle2>

              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                onClick={() => {
                  sessionStorage.navScrollY = 0;
                }}
              >
                <BackHomeButton>BACK TO HOME</BackHomeButton>
              </Link>
            </ItemContainer>
          </MiddleSectionContainer>
        </InnerPageContainer404>
      </PageContainer404>
    </>
  );
};

export default PageNotFound;
