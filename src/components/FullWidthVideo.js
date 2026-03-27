import { useEffect, useState } from 'react';
import './FullWidthVideo.css';
import { publicApi } from '../api/public';

function getYoutubeEmbedUrl(url) {
    if (!url) return null;

    try {
        const parsed = new URL(url);
        const host = parsed.hostname.replace('www.', '');
        let videoId = null;

        if (host === 'youtube.com' || host === 'm.youtube.com') {
            if (parsed.pathname === '/watch') {
                videoId = parsed.searchParams.get('v');
            } else if (parsed.pathname.startsWith('/embed/')) {
                videoId = parsed.pathname.split('/')[2];
            } else if (parsed.pathname.startsWith('/shorts/')) {
                videoId = parsed.pathname.split('/')[2];
            }
        }

        if (host === 'youtu.be') {
            videoId = parsed.pathname.replace('/', '').trim();
        }

        if (!videoId) return null;

        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&rel=0&modestbranding=1`;
    } catch (error) {
        return null;
    }
}

function FullWidthVideo(){
        const [about, setAbout] = useState(null);

        useEffect(() => {
                let mounted = true;

                publicApi.getAbout()
                        .then((data) => {
                                if (mounted) setAbout(data);
                        })
                        .catch(() => {
                                if (mounted) setAbout(null);
                        });

                return () => {
                        mounted = false;
                };
        }, []);

        const videoUrl = about?.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4';
        const posterUrl = about?.videoPosterUrl || 'https://images.unsplash.com/photo-1427504494785-cdfc993faea8?w=1200&h=600&fit=crop';
        const youtubeEmbedUrl = getYoutubeEmbedUrl(videoUrl);

    return(
        <div className="fullwidth-video-section">
                        {youtubeEmbedUrl ? (
                                <iframe
                                        src={youtubeEmbedUrl}
                                        title="Loyalo Full Width Video"
                                        loading="lazy"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                />
                        ) : (
                                <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        poster={posterUrl}
                                >
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                </video>
                        )}

            <div className="video-overlay">
                <div className="overlay-content">
                    <h2> Welcome to Loyalo</h2>
                </div>
            </div>
        </div>  
    );
}

export default FullWidthVideo;