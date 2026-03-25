import './AdmissionBanner.css';
import { useSite } from '../context/SiteContext';

function AdmissionBanner() {
  const { settings } = useSite();
  const schoolName = settings?.schoolName || 'Loyalo School';
  const text = `Welcome to ${schoolName} | Admissions Open for Year 2026 - Enroll Now! | We create Leaders not Followers | `;
  
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
