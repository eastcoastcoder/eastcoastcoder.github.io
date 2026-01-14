const Header = ({ onOpenArticle, timeout }) => (
  <header
    id="header"
    style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        className="logo"
        src="/static/images/2.jpeg"
        alt=""
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Ethan Richardson</h1>
        <p>Associate Software Developer based in Myrtle Beach, South Carolina</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => onOpenArticle('intro')}>
            Intro
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onOpenArticle('work')}>
            Work
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onOpenArticle('skills')}>
            Skills
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => onOpenArticle('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
