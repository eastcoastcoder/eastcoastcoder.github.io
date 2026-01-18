import { useRouter } from 'next/router';
import Link from 'next/link';

const TRANSITION_DELAY = 325;

const Header = () => {
  const router = useRouter();

  const handleNavigation = (e, href) => {
    e.preventDefault();

    // If we're on an article page, trigger fade out
    if (router.pathname !== '/') {
      const body = document.querySelector('.body');
      const article = document.querySelector('article');

      if (body) body.classList.remove('is-article-visible');
      if (article) {
        article.classList.remove('timeout');
      }

      setTimeout(() => {
        router.push(href);
      }, TRANSITION_DELAY);
    } else {
      // From home page, add transition classes then navigate
      const body = document.querySelector('.body');
      const header = document.querySelector('#header');

      if (body) body.classList.add('is-article-visible');
      if (header) header.style.display = 'none';

      setTimeout(() => {
        router.push(href);
      }, TRANSITION_DELAY);
    }
  };

  return (
    <header id="header">
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
          <p>Lead Associate Systems Engineer based in Myrtle Beach, South Carolina</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              href="/intro"
              onClick={e => handleNavigation(e, '/intro')}>
              Intro
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              onClick={e => handleNavigation(e, '/work')}>
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              onClick={e => handleNavigation(e, '/skills')}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={e => handleNavigation(e, '/contact')}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
