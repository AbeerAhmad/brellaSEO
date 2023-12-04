import React from "react";
import styled from "styled-components";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";

const FrontImage = styled.div`
  background: url(${Background_Circles2});
`;

const Layer2 = () => {
  return <FrontImage />;
};

export default Layer2;
