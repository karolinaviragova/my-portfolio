import './HomePageIntro.css';
import { Link } from 'react-router-dom';

export const HomePageIntro = () => {
  return (
    <div className="homepage__container">
      <h1 className="homepage__name">Karolina Viragova</h1>
      <h2 className="homepage__role">Junior Frontend Developer</h2>
      <div className="homepage__intro-text">
        <h3>Hi!</h3>
        <p>
          Welcome to my page where I showcase my skills. I recently completed a
          4-month-long Digital Academy Web course by Czechitas and I’m now
          looking for a junior frontend developer role where I can keep growing
          and learning. Learn more{' '}
          <Link to="/about" className="homepage__link">
            about me
          </Link>
          .
        </p>
      </div>
      <div className="homepage__heading">
        <h2>My work</h2>
      </div>
    </div>
  );
};
