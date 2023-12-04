import React from "react";
import useViewport from "CustomHooks/UseViewport.js";
import FooterDesktop from "./FooterDesktop.js";
import FooterMobile from "./FooterMobile.js";

const Footer = () => {
  const { width } = useViewport();
  const breakpoint = 825;

  return width < breakpoint ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
