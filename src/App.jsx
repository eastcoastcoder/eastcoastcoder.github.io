import { useState, useEffect, useRef } from 'react';
import '../styles/main.scss';

import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

const App = () => {
  const timeoutId = useRef(null);
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchAsyncData = async () => {
      timeoutId.current = setTimeout(async () => {
        const response = await fetch(
          'https://gist.githubusercontent.com/eastcoastcoder/b130e3098fb28604339a026964e4e6c0/raw/personal-site.json'
        );
        if (response.status === 200) {
          const responseJSON = await response.json();
          setContent(responseJSON);
        }
        setLoading('');
      }, 100);
    };

    fetchAsyncData();
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const handleOpenArticle = articleLocal => {
    setIsArticleVisible(prev => !prev);
    setArticle(articleLocal);

    setTimeout(() => {
      setTimeoutState(prev => !prev);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(prev => !prev);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(prev => !prev);

    setTimeout(() => {
      setTimeoutState(prev => !prev);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(prev => !prev);
      setArticle('');
    }, 350);
  };

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape' && isArticleVisible) {
        handleCloseArticle();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isArticleVisible, articleTimeout, timeoutState]);

  return (
    <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
      <div>
        {/* Head tags should be added in index.html for Vite */}
        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeout={timeoutState}
          />
          <div
            id="main"
            style={timeoutState ? { display: 'flex' } : { display: 'none' }}>
            <Article
              id="intro"
              article={article}
              articleTimeout={articleTimeout}
              onCloseArticle={handleCloseArticle}
              title="Intro">
              <p>{content.about}</p>
            </Article>

            <Article
              id="work"
              article={article}
              articleTimeout={articleTimeout}
              onCloseArticle={handleCloseArticle}
              title="Work">
              {content.work &&
                content.work.map(({ yearStart, yearEnd, name, positions, description }, idx) => (
                  <div
                    className="w-grid"
                    key={`${idx}-work-item`}>
                    <div className="work-grid">
                      <h2>
                        {yearStart} - {yearEnd ? yearEnd : 'Current'}
                      </h2>
                      <div className="work-grid-info">
                        <h3>{name}</h3>
                        {positions.map(position => (
                          <h5 key={position}>{position}</h5>
                        ))}
                        <ul>
                          {description.split('\n').map((d, idx) => (
                            <li key={`${idx}-description`}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </Article>

            <Article
              id="skills"
              article={article}
              articleTimeout={articleTimeout}
              onCloseArticle={handleCloseArticle}
              title="Skills">
              <p>
                I specialize in writing React and React Native web and mobile applications. Here are just a few
                programming languages I am also familiar with:
              </p>
              <ul>
                <li>JavaScript</li>
                <li>C# / .Net</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
              <h2 className="major">Education</h2>
              {content.edu &&
                content.edu.map(({ name, yearStart, yearEnd, degrees, location }) => (
                  <div
                    key={name}
                    className="edu-grid">
                    <div className="edu-border">
                      <div className="edu-grid-master">
                        <h2>
                          {yearStart} - {yearEnd}
                        </h2>
                        <h3>
                          {name} {location}{' '}
                        </h3>
                        {degrees.map(degree => (
                          <h5 key={degree}>{degree}</h5>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </Article>

            <Article
              id="contact"
              article={article}
              articleTimeout={articleTimeout}
              onCloseArticle={handleCloseArticle}
              title="Contact">
              <div className="field">
                <p>
                  Further contact information can be found on my resume: <a href="https://goo.gl/sKcNiQ">View Resume</a>
                </p>
                <p>
                  You may also feel free to contact me directly via LinkedIn:{' '}
                  <a href="https://linkedin.com/in/ethan-richardson-854214b5">View LinkedIn</a>
                </p>
              </div>
            </Article>
          </div>
          <Footer timeout={timeoutState} />
        </div>
        <div id="bg" />
      </div>
    </div>
  );
};

export default App;
