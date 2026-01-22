import './PageLayout.css';
import Carousel from '../components/Carousel';
import Stats from '../components/Stats';
import Objectives from '../components/Objectives';
import BriefAbout from '../components/BriefAbout';
import FullWidthVideo from '../components/FullWidthVideo';
import LifeAtLoyalo from '../components/LifeAtLoyalo';
import NoticeBoard from '../components/NoticeBoard';
import Affiliations from '../components/Affiliations';
import LatestNews from '../components/LatestNews';

const initiatives = [
  {
    title: 'Full Moon Day Traditional Lunch',
    detail: 'Celebrating culture, nutrition, and gratitude together as one school family.',
  },
  {
    title: 'Senior-Junior Interaction',
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
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop',
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
      <BriefAbout />
      <FullWidthVideo />
      <LifeAtLoyalo />
      <NoticeBoard />
      <Affiliations />
      <LatestNews />

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
