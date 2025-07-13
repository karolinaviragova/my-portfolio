import './HomePageIntro.css';
import { Link } from 'react-router-dom';

export const HomePageIntro = () => {
  return (
    <div className="homepage__container">
      <h1 className="homepage__name">Karolina Viragova</h1>
      <h2 className="homepage__role">Junior Frontend Developer</h2>
      <div className="homepage__intro-text">
        <h3>Hello there!</h3>
        <p>
          Welcome to my page where I showcase my skills and the projects I have
          created, and where you can get to know me better. Feel free to explore
          my work below, or head over to the{' '}
          <Link to="/about" className="homepage__link">
            about page
          </Link>{' '}
          to learn more about me and my journey into frontend development.
        </p>
        <p>
          I’m open to new opportunities and connections — let’s get in touch!
        </p>
      </div>
      <div className="homepage__heading">
        <h2>My work</h2>
      </div>
    </div>
  );
};
