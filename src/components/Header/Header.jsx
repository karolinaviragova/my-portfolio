import "./Header.css"
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__name">
        <p>Karolina</p>
      </div>
      <div className="header__nav-container">
        <nav className="header__nav">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/about" className="nav__link">About</Link>
        </nav>
      </div>
    </header>
  );
};
