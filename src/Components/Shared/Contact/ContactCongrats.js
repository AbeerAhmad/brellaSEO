import React from "react";
import styled from "styled-components";
import CheckMark from "../../../assets/CongratsCheckMark.svg";

const Container = styled.div`
  padding-top: 9%;
  padding-bottom: 100px;
`;
const Contact = () => {
  return (
    <React.Fragment>
      <Backgroundimage />
      <Container>
        <CongratsContainer>
          <h1>THANK YOU</h1>
          <h2>
            <img src={CheckMark} alt="checkmark" loading="lazy" />
            YOUR EMAIL HAS BEEN SENT
          </h2>
        </CongratsContainer>
      </Container>
    </React.Fragment>
  );
};

const CongratsContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  margin: 15%;
  color: #fffffe;
  h1 {
    margin-left: 80px;
  }
  img {
    margin-right: 10px;
  }
`;

export default Contact;
