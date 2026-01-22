import './Footer.css';

function Footer() {
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
                <h3>LOYALO SCHOOL</h3>
                <p className="tagline">EXCELLENCE IN EDUCATION</p>
              </div>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>044 6624 1130 / 1117</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>79, Omega School Road (Pallavaram Road), Kolapakkam, Kovur Post, Chennai, Tamil Nadu 600128.</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>info@loyalo.org</span>
              </div>
            </div>

            <div className="social-icons">
              <a href="#" aria-label="Facebook"><span>f</span></a>
              <a href="#" aria-label="Twitter"><span>𝕏</span></a>
              <a href="#" aria-label="LinkedIn"><span>in</span></a>
              <a href="#" aria-label="Instagram"><span>📷</span></a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Academics</h4>
              <ul>
                <li><a href="#">CBSE</a></li>
                <li><a href="#">Cambridge</a></li>
                <li><a href="#">IB Diploma Programme</a></li>
                <li><a href="#">NIOS</a></li>
                <li><a href="#">Montessori</a></li>
                <li><a href="#">Kindergarten</a></li>
                <li><a href="#">Special Education</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Omegazine</a></li>
                <li><a href="#">Fee Payment</a></li>
                <li><a href="#">Transport Bus Routes</a></li>
                <li><a href="#">Uniforms</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Info</h4>
              <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>MCB Login</h4>
              <ul>
                <li><a href="#">For Students</a></li>
                <li><a href="#">For Parents</a></li>
                <li><a href="#">For Alumni</a></li>
                <li><a href="#">For Staffs</a></li>
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
