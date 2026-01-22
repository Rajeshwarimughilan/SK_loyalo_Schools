import './AdmissionBanner.css';

function AdmissionBanner() {
  const text = 'Welcome to Loyalo School | Admissions Open for Year 2026 - Enroll Now! | We create Leaders not Followers | ';
  
  return (
    <div className="admission-banner">
      <div className="banner-scroll">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default AdmissionBanner;
