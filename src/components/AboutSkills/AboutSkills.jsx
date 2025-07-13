import './AboutSkills.css';

export const AboutSkills = () => {
  return (
    <section id="skills">
      <div className='skills__container'>
        <h1 className='skills__heading'>Skills</h1>
        <div className="skills__html-css">
          <h2 className='skills__headings'>HTML5 & CSS3</h2>
          <ul>
            <li>
              I build semantic HTML5 structures with clean, accessible markup.
            </li>
            <li>
              I use CSS3, mainly Flexbox, to create responsive layouts that work
              well on different devices.
            </li>
            <li>
              I’m familiar with media queries for adapting designs to tablets
              and desktops.
            </li>
            <li>I follow BEM methodology to keep my CSS organized.</li>
            <li>
              I understand basic styling principles to make interfaces look neat
              and user-friendly.
            </li>
          </ul>
        </div>
        <div className="skills__javascript">
          <h2 className='skills__headings'>JavaScript</h2>
          <ul>
            <li>
              I know core JavaScript concepts like variables, functions, and
              objects.
            </li>
            <li>
              I can manipulate the DOM and handle events to make pages
              interactive.
            </li>
            <li>
              I’m familiar with modern ES6+ features like arrow functions,
              destructuring, and modules.
            </li>
          </ul>
        </div>
        <div className="skills__react">
          <h2 className='skills__headings'>React</h2>
          <ul>
            <li>
              I build React components using hooks like useState and useEffect.
            </li>
            <li>
              I use React Router to set up navigation in single-page apps.
            </li>
            <li>
              I have practical experience with asynchronous programming using
              fetch, promises, and async/await.
            </li>
            <li>Fetching and displaying data from APIs.</li>
            <li>
              Working with React has been a fun challenge, and I’m excited to
              keep growing my skills through real projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
