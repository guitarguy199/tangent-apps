import { Link } from 'react-router-dom';
import Logo from '../assets/tangentlogo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='grid container'>
                <Link className='footer-logo' to={"/"}>
                    <img src={Logo} alt="Tangent apps Logo" />
                </Link>
                <nav className='footer-list footer-sitemap'>
                    <h4>Sitemap</h4>
                </nav>
                <div className='footer-list footer-contact'>
                    <h4>Contact Us</h4>
                </div>
                <div className=' footer-list footer-socials'>
                    <h4>Socials</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;