import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { px2vw } from "../../../Utilities/util.js";
//const images = require.context("../../../assets/portfolio/", true);

const StyledLink = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  color: #282828;

  img {
    object-fit: cover;
    width: 100%;

    @media (min-width: 2560px) {
      height: 400px;
    }
  }
`;

const PortfolioLink = (props) => {
  const [hover, setHover] = useState(false);

  const thumbnailSource = props.thumbnail.url;
  const portLink = `./${props.id}`;

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      className={`col-sm-12 col-md-6 no-padding`}
      style={{ position: "relative" }}
    >
      <StyledLink
        to={portLink}
        onClick={(e) => {
          sessionStorage.navScrollY = window.scrollY;
        }}
      >
        <div className="port-panel">
          <img
            className="port-panel-image"
            src={thumbnailSource}
            alt={props.name}
            style={{
              width: "100%",
              border: "white 3px solid",
              borderRadius: `${px2vw(20)}`,
              boxShadow: "0 0 5px #212529",
              backgroundColor: "#ccc",
              ...(hover && { boxShadow: "0 0 11px #f4803b" }),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            //loading="lazy"
          />
        </div>
        <div
          className="port-panel"
          style={{
            textDecoration: "none",
            fontFamily: "FuturaStd-Book, Futura, Helvetica, Arial, sans-serif",
            fontSize: "24px",
            fontWeight: "bold",
            marginTop: "-25px",
            color: "#282828",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {props.name}
        </div>
      </StyledLink>
    </div>
  );
};

export default PortfolioLink;
