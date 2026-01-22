import './FullWidthVideo.css';

function FullWidthVideo(){
    return(
        <div className="fullwidth-video-section">
            <video
            autoPlay
            muted
            loop
            poster="https://images.unsplash.com/photo-1427504494785-cdfc993faea8?w=1200&h=600&fit=crop"
            >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.    
            </video>

            <div className="video-overlay">
                <div className="overlay-content">
                    <h2> Welcome to Loyalo</h2>
                </div>
            </div>
        </div>  
    );
}

export default FullWidthVideo;