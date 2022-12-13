import './styles/navbar.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories';
import navLinks from '../../fixtures/navLinks';

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <header>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul className="nav-links">
            {navLinks.map(({ text, url }) => (
              <li key={url}>
                <Link
                  to={url}
                  onClick={text === 'CATEGORIES' ? handleClick : ''}
                  className={`${pathname === url ? 'active' : ''} nav-link`}
                >
                  {text}
                </Link>
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
};

export default Navbar;
