import './Alumni.css';

const ALUMNI = [
  {
    id: 1,
    name: 'Rahul Menon',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2015',
    profession: 'Software Engineer',
    company: 'Google India',
    location: 'Bangalore, India',
    quote:
      "Loyalo didn't just give me an education — it gave me character. The discipline and curiosity this school instilled in me are what drive my work at Google every single day. I carry this place in my heart wherever I go.",
  },
  {
    id: 2,
    name: 'Priya Sharma',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2017',
    profession: 'Medical Doctor',
    company: 'AIIMS, New Delhi',
    location: 'New Delhi, India',
    quote:
      "The science teachers at Loyalo lit a fire in me that became my calling. Their passion for hands-on learning nurtured the doctor I am today. I owe my entire career to this incredible institution.",
  },
  {
    id: 3,
    name: 'Arjun Nair',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2014',
    profession: 'Entrepreneur & Co-Founder',
    company: 'FinPath Technologies',
    location: 'Mumbai, India',
    quote:
      "The debate clubs and leadership programs at Loyalo built my confidence to stand up and speak. Running a startup today, I realize every lesson in public speaking and critical thinking was preparing me for exactly this.",
  },
  {
    id: 4,
    name: 'Sneha Kapoor',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2018',
    profession: 'Civil Services Officer (IAS)',
    company: 'Government of India',
    location: 'Chennai, India',
    quote:
      "The values of integrity, service, and hard work that Loyalo drilled into us every morning at assembly — those are the values I carry into my role as a public servant. School didn't just build my career, it shaped my character.",
  },
  {
    id: 5,
    name: 'Karthik Pillai',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2016',
    profession: 'Aerospace Engineer',
    company: 'ISRO',
    location: 'Thiruvananthapuram, India',
    quote:
      "I remember staring at the night sky during school camps and dreaming of the stars. Loyalo gave me both the scientific foundation and the audacity to dream big. Now I work on missions that reach those very stars — and it all started here.",
  },
  {
    id: 6,
    name: 'Aisha Rahman',
    photo:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
    batch: 'Class of 2019',
    profession: 'Chartered Accountant',
    company: 'Deloitte India',
    location: 'Hyderabad, India',
    quote:
      "More than numbers and commerce, Loyalo taught me discipline, time management, and the joy of true excellence. Every exam I aced here was practice for the CA exams I cleared on my very first attempt. Forever grateful.",
  },
];

export default function Alumni() {
  return (
    <div className="alumni-page">
      {/* ── Hero ─────────────────────────────────────── */}
      <div className="alumni-hero">
        <div className="alumni-hero-glow" aria-hidden="true" />
        <div className="alumni-hero-content">
          <p className="alumni-eyebrow">Loyalo School</p>
          <h1 className="alumni-title">Our Alumni</h1>
          <p className="alumni-subtitle">
            Proud Loyaloans making their mark on the world — in science, medicine, government,
            technology, and beyond
          </p>
          <div className="alumni-hero-badge">
            <span className="alumni-badge-star">★</span>
            <span>Shaping the Future, One Loyaloan at a Time</span>
          </div>
        </div>
      </div>

      {/* ── Section intro ──────────────────────────── */}
      <div className="alumni-intro-section">
        <div className="alumni-intro-inner">
          <p className="alumni-section-eyebrow">Hear from them</p>
          <h2 className="alumni-section-title">In Their Own Words</h2>
          <p className="alumni-section-sub">
            Real stories from real Loyaloans. Their journeys, their achievements, and the memories
            they still carry from these very halls.
          </p>
        </div>
      </div>

      {/* ── Cards Grid ────────────────────────────── */}
      <div className="alumni-wrap">
        <div className="alumni-grid">
          {ALUMNI.map((person) => (
            <article key={person.id} className="alumni-card">
              <div className="alumni-card-top">
                <div className="alumni-avatar-wrap">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="alumni-avatar"
                    loading="lazy"
                  />
                </div>
                <div className="alumni-identity">
                  <h3 className="alumni-name">{person.name}</h3>
                  <p className="alumni-role">{person.profession}</p>
                  <p className="alumni-company">{person.company}</p>
                  <div className="alumni-meta-row">
                    <span className="alumni-batch-pill">{person.batch}</span>
                    <span className="alumni-location">📍 {person.location}</span>
                  </div>
                </div>
              </div>
              <blockquote className="alumni-quote">
                <span className="alumni-quote-mark" aria-hidden="true">"</span>
                <p>{person.quote}</p>
              </blockquote>
            </article>
          ))}
        </div>
      </div>

      {/* ── CTA Banner ─────────────────────────────── */}
      <div className="alumni-cta-wrap">
        <div className="alumni-cta">
          <div className="alumni-cta-text">
            <h2 className="alumni-cta-title">Are You a Loyaloan?</h2>
            <p className="alumni-cta-sub">
              Reconnect with your alma mater. Share your story and inspire the next generation of
              Loyaloans to dream even bigger.
            </p>
          </div>
          <a href="mailto:alumni@loyalo.edu" className="alumni-cta-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
