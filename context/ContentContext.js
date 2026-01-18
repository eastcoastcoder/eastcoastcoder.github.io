import { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const DATA_LOAD_DELAY = 100;

export function ContentProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
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
        setLoading(false);
      }
    }, DATA_LOAD_DELAY);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return <ContentContext.Provider value={{ content, loading }}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
