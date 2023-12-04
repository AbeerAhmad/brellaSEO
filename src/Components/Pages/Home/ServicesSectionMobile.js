import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StrategicServices from "../../../assets/img/Brella_Web-refresh_HOME-illustration_Strategic-Services.png";
import { px2vw } from "../../../Utilities/util.js";

const People = styled.img`
  margin-top: ${px2vw(-100)};
  //margin-left: ${px2vw(280)};
  width: 50%;
  display: -webkit-box;

  margin-left: auto;
  /* 
  @media (max-width: 1200px) {
    margin-top: ${px2vw(-250)};
  }

  @media (max-width: 992px) {
    margin-top: ${px2vw(100)};
  }

  @media (max-width: 768px) {
    margin-top: ${px2vw(-90)};
  }

  @media (min-width: 2560px) {
    margin-top: ${px2vw(-50)};
  } */
`;

const ServicesAdContainer = styled.div`
  display: flex;
  color: white;
  max-width: ${px2vw(1250)};
  flex-direction: row;
  //gap: ${px2vw(20)};
  align-items: start;
  justify-content: flex-start;
  margin-bottom: ${px2vw(50)};
  margin-top: ${px2vw(-100)};
`;

const ServicesRow = styled.div`
  flex: 1 9;
`;

const ServicesLeftCol = styled.div`
  padding: ${px2vw(10)} 0px 0 0;
  writing-mode: vertical-rl;
  transform: rotate(360deg);
  margin-left: ${px2vw(100)};
`;

const ServicesRightCol = styled.div`
  border-left: black 4px solid;
  margin: ${px2vw(0)} 0px 0 ${px2vw(-250)};

  @media (max-width: 1200px) {
    margin: ${px2vw(0)} 0px 0 ${px2vw(-250)};
  }

  @media (max-width: 992px) {
    margin: ${px2vw(0)} 0px 0 ${px2vw(-180)};
  }

  @media (min-width: 600px) and (max-width: 940px) {
    margin: ${px2vw(0)} 0px 0 ${px2vw(-220)};
  }

  @media (max-width: 600px) {
    margin: ${px2vw(0)} 0px 0 ${px2vw(-180)};
  }
`;

const ServicesTitle = styled.h1`
  font-size: 5rem;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 0.5;
  color: #f3803b;
  margin-top: ${px2vw(10)};

  @media (max-width: 1200px) {
    font-size: 4rem;
  }

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1.7rem;
  }

  @media (min-width: 2560px) {
    font-size: 7rem;
  }
`;

const ColContent = styled.p`
  font-size: 1.3rem;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  color: #282828;
  //margin-top: 0px;
  margin-left: ${px2vw(20)};

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 992px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: ${px2vw(70)};
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const ServiceOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px 10px;
  justify-items: start;
  margin-top: ${px2vw(50)};
  margin: ${px2vw(50)} ${px2vw(250)} ${px2vw(100)} ${px2vw(250)};
`;

const ServiceButton = styled.button`
  background-color: #ffe9de;
  border: solid 1px #f3803b;
  color: black;
  padding: 11px;
  text-align: center;
  font-family: "FuturaStd-CondensedBold", Futura, "Helvetica Neue", Arial,
    sans-serif;
  letter-spacing: 1px;
  font-size: ${px2vw(36)};
  font-weight: bold;
  border-radius: 5px;
  width: ${px2vw(1000)};
  border: 3px solid rgb(243, 128, 59);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  color: rgb(40, 40, 40);
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s;

  &:focus {
    box-shadow: 0 0 11px #f4803b;
    outline-style: solid;
    outline-color: #f3803b;
  }

  &:hover {
    background-color: rgb(243, 128, 59);
    color: #ffffff;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-left: ${px2vw(0)};
  }

  @media (max-width: 400px) {
    font-size: 0.9rem;
    margin-left: ${px2vw(0)};
  }

  @media (max-width: 320px) {
    font-size: 0.8rem;
    margin-left: ${px2vw(0)};
  }
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    color: #f3803b;
  }
`;

const ServicesSectionMobile = () => {
  return (
    <>
      <People src={StrategicServices} alt="Poeple at the table" />
      <ServicesAdContainer>
        <ServicesRow>
          <ServicesLeftCol>
            <ServicesTitle>STRATEGIC</ServicesTitle>
            <ServicesTitle style={{ marginTop: `${px2vw(200)}` }}>
              SERVICES
            </ServicesTitle>
          </ServicesLeftCol>
        </ServicesRow>
        <ServicesRow>
          <ServicesRightCol>
            <ColContent>
              When you need a creative strategic partner with the skills of a
              production vendor, Brella has the innovative mindset and decades
              of experience to develop a plan of success.
              <br /> <br />
              Our methods are rooted in decades of experience in performance,
              digital technology, and UX design. We begin with a deep analysis
              of your target audience, assessing their unique needs, desires,
              and pain points. We then compare that with your project priorities
              and objectives to uncover the best means, methods, and channels to
              get to your goals.
            </ColContent>
          </ServicesRightCol>
        </ServicesRow>
      </ServicesAdContainer>
      <ServiceOptionsContainer>
        <ServiceLink to="/learning">
          <ServiceButton>LEARNING</ServiceButton>
        </ServiceLink>
        <ServiceLink to="/meetingsevents">
          <ServiceButton>MEETINGS & EVENTS</ServiceButton>
        </ServiceLink>
        <ServiceLink to="/corporate">
          <ServiceButton>CORPORATE COMMUNICATIONS</ServiceButton>
        </ServiceLink>
        <ServiceLink to="/customer">
          <ServiceButton>CUSTOMER EDUCATION</ServiceButton>
        </ServiceLink>
        <ServiceLink to="/internal">
          <ServiceButton>INTERNAL AGENCY SUPPORT</ServiceButton>
        </ServiceLink>
      </ServiceOptionsContainer>
    </>
  );
};

export default ServicesSectionMobile;
