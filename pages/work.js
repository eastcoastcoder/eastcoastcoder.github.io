import { useState } from 'react';

import Article from '../components/Article';
import { useContent } from '../context/ContentContext';
import { useArticleTransition, useEscapeKey, useArticleTimeout } from '../utils/transitions';

export default function WorkPage() {
  const { content, loading } = useContent();
  const [articleTimeout, setArticleTimeout] = useState(false);

  const handleClose = useArticleTransition();
  useArticleTimeout(setArticleTimeout);
  useEscapeKey(handleClose);

  return (
    <Article
      title="Work"
      description="Work experience of Ethan Richardson"
      loading={loading}
      articleTimeout={articleTimeout}
      handleClose={handleClose}>
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
  );
}
