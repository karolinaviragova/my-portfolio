import './ProjectCard.css';

export const ProjectCard = ({
  name,
  websiteUrl,
  shortDescription,
  onFlip,
  flippedCard,
  id,
}) => {
  return (
    <div
      className="projectCard__container"
      onClick={() => {
        onFlip(id);
      }}
    >
      {id === flippedCard ? (
        <div className="projectCard__card projectCard__card--back">
          <p className="projectCard__description">{shortDescription}</p>
        </div>
      ) : (
        <div className="projectCard__card">
          <p className="projectCard__heading">{name}</p>
          <a href={websiteUrl} className="projectCard__link" target="_blank">
            View project
          </a>
        </div>
      )}
    </div>
  );
};
