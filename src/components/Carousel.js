import { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-shell">
      <div className="carousel-track">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? 'is-active' : ''}`}
          >
            <img src={img.src} alt={img.alt} />
            {img.caption && <div className="carousel-caption">{img.caption}</div>}
          </div>
        ))}
      </div>

      {/* Overlay transparent card with actions */}
      <div className="carousel-overlay">
        <div className="overlay-card">
          <h2 className="overlay-heading">we nurture confident leaders.</h2>
          <h2 className="overlay-heading">We don't create followers</h2>
          <p className="overlay-sub">Empowering students with values, skills, and confidence to thrive beyond the classroom.</p>
          <div className="overlay-divider"></div>
          <div className="overlay-actions">
            <button className="overlay-btn">
              <span className="label">Apply</span>
              <span className="arrow" aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>

      <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous slide">
        ❮
      </button>
      <button className="carousel-control next" onClick={nextSlide} aria-label="Next slide">
        ❯
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'is-active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
