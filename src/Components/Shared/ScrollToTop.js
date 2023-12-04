import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa/index.js";
import "../../index.css";

const pathNameHistory = new Set();

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!pathNameHistory.has(pathname)) {
      goToTop();
      pathNameHistory.add(pathname);
    }
    //window.scrollTo(0, 0);
    // console.log("From Scroll to top!");
    // console.log({ pathNameHistory });
  }, [pathname]);

  //console.log(window.scrollY);

  if (showTopBtn) {
    return (
      <div className="top-to-btm">
        {" "}
        {showTopBtn && (
          <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
        )}{" "}
      </div>
    );
  }

  return null;
};
export default ScrollToTop;
