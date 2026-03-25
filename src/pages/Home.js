import './PageLayout.css';
import { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Stats from '../components/Stats';
import Objectives from '../components/Objectives';
import BriefAbout from '../components/BriefAbout';
import FullWidthVideo from '../components/FullWidthVideo';
import LifeAtLoyalo from '../components/LifeAtLoyalo';
import NoticeBoard from '../components/NoticeBoard';
import Affiliations from '../components/Affiliations';
import LatestNews from '../components/LatestNews';
import Testimonials from '../components/Testimonials';
import { publicApi } from '../api/public';

const fallbackSlides = [
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
];

function Home() {
  const [carouselImages, setCarouselImages] = useState(fallbackSlides);
  const [admissions, setAdmissions] = useState(null);

  useEffect(() => {
    let mounted = true;

    Promise.all([publicApi.getHeroSlides(), publicApi.getAdmissions()])
      .then(([slides, admissionsInfo]) => {
        if (!mounted) return;

        setCarouselImages(
          (slides || []).map((slide) => ({
            src: slide.imageUrl,
            alt: slide.title,
            caption: slide.title,
            subtitle: slide.subtitle,
            ctaLabel: slide.ctaLabel,
            ctaLink: slide.ctaLink,
          }))
        );
        setAdmissions(admissionsInfo);
      })
      .catch(() => {
        if (!mounted) return;
        setCarouselImages(fallbackSlides);
      });

    return () => {
      mounted = false;
    };
  }, []);

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
      <Testimonials />

      <div className="section" id="contact">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">Schedule a tour</p>
            <h2>{admissions?.heading || 'See how we design learning for the whole child.'}</h2>
            <p className="lede">{admissions?.description || 'Meet our educators, explore clubs, and experience a day at Loyalo.'}</p>
          </div>
          <a className="btn primary" href={admissions?.ctaLink || 'mailto:hello@loyalo.school'}>{admissions?.ctaLabel || 'Book a visit'}</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
