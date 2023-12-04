import React, { useRef } from "react";
import {
  BigFont,
  SmallerHeaderContainer,
  SmallerImageCover,
} from "../styles.js";
import { animated, useChain, useSpring, useTrail } from "react-spring";
import { fadeIn } from "./Animations.js";
import styled from "styled-components";

const IntroFont = styled(BigFont)`
  display: flex;
  font-size: 6vw;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 30px;

  @media (min-width: 768px) {
    font-size: 3vw;
  }
`;

const DesktopHeaderCenter = ({ items, children, img }) => {
  const scale = {
    from: { opacity: 0, transformOrigin: "center", transform: "scale(2)" },
    to: { opacity: 1, transformOrigin: "center", transform: "scale(1)" },
  };
  const trailRef = useRef();
  const trail = useTrail(items && items.length, {
    config: { delay: 3000 },
    ref: trailRef,
    from: scale.from,
    to: scale.to,
  });
  const transitionRef1 = useRef();
  const fade1 = useSpring({
    ref: transitionRef1,
    from: fadeIn.from,
    to: fadeIn.to,
  });
  useChain([trailRef, transitionRef1]);

  return (
    <SmallerHeaderContainer>
      <SmallerImageCover src={img} alt="Lady in the park" loading="lazy" />
      {items &&
        trail.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex", height: "100%" }}>
              <IntroFont style={item}>{items[index]} &nbsp;</IntroFont>
            </div>
          );
        })}
      <animated.div style={fade1}>{children}</animated.div>
    </SmallerHeaderContainer>
  );
};

export default DesktopHeaderCenter;
