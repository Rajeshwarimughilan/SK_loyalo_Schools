import './LifeAtLoyalo.css';
import geometricOverlay from '../ReferenceImages/geo.svg';

const lifeCards = [
  {
    id: 'sports',
    title: 'Sports',
    description: 'Developing champions through teamwork, discipline, and athletic excellence. Our sports program encourages students to explore various disciplines.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
  },
  {
    id: 'arts-culture',
    title: 'Arts & Culture',
    description: 'Celebrating creativity through music, dance, drama, and visual arts. Students participate in cultural festivals and artistic performances.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
  },
  {
    id: 'global-education',
    title: 'Global Education',
    description: 'Preparing world-ready citizens with international exposure and perspectives through exchange programs and global collaborations.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
  },
  {
    id: 'co-curriculars',
    title: 'Co-Curriculars',
    description: 'Building diverse skills through clubs, competitions, and hands-on projects. Student-led initiatives in robotics, coding, and more.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  },
  {
    id: 'Highlights',
    title: 'Highlights',
    description: 'Developing champions through teamwork, discipline, and athletic excellence. Our sports program encourages students to explore various disciplines.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
  },
  {
    id: 'Senior-Junior Interaction',
    title: 'Senior-Junior Interaction',
    description: 'Celebrating creativity through music, dance, drama, and visual arts. Students participate in cultural festivals and artistic performances.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
  },
  {
    id: 'Clubs',
    title: 'Clubs',
    description: 'Preparing world-ready citizens with international exposure and perspectives through exchange programs and global collaborations.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop',
  },
  {
    id: 'Achievements',
    title: 'Achievements',
    description: 'Building diverse skills through clubs, competitions, and hands-on projects. Student-led initiatives in robotics, coding, and more.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  },
];

function LifeAtLoyalo() {
  return (
    <section className="life-at-loyalo-section">
      <div className="section-head">
        <h2>Life at Loyalo</h2>
      </div>

      <div className="life-cards-container">
        {lifeCards.map(card => (
          <div key={card.id} className="aba-hover-card">
            {/* Image Layer */}
            <div className="aba-card-image">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
            </div>

            {/* Geometric Overlay on Hover */}
            <div className="geometric-overlay">
              <img src={geometricOverlay} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LifeAtLoyalo;
