import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./animation-styles.css";

const AnimatedPortal = (props) => {
  const element = (
    <CSSTransition
      in={props.toggleModal}
      timeout={200}
      classNames="animated-portal"
      onExited={() => props.closeModal()}
    >
      <div>{props.children}</div>
    </CSSTransition>
  );
  return ReactDOM.createPortal(element, document.getElementById("portal-hook"));
};

export default AnimatedPortal;

AnimatedPortal.propTypes = {
  toggleModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
