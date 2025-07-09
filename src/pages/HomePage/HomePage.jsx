import './HomePage.css';
import { HomePageIntro } from '../../components/HomePageIntro/HomePageIntro';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [flippedCard, seFlippedCard] = useState(false);

  // find id with .find, handle id as parameter is passed to child
  const handleFlip = (handleId) => {
    const foundId = projects.find((projectId) => projectId.id === handleId);
    
    if(foundId.id === 0) {
      seFlippedCard(handleId)
    } else if (foundId.id === 1) {
      seFlippedCard(handleId)
    } else if (foundId.id === 2) {
      seFlippedCard(handleId)
    }
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
            flippedCard={flippedCard}
            id={project.id}
          />
        ))}
      </div>
    </>
  );
};
