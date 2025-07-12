import { Link } from 'react-router-dom';
import './ErrorPage.css';

export const ErrorPage = () => {
  return (
    <div className="errorPage__container">
      <h1 className="errorPage__heading">Oppps! You got lost.</h1>
      <p className='errorPage__desc'>Try the <Link to="/" className='errorPage__link'>homepage</Link> to get back on track.</p>
    </div>
  );
};
