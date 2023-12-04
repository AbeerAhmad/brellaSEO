import React from "react";
import styled from "styled-components";
import { device } from "../../../Utilities/main_layout.js";
import GalleryModal from "./gallery-modal/GalleryModal.js";
import AnimatedPortal from "../../../Utilities/animated-portal.js";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 20px 0 35px 0;
  //background: linear-gradient(#scsdd, #ffdff);
  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const GalleryImage = styled.img`
  cursor: pointer;
  max-width: 100%;
`;

const BlogGallery = ({ gallery }) => {
  const [showImage, setShowImage] = React.useState(null);
  const [close, setClose] = React.useState(false);

  const handleOpenGalleryModal = (image) => {
    setClose(true);
    setShowImage(image);
  };

  const handleAnimateOut = () => {
    setClose(false);
  };
  const handleCloseModal = () => {
    setShowImage(null);
  };
  const handleGoBack = (gallery) => {
    if (gallery[gallery.indexOf(showImage) - 1] === undefined) {
      return;
    }
    setShowImage(gallery[gallery.indexOf(showImage) - 1]);
  };
  const handleGoForward = (gallery) => {
    if (gallery[gallery.indexOf(showImage) + 1] === undefined) {
      return;
    }
    setShowImage(gallery[gallery.indexOf(showImage) + 1]);
  };
  if (gallery) {
    return (
      <React.Fragment>
        <Gallery>
          {gallery.map((image, index) => {
            return (
              <GalleryImage
                onClick={() => handleOpenGalleryModal(image)}
                key={index}
                src={image.image.url}
                alt={image.image.alt}
              />
            );
          })}
        </Gallery>
        <AnimatedPortal toggleModal={close} closeModal={handleCloseModal}>
          <GalleryModal
            closeModal={handleAnimateOut}
            goBack={() => handleGoBack(gallery)}
            goForward={() => handleGoForward(gallery)}
            image={showImage}
            items={gallery}
          />
        </AnimatedPortal>
      </React.Fragment>
    );
  }
  return null;
};

export default BlogGallery;
