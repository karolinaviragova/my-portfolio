import './HomePage.css';
import { HomePageIntro } from '../../components/HomePageIntro/HomePageIntro';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [flipCard, seFlipCard] = useState(false);

  const handleFlip = () => {
    seFlipCard(!flipCard);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/projects.json');
      const result = await response.json();
      setProjects(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <HomePageIntro />
      <div className="cardsContainer">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            link={project.link}
            description={project.description}
            onFlip={handleFlip}
            flipCard={flipCard}
          />
        ))}
      </div>
    </>
  );
};
