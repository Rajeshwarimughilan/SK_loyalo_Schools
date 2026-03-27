import { useEffect, useState } from 'react';
import './PageLayout.css';
import { publicApi } from '../api/public';

function About() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    publicApi.getAbout().then((data) => {
      if (mounted) setAbout(data);
    }).catch(() => {
      if (!mounted) return;
      setAbout(null);
    }).finally(() => {
      if (mounted) setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <section className="page-shell"><div className="section"><p>Loading about content...</p></div></section>;
  }

  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">About Loyalo</p>
          <h2>{about?.longTitle || 'Academic credibility with modern standards.'}</h2>
          <p className="lede">
            {about?.longDescription || 'Our philosophy blends rigorous academics with future-ready competencies.'}
          </p>
        </div>
        <div className="grid-split">
          <div className="list-card">
            <h3>Curriculum alignment</h3>
            <ul>
              {(about?.curriculumStandards || []).map((item) => (
                <li key={item}>
                  <span className="badge">Standard</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-card">
            <h3>Teaching methodology</h3>
            <ul>
              {(about?.teachingMethods || []).map((item) => (
                <li key={item}>
                  <span className="badge">Method</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="card">
          <h3>Learning approach</h3>
          <p>
            {about?.learningApproach || 'Learners engage through projects, labs, storytelling, debates, and service.'}
          </p>
          <p className="note">
            Alignment: National standards with room for international best practices where relevant.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
