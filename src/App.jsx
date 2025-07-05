import { Link, Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

/*Add header and footer, then main and outlet */
export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
