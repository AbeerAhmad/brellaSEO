import React from "react";
import useViewport from "CustomHooks/UseViewport.js";
import MenuDesktop from "./MenuDesktop.js";
import MenuMobile from "./MenuMobile.js";

const Menu = () => {
  const { width } = useViewport();
  const breakpoint = 768;

  return width <= breakpoint ? <MenuMobile /> : <MenuDesktop />;
};

export default Menu;
