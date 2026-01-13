import Close from '../Close';

const Contact = ({ onCloseArticle, article, articleTimeout }) => (
  <article
    id="contact"
    className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
    style={{ display: 'none' }}>
    <h2 className="major">Contact</h2>
    <div className="field">
      <p>
        Further contact information can be found on my resume: <a href="https://goo.gl/sKcNiQ">View Resume</a>
      </p>
    </div>
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Contact;
