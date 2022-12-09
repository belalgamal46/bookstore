import { Outlet, Link } from 'react-router-dom';
// import navLinks from '../../fixtures/navLinks';

const Navbar = () => (
  <>
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);

export default Navbar;
