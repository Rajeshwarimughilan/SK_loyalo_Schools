import { useEffect, useState } from 'react';
import './PageLayout.css';
import { publicApi } from '../api/public';

export default function Admissions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    publicApi
      .getAdmissions()
      .then((response) => {
        if (mounted) setData(response);
      })
      .catch((err) => {
        if (mounted) setError(err.message || 'Failed to load admissions info');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <section className="page-shell"><div className="section"><p>Loading admissions...</p></div></section>;
  }

  if (error) {
    return <section className="page-shell"><div className="section"><p>{error}</p></div></section>;
  }

  if (!data) {
    return <section className="page-shell"><div className="section"><p>No admissions information available.</p></div></section>;
  }

  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Admissions</p>
          <h2>{data.heading}</h2>
          <p className="lede">{data.description}</p>
        </div>

        <div className="grid-split">
          <div className="list-card">
            <h3>Admission Process</h3>
            <ul>
              {(data.processSteps || []).map((step) => (
                <li key={step}><span className="badge">Step</span><span>{step}</span></li>
              ))}
            </ul>
          </div>

          <div className="list-card">
            <h3>Required Documents</h3>
            <ul>
              {(data.requirements || []).map((item) => (
                <li key={item}><span className="badge">Doc</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {data.ctaLabel && data.ctaLink ? (
          <div className="card" style={{ marginTop: '20px' }}>
            <a className="btn primary" href={data.ctaLink}>{data.ctaLabel}</a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
