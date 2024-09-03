import { useState } from "react"
import { Circle, CircleDot } from "lucide-react"
import "./AboutUs.style.scss"

type ImageGalleryProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section className="img-gallery"
      aria-label="Image gallery">
      <a href="#after-image-gallery-controls" className="skip-link">
        Skip Image gallery Controls
      </a>
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
      <button
        onClick={showPrevImage}
        className="img-gallery-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <div className="arrow--left" aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-gallery-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <div className="arrow--right" aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-gallery-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-gallery-controls" />
    </section>
  )
}