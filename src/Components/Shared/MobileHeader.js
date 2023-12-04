import React, { useRef } from "react";
import { animated, useChain, useSpring, useTrail } from "react-spring";
import styled from "styled-components";
import { fadeIn } from "./Animations.js";
import { BigFont, ImageCover } from "../styles.js";

export const scale = {
  from: { opacity: 0, transformOrigin: "center", transform: "scale(2)" },
  to: { opacity: 1, transformOrigin: "center", transform: "scale(1)" },
};

const MobileDisplay = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 187px;
  overflow: hidden;

  @media screen and (orientation: landscape) {
    height: 248px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileImageCover = styled(ImageCover)`
  min-height: 187px;
  height: auto;
  text-align: center;
  object-position: center;
`;

const MobileTextWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const IntroText = styled(BigFont)`
  display: inline-flex;
  font-size: 21px;
  line-height: 20px;
`;

const MobileHeader = ({ items, img, alt, children }) => {
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
    <MobileDisplay>
      <MobileImageCover src={img} alt={alt} loading="lazy" />
      <MobileTextWrapper>
        {items &&
          trail.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <IntroText style={item}>{items[index]} &nbsp;</IntroText>
              </React.Fragment>
            );
          })}
        <animated.div style={fade1}>{children}</animated.div>
      </MobileTextWrapper>
    </MobileDisplay>
  );
};

export default MobileHeader;
