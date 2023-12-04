import React from "react";
import ReactDOM from "react-dom";


const Portal = (props) => {
    const element = (
      <>
        {props.children}
      </>
    );
    return ReactDOM.createPortal(
      element,
      document.getElementById("portal-hook")
    );
  };

  export default Portal;
