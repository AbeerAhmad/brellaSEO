import React from "react";
import styled from "styled-components";
import Background_Circles1 from "../../../assets/img/parallax-bokeh_layer1.png";

const BackImage = styled.div`
  background: url(${Background_Circles1});
`;

const Layer1 = () => {
  return <BackImage />;
};

export default Layer1;
