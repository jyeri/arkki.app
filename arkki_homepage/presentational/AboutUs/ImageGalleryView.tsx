import React from "react";
import { Circle, CircleDot } from "lucide-react";
import "../../styles/AboutUs.styles.scss";

type ImageGalleryViewProps = {
  images: { url: string; alt: string }[];
  imageIndex: number;
  showNextImage: () => void;
  showPrevImage: () => void;
  handleDotClick: (index: number) => void;
};

export const ImageGalleryView: React.FunctionComponent<ImageGalleryViewProps> = ({
  images,
  imageIndex,
  showNextImage,
  showPrevImage,
  handleDotClick,
}) => (
  <section className="img-gallery" aria-label="Image gallery">
    <div className="img-gallery-container">
      {images.map(({ url, alt }, index) => (
        <img
          key={url}
          src={url}
          alt={alt}
          aria-hidden={imageIndex !== index}
          className="img-gallery-img"
          style={{ translate: `${-100 * imageIndex}%` }}
        />
      ))}
    </div>
    <button onClick={showPrevImage} className="img-gallery-btn" style={{ left: 0 }} aria-label="View Previous Image">
      <div className="arrow--left" aria-hidden />
    </button>
    <button onClick={showNextImage} className="img-gallery-btn" style={{ right: 0 }} aria-label="View Next Image">
      <div className="arrow--right" aria-hidden />
    </button>
    <div className="img-gallery-dots">
      {images.map((_, index) => (
        <button key={index} className="img-gallery-dot-btn" aria-label={`View Image ${index + 1}`} onClick={() => handleDotClick(index)}>
          {index === imageIndex ? <CircleDot aria-hidden /> : <Circle aria-hidden />}
        </button>
      ))}
    </div>
  </section>
);