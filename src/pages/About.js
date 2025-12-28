import './PageLayout.css';

const standards = [
  'Digital textbooks aligned to national curriculum benchmarks with regular updates.',
  'Inquiry-based learning arcs that connect Science, Math, and Humanities to real contexts.',
  'Continuous assessment with feedback loops for parents and students.',
];

const methods = [
  'Concept-first instruction followed by guided practice and reflective journaling.',
  'Workshop model classrooms that include mini-lessons, collaboration, and showcases.',
  'Technology-assisted learning with safe, purposeful digital tools.',
];

function About() {
  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">About Loyalo</p>
          <h2>Academic credibility with modern standards.</h2>
          <p className="lede">
            Our philosophy blends rigorous academics with future-ready competencies. Every unit is designed
            to grow curiosity, clarity of thought, and confident communication.
          </p>
        </div>
        <div className="grid-split">
          <div className="list-card">
            <h3>Curriculum alignment</h3>
            <ul>
              {standards.map((item) => (
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
              {methods.map((item) => (
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
            Learners engage through projects, labs, storytelling, debates, and service. Every semester
            culminates in an exhibition where students present, defend, and reflect on their work.
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
