import { Link, Outlet } from 'react-router-dom';

/*Add header and footer, then main and outlet */
export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
};
