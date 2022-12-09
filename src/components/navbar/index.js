import './styles/navbar.css';
import { Outlet, Link } from 'react-router-dom';
import navLinks from '../../fixtures/navLinks';

const Navbar = () => (
  <>
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          {navLinks.map(({ text, url }) => (
            <li key={url}>
              <Link to={url}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Navbar;
