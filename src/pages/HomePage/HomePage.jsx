import './HomePage.css';
import { HomePageIntro } from '../../components/HomePageIntro/HomePageIntro';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('public/projects.json');
      const result = await response.json();
      setProjects(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <HomePageIntro />
      {projects.map((project) => (
        <ProjectCard key={project.id} name={project.name} link={project.link} />
      ))}
    </>
  );
};
