import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const ANIMATION_TIMEOUT = 350;
export const TRANSITION_DELAY = 325;

export const useArticleTransition = () => {
  const router = useRouter();

  const handleClose = e => {
    e?.preventDefault();
    const body = document.querySelector('.body');
    const article = document.querySelector('article');

    if (body) body.classList.remove('is-article-visible');
    if (article) article.classList.remove('timeout');

    setTimeout(() => {
      router.push('/');
    }, TRANSITION_DELAY);
  };

  return handleClose;
};

export const useEscapeKey = callback => {
  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape') {
        callback({ preventDefault: () => {} });
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [callback]);
};

export const useArticleTimeout = setArticleTimeout => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setArticleTimeout(true);
    }, ANIMATION_TIMEOUT);

    return () => clearTimeout(timeoutId);
  }, [setArticleTimeout]);
};
