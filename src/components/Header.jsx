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
                    <CustomLink to="/">About</CustomLink>
                    <CustomLink to="/">Services</CustomLink>
                    <CustomLink to="/">Contact</CustomLink>
                </ul>
            </nav>
        </header>
    )
}

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