import './QuickLinks.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSite } from '../context/SiteContext';


function QuickLinks(){
    const { settings } = useSite();

    return(
        <div className="quick-links-section">
            <div className="links-container">
                <NavLink to="/admin/login" className="link-item">Admin Login</NavLink>
                <a href="#contact" className="link-item">Inquire</a>
                <NavLink to="/gallery" className="link-item">Gallery</NavLink>
                <NavLink to="/alumni" className="link-item">Alumni & Blogs</NavLink>
            </div>

            <div className="social-icons">
                <a href={settings?.socialInstagram || '#instagram'} className="social-icon"><FaInstagram /></a>
                <a href={settings?.socialYoutube || '#youtube'} className="social-icon"><FaYoutube /></a>
                <a href={settings?.socialLinkedin || '#linkedin'} className="social-icon"><FaLinkedin /></a>
                <a href={settings?.socialFacebook || '#facebook'} className="social-icon"><FaFacebook /></a>
            </div>
        </div>
    );
}

export default QuickLinks;