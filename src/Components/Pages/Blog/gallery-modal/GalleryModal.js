import React from "react";
import styled from "styled-components";
import CloseIcon from "../../../../assets/icons/icon-ion-close-outline.svg";
import BackIcon from "../../../../assets/icons/icon-ion-arrow-left.svg";
import ForwardIcon from "../../../../assets/icons/icon-ion-arrow-right.svg";

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 801px) {
    width: 89vw;
    left: 10vw;
  }
`;
const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .nav_button {
    display: none;
  }
  @media (min-width: 801px) {
    width: 70vw;
    .nav_button {
      display: initial;
      width: 50px;
      height: 50px;
      margin: 20px;
      cursor: pointer;
      &.dim {
        opacity: 0.05;
      }
    }
  }
`;
const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  img {
    width: 100%;
    margin: 0 auto;
    height: auto;
  }
`;
const ModalClose = styled.div`
  align-self: end;
  font-size: 40px;
  position: absolute;
  top: -90px;
  right: -10px;
  z-index: 3;
  cursor: pointer;
  .close_button {
    width: 50px;
    height: 50px;
    margin: 40px 0;
  }
  .close_button:hover {
    animation-name: spin;
    animation-duration: 200ms;
    animation-direction: reverse;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
`;

const ModalPrevious = styled.div`
  align-self: center;
`;
const ModalNext = styled.div`
  align-self: center;
`;

const GalleryModal = ({ items, image, closeModal, goBack, goForward }) => {
  const displayGoBack = items.indexOf(image) - 1;
  const displayGoForward = items.indexOf(image) + 1;

  if (!image) {
    return null;
  }
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalPrevious onClick={goBack}>
          <img
            className={`nav_button ${displayGoBack === -1 ? "dim" : ""}`}
            src={BackIcon}
            alt="Back button"
          />
        </ModalPrevious>
        <ModalContent>
          <ModalClose onClick={closeModal}>
            <img className="close_button" src={CloseIcon} alt="Close button" />
          </ModalClose>
          <img src={image.image.url} alt={image.image.alt} />
        </ModalContent>
        <ModalNext onClick={goForward}>
          <img
            className={`nav_button ${
              displayGoForward > items.length - 1 ? "dim" : ""
            }`}
            src={ForwardIcon}
            alt="Forward button"
          />
        </ModalNext>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default GalleryModal;
