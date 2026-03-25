import { useEffect, useState } from 'react';
import './BriefAbout.css';
import { publicApi } from '../api/public';

function BriefAbout() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    let mounted = true;
    publicApi.getAbout().then((data) => {
      if (mounted) setAbout(data);
    }).catch(() => {
      if (mounted) setAbout(null);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="brief-about-section">
      <div className="about-content">
        <h2>{about?.shortTitle || "Nurturing Young Minds for Tomorrow's World"}</h2>
        <p>
          {about?.shortDescription || 'Loyalo School is a beacon of progressive education where traditional values blend seamlessly with modern learning.'}
        </p>

        <button className="learn-more-button">Learn More</button>
      </div>
      
      <div className="about-video">
        <video 
          controls 
          poster={about?.videoPosterUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop'}
        >
          <source src={about?.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BriefAbout;