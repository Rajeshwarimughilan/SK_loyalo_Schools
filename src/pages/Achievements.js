import './PageLayout.css';

const achievements = [
  {
    area: 'Academic excellence',
    examples: 'Top ranks in science fairs, math olympiads, and inquiry project showcases.',
  },
  {
    area: 'Sports & extracurricular',
    examples: 'District swim medals, inter-school chess podiums, and robotics league wins.',
  },
  {
    area: 'Student recognition',
    examples: 'Leadership awards for house captains and community service citations.',
  },
];

function Achievements() {
  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Achievements</p>
          <h2>Celebrating effort, growth, and excellence.</h2>
        </div>
        <div className="tile-grid">
          {achievements.map((item) => (
            <div key={item.area} className="tile">
              <strong>{item.area}</strong>
              <p>{item.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
