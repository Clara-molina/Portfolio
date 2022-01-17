// import
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import './footer.scss';

const Footer = () => (
  <footer>
    <nav className="footer">
      <p className="copyright">2022 | Clara Molina </p>
      <a
        rel="noopener noreferrer"
        href="https://github.com/Clara-molina"
        className="footer-link"
        target="_blank"
      >
        <Github className="icon" />
      </a>

      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/clara-molina-devweb/"
        className="footer-link"
        target="_blank"
      >
        <Linkedin className="icon" />
      </a>

      <a
        rel="noopener noreferrer"
        href="mailto:molina.clara@icloud.com"
        className="footer-link"
        target="_blank"
      >
        <Envelope className="icon" />
      </a>
    </nav>
  </footer>
);

export default Footer;
