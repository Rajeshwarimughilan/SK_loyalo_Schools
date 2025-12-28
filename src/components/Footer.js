import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h4>Loyalo School</h4>
        <p>Future-ready learning crafted for confident, kind, and capable leaders.</p>
      </div>
      <div className="footer-grid">
        <div>
          <h5>Visit</h5>
          <p>123 Leadership Avenue<br />Future City, Edu State</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>+91 98765 43210<br />hello@loyalo.school</p>
        </div>
        <div>
          <h5>Admissions</h5>
          <p>Book a campus walk-through and meet our leadership mentors.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Loyalo School. All rights reserved.</span>
        <div className="footer-links">
          <a href="#announcements">Announcements</a>
          <a href="#hostel">Hostel</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
