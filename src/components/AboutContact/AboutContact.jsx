import './AboutContact.css';

export const AboutContact = () => {
  return (
    <section id="contact">
      <div className="contant__container">
        <h1 className="contact__heading">Contact</h1>
        <div className="contant__desc">
          <h3>Let’s get in touch!</h3>
          <p>
            Feel free to reach out via email{' '}
            <a href="mailto:karolinavi94@gmail.com" className="contact__link">
              karolinavi94@gmail.com.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
