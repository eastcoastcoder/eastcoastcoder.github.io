import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/main.scss';
import { ContentProvider } from '../context/ContentContext';

const ANIMATION_DELAY = 325;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false);
      }, ANIMATION_DELAY);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <ContentProvider>
      <div className={isTransitioning ? 'page-transitioning' : ''}>
        <Component {...pageProps} />
      </div>
    </ContentProvider>
  );
}
