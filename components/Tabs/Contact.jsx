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
      <p>
        You may also feel free to contact me directly via LinkedIn:{' '}
        <a href="https://linkedin.com/in/ethan-richardson-854214b5">View LinkedIn</a>
      </p>
    </div>
    <Close onCloseArticle={onCloseArticle} />
  </article>
);

export default Contact;
