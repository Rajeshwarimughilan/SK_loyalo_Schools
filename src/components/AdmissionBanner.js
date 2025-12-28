import './AdmissionBanner.css';

function AdmissionBanner() {
  const text = 'Admissions Open for Year 2026 - Enroll Today!.We create Leaders not Followers.';
  
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
