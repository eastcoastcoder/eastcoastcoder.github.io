import Close from './Close';

const Article = ({ id, article, articleTimeout, onCloseArticle, title, children }) => (
  <article
    id={id}
    className={`${article === id ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
    style={{ display: 'none' }}>
    <h2 className="major">{title}</h2>
    {children}
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Article;
