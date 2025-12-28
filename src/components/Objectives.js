import { useState } from 'react';
import './Objectives.css';

const missionText = [
  'Empower students with confidence, curiosity, and compassion.',
  'Blend rigorous academics with leadership, creativity, and wellness.',
  'Create real-world learning through projects, clubs, and service.',
  'Nurture identity, grit, and teamwork to thrive beyond school.',
];

const visionText = [
  'A joyful, future-ready community where every learner thrives.',
  'Leadership, creativity, and wellness share equal spotlight with academics.',
];

const postulates = [
  {
    title: 'Cultural boots and creative wings',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop',
    desc: 'Rooted in heritage, soaring with imagination and art.',
  },
  {
    title: 'Tech winded',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=800&fit=crop',
    desc: 'Harness technology with purpose, ethics, and curiosity.',
  },
  {
    title: 'Beyond books',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop',
    desc: 'Learning that lives in projects, people, and practice.',
  },
  {
    title: 'Think and win',
    img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&h=800&fit=crop',
    desc: 'Strategic thinking, grit, and humble victories.',
  },
  {
    title: 'Inspiring',
    img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&h=800&fit=crop',
    desc: 'Spark minds, lift spirits, and light the path.',
  },
  {
    title: 'Rise with resolve',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop',
    desc: 'Stand tall, stay kind, keep moving forward.',
  },
  {
    title: 'March with honour',
    img: 'https://images.unsplash.com/photo-1476480862126-9a86d6a3e15b?w=1200&h=800&fit=crop',
    desc: 'Integrity first—on field, in class, and in life.',
  },
  {
    title: 'Lead with courage',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&h=800&fit=crop',
    desc: 'Serve boldly, listen deeply, act for the greater good.',
  },
];

function Objectives() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="objectives-shell" id="objectives">
      <div className="objectives-grid">
        <div className="objectives-left">
          <div className="mission-block">
            <h2>Mission</h2>
            <div className="objectives-text">
              {missionText.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
          <div className="left-separator" aria-hidden="true"></div>
          <div className="vision-block">
            <h2>Vision</h2>
            <div className="objectives-text small">
              {visionText.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="objectives-right">
          <div className="postulates-grid">
            {postulates.map((item, idx) => (
              <button
                key={item.title}
                className={`postulate-card ${selected === idx ? 'selected' : ''}`}
                style={{ backgroundImage: `url(${item.img})` }}
                type="button"
                onClick={() => setSelected(selected === idx ? null : idx)}
              >
                {/* Persistent bottom header */}
                <div className="heading-bar">
                  <h3>{item.title}</h3>
                </div>

                {/* Slide-up overlay when selected */}
                <div className="overlay" aria-hidden={selected !== idx}>
                  <div className="overlay-content">
                    <h3 className="overlay-title">{item.title}</h3>
                    <p className="overlay-desc">{item.desc}</p>
                    <div className="overlay-actions">
                      <button className="overlay-btn" type="button">
                        <span className="label">Read More</span>
                        <span className="arrow" aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objectives;
