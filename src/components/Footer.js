import './Footer.css';
import { useSite } from '../context/SiteContext';

function Footer() {
  const { settings } = useSite();

  const schoolName = settings?.schoolName || 'LOYALO SCHOOL';
  const footerTagline = settings?.footerTagline || 'EXCELLENCE IN EDUCATION';
  const contactPhone = settings?.contactPhone || '044 6624 1130 / 1117';
  const address = settings?.address || '79, Omega School Road (Pallavaram Road), Kolapakkam, Kovur Post, Chennai, Tamil Nadu 600128.';
  const contactEmail = settings?.contactEmail || 'info@loyalo.org';

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section with Logo and Contact */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="24" stroke="white" strokeWidth="2"/>
                  <path d="M25 15 L35 25 L25 35 L15 25 Z" fill="white"/>
                </svg>
              </div>
              <div className="brand-text">
                <h3>{schoolName.toUpperCase()}</h3>
                <p className="tagline">{footerTagline.toUpperCase()}</p>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{contactPhone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{address}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>{contactEmail}</span>
              </div>
            </div>

            <div className="social-icons">
              <a href={settings?.socialFacebook || '/'} aria-label="Facebook"><span>f</span></a>
              <a href={settings?.socialYoutube || '/'} aria-label="Youtube"><span>▶</span></a>
              <a href={settings?.socialLinkedin || '/'} aria-label="LinkedIn"><span>in</span></a>
              <a href={settings?.socialInstagram || '/'} aria-label="Instagram"><span>📷</span></a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Academics</h4>
              <ul>
                <li><a href="/">CBSE</a></li>
                <li><a href="/">Cambridge</a></li>
                <li><a href="/">IB Diploma Programme</a></li>
                <li><a href="/">NIOS</a></li>
                <li><a href="/">Montessori</a></li>
                <li><a href="/">Kindergarten</a></li>
                <li><a href="/">Special Education</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="/">Omegazine</a></li>
                <li><a href="/">Fee Payment</a></li>
                <li><a href="/">Transport Bus Routes</a></li>
                <li><a href="/">Uniforms</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Info</h4>
              <ul>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>MCB Login</h4>
              <ul>
                <li><a href="/">For Students</a></li>
                <li><a href="/">For Parents</a></li>
                <li><a href="/">For Alumni</a></li>
                <li><a href="/">For Staffs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>© Copyright {new Date().getFullYear()} Loyalo School, all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
