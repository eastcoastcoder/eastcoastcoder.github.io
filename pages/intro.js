import { useState } from 'react';

import Article from '../components/Article';
import { useContent } from '../context/ContentContext';
import { useArticleTransition, useEscapeKey, useArticleTimeout } from '../utils/transitions';

export default function IntroPage() {
  const { content, loading } = useContent();
  const [articleTimeout, setArticleTimeout] = useState(false);

  const handleClose = useArticleTransition();
  useArticleTimeout(setArticleTimeout);
  useEscapeKey(handleClose);

  return (
    <Article
      title="Intro"
      description="Learn more about Ethan Richardson"
      loading={loading}
      articleTimeout={articleTimeout}
      handleClose={handleClose}>
      <p>{content.about}</p>
    </Article>
  );
}
