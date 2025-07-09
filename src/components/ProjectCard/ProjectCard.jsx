import './ProjectCard.css';

/*make card behind one each other on mobile, in line on desktop */
export const ProjectCard = ({
  name,
  link,
  description,
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
      <div className="projectCard__card">
        <p className="projectCard__heading">{name}</p>
        <a href={link} className="projectCard__link" target="_blank">
          View project
        </a>
      </div>
      <div
        className={
          id === flippedCard ? 'projectCard__card projectCard__card--back' : ' '
        }
      >
        {id === flippedCard ? (
          <p className="projectCard__description">{description}</p>
        ) : (
          ' '
        )}
      </div>
    </div>
  );
};
