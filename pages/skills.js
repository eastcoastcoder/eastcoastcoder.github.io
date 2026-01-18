import { useState } from 'react';

import Article from '../components/Article';
import { useContent } from '../context/ContentContext';
import { useArticleTransition, useEscapeKey, useArticleTimeout } from '../utils/transitions';

export default function SkillsPage() {
  const { content, loading } = useContent();
  const [articleTimeout, setArticleTimeout] = useState(false);

  const handleClose = useArticleTransition();
  useArticleTimeout(setArticleTimeout);
  useEscapeKey(handleClose);

  return (
    <Article
      title="Skills"
      description="Skills and education of Ethan Richardson"
      loading={loading}
      articleTimeout={articleTimeout}
      handleClose={handleClose}>
      <p>
        I specialize in writing React and React Native web and mobile applications. Here are just a few programming
        languages I am also familiar with:
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
  );
}
