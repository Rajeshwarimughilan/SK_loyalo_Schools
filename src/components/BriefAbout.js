import './BriefAbout.css';

function BriefAbout() {
  return (
    <div className="brief-about-section">
      <div className="about-content">
        <h2>Nurturing Young Minds for Tomorrow's World</h2>
        <p>
          Loyalo School is a beacon of progressive education where traditional values
           blend seamlessly with modern learning. We believe every child has unique
            potential, and our holistic curriculum goes beyond textbooks to nurture
             academics, sports, arts, and character development. With innovative 
             teaching methods, experienced faculty, and state-of-the-art facilities,
              we create an environment where curiosity thrives, critical thinking and
               creativity are encouraged, and leadership, emotional intelligence, and
                global awareness are developed—preparing students to confidently meet
                 real-world challenges of the 21st century.
        </p>

        <button className="learn-more-button">Learn More</button>
      </div>
      
      <div className="about-video">
        <video 
          controls 
          poster="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BriefAbout;