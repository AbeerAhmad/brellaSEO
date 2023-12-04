import React from "react";
import { MediumText } from "../styles.js";
import styled from "styled-components";

const SetHeight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 30px 10px;
  text-align: center;

  @media (min-width: 1440px) {
    height: 20vh;
  }
`;

const MediumTextMobile = styled(MediumText)`
  margin: 0 auto;

  @media (min-width: 768px) {
    display: none;
  }
`;
const MediumTextDesktop = styled(MediumText)`
  margin: 0 auto;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const BlurbContainer = styled.div`
  font-size: 1.4rem;
  font-style: italic;

  @media (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const SectionTitle = ({ title, mobileTitle, blurb, children }) => {
  // check if mobileTitle property is set, if true render mobile and desktop component otherwise render just regular title;
  return (
    <div className="position-relative">
      {children}
      <SetHeight>
        {mobileTitle ? (
          <>
            <MediumTextMobile>{mobileTitle}</MediumTextMobile>
            <MediumTextDesktop>{title}</MediumTextDesktop>
          </>
        ) : (
          <MediumText style={{ margin: "0 auto" }}>{title}</MediumText>
        )}

        {blurb && (
          <BlurbContainer className="text-white text-center font-italic">
            {blurb}
          </BlurbContainer>
        )}
      </SetHeight>
    </div>
  );
};

export default SectionTitle;
