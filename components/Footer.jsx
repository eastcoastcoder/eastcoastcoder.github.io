import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ timeout }) => (
  <footer
    id="footer"
    style={timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a href="https://github.com/eastcoastcoder">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/ethan-richardson-854214b5">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
