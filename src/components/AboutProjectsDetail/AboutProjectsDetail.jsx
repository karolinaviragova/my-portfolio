import './AboutProjectsDetail.css';

export const AboutProjectsDetail = ({ name, description, webUrl, repUrl }) => {
  return (
    <div className="projects__container">
      <h3 className="projects__name">{name}</h3>
      <div className="projects__links">
        <h4>
          <a
            href={webUrl}
            className="projects__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project preview
          </a>
        </h4>
        <h4>
          <a
            href={repUrl}
            className="projects__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>
        </h4>
      </div>
      <div className="projects__desc">
        <p>{description}</p>
      </div>
    </div>
  );
};
