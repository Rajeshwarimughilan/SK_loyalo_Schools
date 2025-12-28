import './PageLayout.css';

const clubs = [
  'Innovation & Robotics Club',
  'Arts & Culture Collective',
  'Environment & Sustainability Cell',
  'Wellness & Sports Council',
  'Debate & Communication Forum',
];

const leadership = [
  'School Captain & Vice-Captain',
  'House Captains and House Mentors',
  'Activity Representatives for each club',
  'Event leads for assemblies, fests, and outreach',
];

function ClubsCells() {
  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Clubs & Cells</p>
          <h2>Students lead, organize, and mentor.</h2>
        </div>
        <div className="grid-split">
          <div className="list-card">
            <h3>Active clubs</h3>
            <ul>
              {clubs.map((club) => (
                <li key={club}>
                  <span className="badge">Club</span>
                  <span>{club}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-card">
            <h3>Leadership roles</h3>
            <ul>
              {leadership.map((item) => (
                <li key={item}>
                  <span className="badge">Lead</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="note" style={{ marginTop: '12px' }}>
          House system responsibilities include event organization, discipline with care, and mentoring juniors.
        </div>
      </div>
    </section>
  );
}

export default ClubsCells;
