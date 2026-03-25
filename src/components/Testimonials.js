import { useEffect, useState } from 'react';
import { publicApi } from '../api/public';

function Stars({ count }) {
  return <span>{'★'.repeat(count)}{'☆'.repeat(Math.max(0, 5 - count))}</span>;
}

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    publicApi
      .getTestimonials()
      .then((data) => {
        if (mounted) setItems(data || []);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <section className="section"><p>Loading testimonials...</p></section>;
  }

  if (!items.length) return null;

  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">Voices from Loyalo</p>
        <h2>Testimonials</h2>
      </div>
      <div className="card-grid">
        {items.map((item) => (
          <article className="card" key={item.id}>
            <p>{item.quote}</p>
            <p><strong>{item.personName}</strong> {item.roleLabel ? `- ${item.roleLabel}` : ''}</p>
            <p><Stars count={item.rating || 5} /></p>
          </article>
        ))}
      </div>
    </section>
  );
}
