import './AboutProjects.css';
import { AboutProjectsDetail } from './AboutProjectsDetail/AboutProjectsDetail';

export const AboutProjects = () => {
  return (
    <section id="projects">
      <div>
        <h1 className="projects__heading">Projects</h1>
      </div>
      <AboutProjectsDetail />
    </section>
  );
};
