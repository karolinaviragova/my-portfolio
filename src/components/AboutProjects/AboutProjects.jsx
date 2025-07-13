import './AboutProjects.css';

export const AboutProjects = () => {
  return (
    <section id="projects">
      <div>
        <h1 className="projects__heading">Projects</h1>
      </div>
      <div>
        <h3 className="projects__name">My portfolio</h3>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link na me portfolio</a></h4>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link github meho portfolia</a></h4>
        <p>My portfolio was born from the desire to code independently after finishing the Digital Academy. I wanted to showcase my skills and create my own space, on my own terms and timeline. I really enjoyed the process, and if you’re reading this, it means you’ve already taken a look! I’m always open to suggestions on how to improve or add cool new features.</p>
      </div>
      <div>
        <h3 className="projects__name">PawHelp</h3>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link na me portfolio</a></h4>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link github meho portfolia</a></h4>
        <p>PawHelp is a web application designed to help users find veterinary care in Prague. You can choose from veterinary emergency services, regular clinics, or even a vet who comes to your home. The app also shows your location and the distance to each option.</p>
        <p>I created this project as part of my final assignment during the Digital Academy Web, working together with my partner and mentors. It was a fun but challenging weekend of coding! We used cool tools like React Query, Apify scraper for data handling, Tailwind CSS for styling, and pre-made components from ShadCN UI.</p>
      </div>
      <div>
        <h3 className="projects__name">Tic-tac-toe</h3>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link na me portfolio</a></h4>
        <h4><a href="tbd" className='projects__link' target='_blank' rel="noopener noreferrer">Link github meho portfolia</a></h4>
        <p>This was a step-by-step project completed during the academy, starting from the basics with HTML and CSS. Over time, we added JavaScript functions to handle game logic, and finally integrated an AI-powered API so I could play against the computer. It was a great way to apply and build my skills progressively, combining frontend basics with more advanced features like API integration and game mechanics.</p>
      </div>
    </section>
  );
};
