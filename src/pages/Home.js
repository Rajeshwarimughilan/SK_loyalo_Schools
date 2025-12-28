import './PageLayout.css';
import Carousel from '../components/Carousel';
import Stats from '../components/Stats';
import Objectives from '../components/Objectives';

const initiatives = [
  {
    title: 'Full Moon Day Traditional Lunch',
    detail: 'Celebrating culture, nutrition, and gratitude together as one school family.',
  },
  {
    title: 'Senior–Junior Interaction',
    detail: 'Peer mentorship that builds confidence, empathy, and leadership habits.',
  },
  {
    title: 'Self-Organizing Clubs & Cells',
    detail: 'Student-led teams that design activities, events, and service projects.',
  },
];

const pillars = [
  {
    title: 'Leadership-first mindset',
    body: 'We grow decision-makers who communicate clearly, collaborate openly, and act with integrity.',
  },
  {
    title: 'Balanced academics',
    body: 'Core subjects stay rigorous while skill-building, wellness, and creativity share equal spotlight.',
  },
  {
    title: 'Future skills',
    body: 'Confidence, communication, design thinking, and digital fluency prepare students for tomorrow.',
  },
];

const carouselImages = [
  {
    src: 'https://images.unsplash.com/photo-1427504494785-cdec866c9e13?w=1200&h=400&fit=crop',
    alt: 'Student activities',
    caption: 'Vibrant Student Activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1609819102775-07e76d9e0b1c?w=1200&h=400&fit=crop',
    alt: 'Campus facilities',
    caption: 'World-class Campus Infrastructure',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop',
    alt: 'Leadership events',
    caption: 'Leadership & Collaboration',
  },
];

function Home() {
  return (
    <section className="page-shell">
      <Carousel images={carouselImages} />
      <Stats />
      <Objectives />

      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Holistic, Future-ready School</p>
          <h1>We build leaders, not Followers.</h1>
          <p className="lede">
            At Loyalo, academics and skill development move together. Students learn to think boldly,
            speak confidently, and lead with heart through purposeful projects and vibrant activities.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#announcements">See what&apos;s new</a>
            <a className="btn ghost" href="#contact">Book a campus visit</a>
          </div>
          <div className="hero-meta">
            <span>Leadership Labs</span>
            <span>Confidence Coaching</span>
            <span>Wellness & Sports</span>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <p className="eyebrow">What we stand for</p>
          <h2>Student-centric, joyful, and ambitious.</h2>
          <p className="lede">Core values that shape confident learners and empathetic leaders.</p>
        </div>
        <div className="card-grid">
          {pillars.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section alt" id="initiatives">
        <div className="section-head">
          <p className="eyebrow">Signature experiences</p>
          <h2>Unique initiatives that build identity.</h2>
        </div>
        <div className="card-grid three">
          {initiatives.map((item) => (
            <div key={item.title} className="card highlight">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section" id="contact">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Schedule a tour</p>
            <h2>See how we design learning for the whole child.</h2>
            <p className="lede">Meet our educators, explore clubs, and experience a day at Loyalo.</p>
          </div>
          <a className="btn primary" href="mailto:hello@loyalo.school">Book a visit</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
