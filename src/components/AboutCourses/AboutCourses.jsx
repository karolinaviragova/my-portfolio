import './AboutCourses.css';

export const AboutCourses = () => {
  return (
    <section id="courses">
      <div className="courses__container">
        <h1 className="courses__heading">Courses</h1>

        <div className="course__one">
          <div className="courses__info">
            <h3 className="courses__name">Digital Academy Web</h3>
            <h4>03/2025 - 06/2025</h4>
          </div>
          <div className="courses__company-description">
            <h4 className="courses__company">Czechitas</h4>
            <p>
              An intensive, 4-month course (300+ hours) focused on the
              fundamentals of web development. Covered technologies included
              HTML, CSS, JavaScript, Git, working with APIs, and basic React.
              The program also involved collaborative team development of a web
              application, UI design in Figma, version control with Git, and an
              introduction to agile development practices.
            </p>
          </div>
        </div>
        <div className="course__two">
          <div className="courses__info">
            <h3 className="courses__name">JavaScript 1 - Basics</h3>
            <h4>09/2024 - 12/2024</h4>
          </div>
          <div className="courses__company-description">
            <h4 className="courses__company">Czechitas</h4>
            <p>
              I learned to program in JavaScript and manipulate the DOM for
              dynamic web page updates. The course covered functions, variable
              scopes, event handling, passing data via URL parameters, working
              with arrays and objects, and using Git for version control.
            </p>
          </div>
        </div>
        <div className="course__three">
          <div className="courses__info">
            <h3 className="courses__name">Introduction to HTML and CSS</h3>
            <h4>08/2024</h4>
          </div>
          <div className="courses__company-description">
            <h4 className="courses__company">Czechitas</h4>
            <p>
              The course covered the basics of HTML and CSS, including page
              structure and essential tags like headings, paragraphs, links, and
              images. It introduced CSS fundamentals such as text and background
              colors, font sizes and the box model.
            </p>
          </div>
        </div>
        <div className="course__four">
          <div className="courses__info">
            <h3 className="courses__name">Introduction to JavaScript</h3>
            <h4>07/2024</h4>
          </div>
          <div className="courses__company-description">
            <h4 className="courses__company">Czechitas</h4>
            <p>
              The course involved the basics of JavaScript and covered
              fundamental concepts like variables, loops, and conditions through
              hands-on exercises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
