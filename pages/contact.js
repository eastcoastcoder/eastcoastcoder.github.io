import { useState } from 'react';

import Article from '../components/Article';
import { useArticleTransition, useEscapeKey, useArticleTimeout } from '../utils/transitions';

export default function ContactPage() {
  const [articleTimeout, setArticleTimeout] = useState(false);

  const handleClose = useArticleTransition();
  useArticleTimeout(setArticleTimeout);
  useEscapeKey(handleClose);

  return (
    <Article
      title="Contact"
      description="Contact information for Ethan Richardson"
      loading={false}
      articleTimeout={articleTimeout}
      handleClose={handleClose}>
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
  );
}
