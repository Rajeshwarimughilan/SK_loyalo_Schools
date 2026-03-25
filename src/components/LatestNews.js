import { useEffect, useState } from 'react';
import './LatestNews.css';
import { publicApi } from '../api/public';

function LatestNews() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    publicApi.getNotices({ type: 'NEWS', page: 1, pageSize: 12 }).then((response) => {
      if (!mounted) return;
      setNewsItems(response?.data || []);
    }).catch(() => {
      if (!mounted) return;
      setNewsItems([]);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="latest-news-section">
      <h2 className="section-title gradient-text">Latest News</h2>
      <div className="news-grid">
        {newsItems.map((news) => (
          <a 
            key={news.id} 
            href={news.externalUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="news-card"
          >
            <div className="news-image">
              <img src={news.imageUrl} alt={news.title} />
              {(news.externalUrl || '').includes('/reel/') ? (
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
