import './PageLayout.css';

const galleryItems = [
  {
    title: 'Student activities and competitions',
    detail: 'Snapshots from robotics scrimmages, chess meets, and swim galas.',
  },
  {
    title: 'School events and celebrations',
    detail: 'Festivals, cultural days, and our Full Moon Day traditional lunches.',
  },
  {
    title: 'Campus infrastructure',
    detail: 'Bright classrooms, labs, library corners, and outdoor learning zones.',
  },
];

function Gallery() {
  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h2>See the joy in action.</h2>
          <p className="lede">Imagery-ready sections to showcase campus, events, and daily learning life.</p>
        </div>
        <div className="card-grid three">
          {galleryItems.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <div className="note">Add albums or carousels here when assets are ready.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
