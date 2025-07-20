import './AboutIntro.css';

export const AboutIntro = () => {
  return (
    <section id="intro">
      <div className="about__container">
        <h1 className="about__heading">A little bit about me</h1>
        <div className="about__texts">
          <p>
            Currently, I am working as a Project Manager in Prague. I lead
            projects and communicate daily with developers, Product Owners, and
            internal teams. This experience gives me great insight into how
            things work and has sparked even more curiosity to explore frontend
            development on my own!
          </p>
          <p>
            My journey into frontend development started during the COVID
            period, when I began learning the basics of coding. I quickly fell
            in love with HTML and CSS, and over time I moved on to JavaScript —
            which, to be honest, felt like a LOT at the beginning! Most of my
            learning happened through{' '}
            <a
              href="https://www.udemy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Udemy
            </a>{' '}
            and{' '}
            <a
              href="https://www.codecademy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about__link"
            >
              Codecademy
            </a>
            . This journey led me to change my career path and brought me to
            where I am today.
          </p>
          <p>
            Last year, I decided to give programming another shot and enrolled
            in courses with Czechitas. I started with JavaScript Basics 1, which
            then opened the door to the Czechitas Web Academy — and I’m proud to
            say I successfully completed it!
          </p>
          <p>
            Along the way, I built up my skills in{' '}
            <strong>HTML, CSS, JavaScript,</strong> and <strong>React</strong>.
            I met many wonderful people, made new friends, and most importantly
            — I really enjoyed the whole journey. Now, I’m excited to keep
            learning and growing in a Junior Frontend Developer role.
          </p>
        </div>
      </div>
    </section>
  );
};
