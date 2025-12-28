import './PageLayout.css';

const facilities = [
  'Well-ventilated rooms with defined study and rest areas.',
  '24/7 supervision with pastoral care and medical support.',
  'Safe access controls and clear visitor protocols.',
];

const timetable = [
  'Morning fitness and reflection time.',
  'Academic prep hours with mentor support.',
  'Skill clubs and sports slots in the evening.',
  'Quiet hours and lights-out routine to ensure rest.',
];

const food = [
  'Balanced weekly menu with whole foods and hydration breaks.',
  'Full Moon Day traditional lunch celebrating culture and community.',
  'Dietary accommodations recorded and monitored.',
];

function Hostel() {
  return (
    <section className="page-shell" id="hostel">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Hostel Facilities</p>
          <h2>Transparent, safe, and nurturing boarding.</h2>
          <p className="lede">Parents get a clear view of daily life, food plans, and supervision.</p>
        </div>
        <div className="grid-split">
          <div className="list-card">
            <h3>Overview</h3>
            <ul>
              {facilities.map((item) => (
                <li key={item}>
                  <span className="badge">Facility</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="list-card">
            <h3>Daily schedule</h3>
            <ul>
              {timetable.map((item) => (
                <li key={item}>
                  <span className="badge">Routine</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section" style={{ marginTop: '14px' }}>
          <div className="card">
            <h3>Food timetable</h3>
            <p>Weekly rotations featuring fresh produce, protein variety, and hydration trackers.</p>
            <div className="note">Drop a downloadable PDF timetable here for parents.</div>
          </div>
          <div className="card">
            <h3>Safety & supervision</h3>
            <p>Dedicated wardens, secure entry, and regular check-ins to ensure every child feels safe and supported.</p>
          </div>
          <div className="card highlight">
            <h3>Full Moon Day lunch</h3>
            <p>A cultural lunch that brings everyone together to celebrate heritage and mindfulness around food.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hostel;
