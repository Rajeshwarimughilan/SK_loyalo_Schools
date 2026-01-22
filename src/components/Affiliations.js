import './Affiliations.css';
import BharatScoutsLogo from '../ReferenceImages/BharatScouts.jpg';
import InteractLogo from '../ReferenceImages/attachment_126730945.png';
import CorpsLogo from '../ReferenceImages/attachment_125909872.jpg';

const affiliations = [
  {
    id: 1,
    name: 'Bharat Scouts and Guides',
    logo: BharatScoutsLogo,
  },
  {
    id: 2,
    name: 'Interact Club',
    logo: InteractLogo,
  },
  {
    id: 3,
    name: 'National Cadet Corps',
    logo: CorpsLogo,
  },
  {
    id: 4,
    name: 'RSP',
    logo: InteractLogo,
  },
  {
    id: 5,
    name: 'Cambridge International School',
    logo: CorpsLogo,
  },
  {
    id: 6,
    name: 'International Baccalaureate',
    logo: InteractLogo,
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
