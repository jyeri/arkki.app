import { useState } from "react";

export const useImageGallery = (images: { url: string; alt: string }[]) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const handleDotClick = (index: number) => {
    setImageIndex(index);
  };

  return {
    imageIndex,
    showNextImage,
    showPrevImage,
    handleDotClick,
  };
};