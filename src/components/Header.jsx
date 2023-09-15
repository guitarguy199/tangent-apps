import './Header.css';
import Logo from '../assets/tangentlogo.png';

const Header = () => {

    return (
        <header>
            <nav className='grid container navbar'>
            <div className='navbar-logo'>
                <img src={Logo} />
                </div>
                <ul className='navbar-links'>
                    <a href="/">Home</a>
                    <a href="/">Home</a>
                    <a href="/">Home</a>
                    <a href="/">Home</a>
                </ul>
            </nav>
        </header>
    )
}

function CustomLink() {
    //add router link functionality
}

export default Header;