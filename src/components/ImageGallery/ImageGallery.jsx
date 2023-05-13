import React from "react";
import PropTypes from "prop-types";
import { ImageGalleryStyled } from "./ImageGallery.styled";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, openModal }) => (
  <ImageGalleryStyled>
    {images.map((image) => (
      <ImageGalleryItem openModal={openModal} key={image.id} tags={image.tags} smallImage={image.smallImage} largeImage={image.largeImage} />
    ))}
  </ImageGalleryStyled>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;