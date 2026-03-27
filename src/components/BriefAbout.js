import { useEffect, useState } from 'react';
import './BriefAbout.css';
import { publicApi } from '../api/public';

function getYoutubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace('www.', '');

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v');
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }

      if (parsed.pathname.startsWith('/embed/')) {
        return url;
      }

      if (parsed.pathname.startsWith('/shorts/')) {
        const videoId = parsed.pathname.split('/')[2];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }
    }

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '').trim();
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
  } catch (error) {
    return null;
  }

  return null;
}

function BriefAbout() {
  const [about, setAbout] = useState(null);
  const rawVideoUrl = about?.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4';
  const youtubeEmbedUrl = getYoutubeEmbedUrl(rawVideoUrl);

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
        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            title="About video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video
            controls
            poster={about?.videoPosterUrl || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop'}
          >
            <source src={rawVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default BriefAbout;