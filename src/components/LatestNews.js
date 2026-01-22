import './LatestNews.css';

const newsItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
    title: 'Annual Science Exhibition Success',
    date: 'January 15, 2026',
    instagramLink: 'https://www.instagram.com/p/example1/',
    type: 'image',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop',
    title: 'Students Excel in Inter-School Sports',
    date: 'January 10, 2026',
    instagramLink: 'https://www.instagram.com/p/example2/',
    type: 'video',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
    title: 'Cultural Festival Celebration',
    date: 'January 5, 2026',
    instagramLink: 'https://www.instagram.com/p/example3/',
    type: 'image',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    title: 'International Exchange Program Launch',
    date: 'December 28, 2025',
    instagramLink: 'https://www.instagram.com/p/example4/',
    type: 'video',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    title: 'Robotics Team Wins Regional Championship',
    date: 'December 20, 2025',
    instagramLink: 'https://www.instagram.com/p/example5/',
    type: 'image',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
    title: 'Community Service Initiative Success',
    date: 'December 15, 2025',
    instagramLink: 'https://www.instagram.com/p/example6/',
    type: 'video',
  },
];

function LatestNews() {
  return (
    <div className="latest-news-section">
      <h2 className="section-title gradient-text">Latest News</h2>
      <div className="news-grid">
        {newsItems.map((news) => (
          <a 
            key={news.id} 
            href={news.instagramLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="news-card"
          >
            <div className="news-image">
              <img src={news.image} alt={news.title} />
              {news.type === 'video' ? (
                <div className="play-button-overlay">
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="28" fill="rgba(255, 255, 255, 0.95)" />
                      <path d="M24 20 L24 40 L42 30 Z" fill="var(--accent)" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="selection-frame">
                  <div className="frame-corner tl"></div>
                  <div className="frame-corner tr"></div>
                  <div className="frame-corner bl"></div>
                  <div className="frame-corner br"></div>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
