import './QuickLinks.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useSite } from '../context/SiteContext';


function QuickLinks(){
    const { settings } = useSite();

    return(
        <div className="quick-links-section">
            <div className="links-container">
                <a href="#inquire" className="link-item">inquire</a>
                <a href="#Gallery" className="link-item">Gallery</a>
                <a href="#Alumni & Blogs" className="link-item">Alumni & Blogs</a>
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