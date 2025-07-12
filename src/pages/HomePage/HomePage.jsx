import './HomePage.css';
import { HomePageIntro } from '../../components/HomePageIntro/HomePageIntro';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (handleId) => {
    projects.find((project) => project.id === handleId);

    // If the state matches the card's ID, it means the card is already flipped, so reset the state to default (null).
    // Otherwise, flip the card by setting the state to the card's ID.

    if (flippedCard === handleId) {
      setFlippedCard(null);
    } else {
      setFlippedCard(handleId);
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
