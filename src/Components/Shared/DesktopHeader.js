import React, { useRef } from "react";
import {
  BigFont,
  SmallerHeaderContainer,
  TextWrapper,
  SmallerImageCover,
} from "../styles.js";
import { animated, useChain, useSpring, useTrail } from "react-spring";
import { fadeIn, scale } from "./Animations.js";
import styled from "styled-components";

const BigFontInline = styled(BigFont)`
  display: inline-flex;
  font-size: 6vw;

  @media (min-width: 768px) {
    font-size: 3vw;
  }
`;

const DesktopHeader = ({ items, children, img, alt }) => {
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
      <SmallerImageCover src={img} alt={alt} loading="lazy" />
      <TextWrapper>
        {items &&
          trail.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <BigFontInline style={item}>
                  {items[index]} &nbsp;
                </BigFontInline>
              </React.Fragment>
            );
          })}
        <animated.div style={fade1}>{children}</animated.div>
      </TextWrapper>
    </SmallerHeaderContainer>
  );
};

export default DesktopHeader;
