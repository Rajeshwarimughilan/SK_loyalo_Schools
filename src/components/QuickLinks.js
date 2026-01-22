import './QuickLinks.css';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';


function QuickLinks(){
    return(
        <div className="quick-links-section">
            <div className="links-container">
                <a href="#inquire" className="link-item">inquire</a>
                <a href="#Gallery" className="link-item">Gallery</a>
                <a href="#Alumni & Blogs" className="link-item">Alumni & Blogs</a>
            </div>

            <div className="social-icons">
                <a href="#instagram" className="social-icon"><FaInstagram /></a>
                <a href="#youtube" className="social-icon"><FaYoutube /></a>
                <a href="#linkedin" className="social-icon"><FaLinkedin /></a>
                <a href="#facebook" className="social-icon"><FaFacebook /></a>
            </div>
        </div>
    );
}

export default QuickLinks;