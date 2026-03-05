import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const CATEGORIES = ['All', 'Events', 'Sports', 'Academics', 'Campus', 'Cultural'];

const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
    category: 'Academics',
    title: 'Classroom Learning Sessions',
    desc: 'Interactive classroom sessions where curiosity meets knowledge every single day.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1532094349884-543559373695?w=800&h=600&fit=crop',
    category: 'Academics',
    title: 'Science Laboratory',
    desc: 'Students conducting experiments in our fully-equipped science laboratory.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1546519638399-1f8b7a9eda49?w=800&h=600&fit=crop',
    category: 'Sports',
    title: 'Annual Sports Day',
    desc: 'A day full of energy, competition, and sportsmanship on our athletics field.',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
    category: 'Sports',
    title: 'Football Championship',
    desc: 'Our team clinching the inter-school football championship for the third year running.',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    category: 'Events',
    title: 'Annual Prize Distribution',
    desc: 'Celebrating student excellence at the Annual Prize Distribution Ceremony.',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    category: 'Events',
    title: 'Annual Day Celebrations',
    desc: 'Vibrant performances and proud moments at our grand Annual Day celebration.',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
    category: 'Campus',
    title: 'School Library',
    desc: 'Our modern library — a quiet haven for readers, researchers, and deep thinkers.',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop',
    category: 'Campus',
    title: 'Campus Grounds',
    desc: 'Sprawling green campus grounds where learning spills beyond the classroom walls.',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop',
    category: 'Cultural',
    title: 'Cultural Dance Performance',
    desc: 'Students showcasing their talent in traditional and contemporary dance forms.',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=800&h=600&fit=crop',
    category: 'Cultural',
    title: 'Art Exhibition',
    desc: 'A vibrant display of creativity and artistic expression at our school art exhibition.',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1485546246426-74197b683ab5?w=800&h=600&fit=crop',
    category: 'Events',
    title: 'STEM & Robotics Fair',
    desc: 'Innovators at work — students presenting cutting-edge STEM projects to the world.',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop',
    category: 'Sports',
    title: 'Swimming Gala',
    desc: 'Splashing records at our annual inter-house swimming gala.',
  },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [visible, setVisible] = useState(true);

  const filtered =
    active === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((img) => img.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const handleCategoryChange = (cat) => {
    if (cat === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(cat);
      setVisible(true);
    }, 180);
  };

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  return (
    <div className="gallery-page">
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="gallery-hero">
        <div className="gallery-hero-glow" aria-hidden="true" />
        <div className="gallery-hero-content">
          <p className="gallery-eyebrow">Loyalo School</p>
          <h1 className="gallery-title">Our Gallery</h1>
          <p className="gallery-subtitle">
            A visual journey through campus life, milestones, and the moments that matter most
          </p>
          <div className="gallery-hero-stats">
            <span>{GALLERY_ITEMS.length}+ Photos</span>
            <span>{CATEGORIES.length - 1} Categories</span>
            <span>Every Memory Captured</span>
          </div>
        </div>
      </div>

      {/* ── Filter Bar ───────────────────────────────── */}
      <div className="gallery-filter-bar">
        <div className="gallery-filter-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery-pill${active === cat ? ' is-active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────── */}
      <div className="gallery-wrap">
        <div className={`gallery-grid${visible ? ' is-visible' : ' is-hidden'}`}>
          {filtered.map((img, i) => (
            <button
              key={img.id}
              className={`gallery-item${i % 7 === 0 ? ' is-wide' : ''}`}
              onClick={() => setLightbox(img)}
              aria-label={`View photo: ${img.title}`}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-overlay-cat">{img.category}</span>
                <h3 className="gallery-overlay-title">{img.title}</h3>
                <span className="gallery-overlay-icon">⊕</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────── */}
      {lightbox && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="lightbox-card" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src.replace('w=800&h=600', 'w=1200&h=800')}
              alt={lightbox.title}
            />
            <div className="lightbox-info">
              <span className="lightbox-cat-badge">{lightbox.category}</span>
              <h2 className="lightbox-title">{lightbox.title}</h2>
              <p className="lightbox-desc">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
