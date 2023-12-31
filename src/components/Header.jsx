import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/tangentlogo.png';

const Header = () => {

    return (
        <header>
            <nav className='grid container navbar'>
            <Link className='navbar-logo' to={"/"}>
                <img src={Logo} />
            </Link>
                <ul className='navbar-links'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/services">Services</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                </ul>
            </nav>
        </header>
    )
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive ? "active" : "" }>
        <Link to={to} aria-label={children} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Header;