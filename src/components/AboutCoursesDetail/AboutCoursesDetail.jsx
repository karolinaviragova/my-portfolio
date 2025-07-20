import './AboutCoursesDetail.css';

export const AboutCoursesDetail = ({ name, company, length, description }) => {
  return (
    <div className="courses__container">
      <div className="courses__info">
        <h3 className="courses__name">{name}</h3>
        <h4 className="courses__length">{length}</h4>
      </div>
      <div className="courses__company-description">
        <h4 className="courses__company">{company}</h4>
        <p className='courses__desc'>{description}</p>
      </div>
    </div>
  );
};
