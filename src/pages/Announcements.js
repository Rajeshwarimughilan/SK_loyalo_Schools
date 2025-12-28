import './PageLayout.css';

const notices = [
  {
    title: 'Upcoming events',
    details: 'Leadership week, science fair submissions, and inter-house sports trials.',
  },
  {
    title: 'Important notices',
    details: 'Assessment schedule, PTM dates, and wellness checks.',
  },
  {
    title: 'Circulars & updates',
    details: 'Policy updates, field trip permissions, and transport changes.',
  },
];

function Announcements() {
  return (
    <section className="page-shell" id="announcements">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Announcements</p>
          <h2>Keep parents and students informed.</h2>
          <p className="lede">Drop in upcoming events and downloadable circulars here.</p>
        </div>
        <div className="card-grid">
          {notices.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.details}</p>
              <div className="note">Attach PDFs or links when ready.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Announcements;
