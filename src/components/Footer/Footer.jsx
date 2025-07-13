import "./Footer.css"


export const Footer = () => {
  return (
    <div className="footer__container">
      <ul className="footer__socials">
        <li>
          <a href="https://www.linkedin.com/in/karolína-virágová-820a44268/" target="_blank" className="footer__links" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/karolinaviragova" target="_blank" className="footer__links" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <div className="footer__rights">
        <p>@2025 Karolina Viragova</p>
      </div>
    </div>
  );
};
