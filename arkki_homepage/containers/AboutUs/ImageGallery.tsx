import React from "react";
import { useImageGallery } from "./useImageGallery";
import { ImageGalleryView } from "../../presentational/AboutUs/ImageGalleryView";

interface ImageGalleryProps {
  images: { url: string; alt: string }[];
}

export const ImageGallery: React.FunctionComponent<ImageGalleryProps> = ({ images }) => {
  const { imageIndex, showNextImage, showPrevImage, handleDotClick } = useImageGallery(images);

  return (
    <ImageGalleryView
      images={images}
      imageIndex={imageIndex}
      showNextImage={showNextImage}
      showPrevImage={showPrevImage}
      handleDotClick={handleDotClick}
    />
  );
};