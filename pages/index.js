import { useState, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

const ANIMATION_DELAY = 325;
const ANIMATION_TIMEOUT = 350;
const DATA_LOAD_DELAY = 100;

export default function IndexPage() {
  const timeoutId = useRef(null);
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');
  const [content, setContent] = useState({});

  useEffect(() => {
    timeoutId.current = setTimeout(async () => {
      try {
        const response = await fetch(
          'https://gist.githubusercontent.com/eastcoastcoder/b130e3098fb28604339a026964e4e6c0/raw/personal-site.json'
        );
        if (response.ok) {
          const data = await response.json();
          setContent(data);
        }
      } catch (error) {
        console.error('Failed to fetch content:', error);
      } finally {
        setLoading('');
      }
    }, DATA_LOAD_DELAY);

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const handleOpenArticle = useCallback(articleLocal => {
    setIsArticleVisible(true);
    setArticle(articleLocal);

    setTimeout(() => setTimeoutState(true), ANIMATION_DELAY);
    setTimeout(() => setArticleTimeout(true), ANIMATION_TIMEOUT);
  }, []);

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(false);

    setTimeout(() => setTimeoutState(false), ANIMATION_DELAY);
    setTimeout(() => {
      setIsArticleVisible(false);
      setArticle('');
    }, ANIMATION_TIMEOUT);
  }, []);

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape' && isArticleVisible) {
        handleCloseArticle();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isArticleVisible, handleCloseArticle]);

  return (
    <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
      <Head>
        <title>Ethan Richardson - Associate Developer</title>
        <meta
          name="description"
          content="Lead Associate Systems Engineer based in Myrtle Beach, South Carolina"
        />
      </Head>
      <div>
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
              {content.work?.map(({ yearStart, yearEnd, name, positions, description }, idx) => (
                <div
                  className="w-grid"
                  key={`work-${idx}`}>
                  <div className="work-grid">
                    <h2>
                      {yearStart} - {yearEnd || 'Current'}
                    </h2>
                    <div className="work-grid-info">
                      <h3>{name}</h3>
                      {positions.map((position, posIdx) => (
                        <h5 key={`${idx}-position-${posIdx}`}>{position}</h5>
                      ))}
                      <ul>
                        {description.split('\n').map((item, descIdx) => (
                          <li key={`${idx}-desc-${descIdx}`}>{item}</li>
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
              {content.edu?.map(({ name, yearStart, yearEnd, degrees, location }, idx) => (
                <div
                  key={`edu-${name}-${idx}`}
                  className="edu-grid">
                  <div className="edu-border">
                    <div className="edu-grid-master">
                      <h2>
                        {yearStart} - {yearEnd}
                      </h2>
                      <h3>
                        {name} {location}
                      </h3>
                      {degrees.map((degree, degIdx) => (
                        <h5 key={`${idx}-degree-${degIdx}`}>{degree}</h5>
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
                  Further contact information can be found on my resume:{' '}
                  <a
                    href="https://goo.gl/sKcNiQ"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Resume
                  </a>
                </p>
                <p>
                  You may also feel free to contact me directly via LinkedIn:{' '}
                  <a
                    href="https://linkedin.com/in/ethan-richardson-854214b5"
                    target="_blank"
                    rel="noopener noreferrer">
                    View LinkedIn
                  </a>
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
}
