import './HomePage.css';
import { HomePageIntro } from '../../components/HomePageIntro/HomePageIntro';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { useState } from 'react';
import { useProjectVariant } from '../../hooks/useProjectVariant';
import { AboutContact } from '../../components/AboutContact/AboutContact';

export const HomePage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  // Call useProjectVariant hook, which returns an array of projects, and save it to a variable.
  const projects = useProjectVariant();

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

  return (
    <>
      <HomePageIntro />
      <div className="cardsContainer">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            websiteUrl={project.websiteUrl}
            shortDescription={project.shortDescription}
            onFlip={handleFlip}
            flippedCard={flippedCard}
            id={project.id}
          />
        ))}
      </div>
      <AboutContact />
    </>
  );
};
