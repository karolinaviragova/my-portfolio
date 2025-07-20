import './AboutProjects.css';
import { AboutProjectsDetail } from '../AboutProjectsDetail/AboutProjectsDetail';
import { useProjectVariant } from '../../hooks/useProjectVariant';

export const AboutProjects = () => {
  const projects = useProjectVariant();
  return (
    <section id="projects">
      <div>
        <h1 className="projects__heading">Projects</h1>
      </div>
      {projects.map((project) => (
        <AboutProjectsDetail
          key={project.id}
          name={project.name}
          description={project.longDescription}
          webUrl={project.websiteUrl}
          repUrl={project.repositoryUrl}
        />
      ))}
    </section>
  );
};
