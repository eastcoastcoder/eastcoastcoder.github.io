import Close from './Close';

const Article = ({ articleTimeout, onCloseArticle, title, children }) => (
  <article className={`active ${articleTimeout ? 'timeout' : ''}`}>
    <h2 className="major">{title}</h2>
    {children}
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Article;
