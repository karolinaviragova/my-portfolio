import './ProjectCard.css';

/*make card flip, make card behind one each other on mobile, in line on desktop */
export const ProjectCard = ({name, link}) => {
  return (
    <div className="projectCard__container">
      <div className='projectCard__card'>
        <p className='projectCard__heading'>{name}</p>
        <a href={link} className='projectCard__link'>View project</a>
      </div>
    </div>
  );
};
/*
      <div className="projectCard__back">
        <p>Description</p>
      </div>
    */
