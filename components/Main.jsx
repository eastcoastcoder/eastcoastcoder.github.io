import Intro from './Tabs/Intro';
import Work from './Tabs/Work';
import Skills from './Tabs/Skills';
import Contact from './Tabs/Contact';

const Main = ({ onCloseArticle, timeout, article, articleTimeout, content }) => (
  <div
    id="main"
    style={timeout ? { display: 'flex' } : { display: 'none' }}>
    <Intro
      onCloseArticle={onCloseArticle}
      article={article}
      articleTimeout={articleTimeout}
      about={content.about}
    />
    <Work
      onCloseArticle={onCloseArticle}
      article={article}
      articleTimeout={articleTimeout}
      work={content.work}
    />
    <Skills
      onCloseArticle={onCloseArticle}
      article={article}
      articleTimeout={articleTimeout}
      skills={content.skills}
      edu={content.edu}
    />
    <Contact
      onCloseArticle={onCloseArticle}
      article={article}
      articleTimeout={articleTimeout}
      contact={content.contact}
    />
  </div>
);

export default Main;
