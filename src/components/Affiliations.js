import './Affiliations.css';

const affiliations = [
  {
    id: 1,
    name: 'Bharat Scouts and Guides',
    logo: '/ReferenceImages/BharatScouts.jpg',
  },
  {
    id: 2,
    name: 'Interact Club',
    logo: '/ReferenceImages/attachment_126730945.png',
  },
  {
    id: 3,
    name: 'National Cadet Corps',
    logo: '/ReferenceImages/attachment_125909872.jpg',
  },
  {
    id: 4,
    name: 'RSP',
    logo: '/ReferenceImages/attachment_126730945.png',
  },
  {
    id: 5,
    name: 'Cambridge International School',
    logo: '/ReferenceImages/attachment_125909872.jpg',
  },
  {
    id: 6,
    name: 'International Baccalaureate',
    logo: '/ReferenceImages/attachment_126730945.png',
  },
];

function Affiliations() {
  return (
    <div className="affiliations-section">
      <h2 className="section-title gradient-text">Affiliations</h2>
      <div className="affiliations-grid">
        {affiliations.map((affiliation) => (
          <div key={affiliation.id} className="affiliation-card">
            <img src={affiliation.logo} alt={affiliation.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Affiliations;
