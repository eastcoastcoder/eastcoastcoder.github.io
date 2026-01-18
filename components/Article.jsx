import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';

const Article = ({ title, description, loading, articleTimeout, handleClose, children }) => (
  <div className={`body ${loading ? 'is-loading' : ''} is-article-visible`}>
    <Head>
      <title>{title} - Ethan Richardson</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
    <div>
      <div id="wrapper">
        <div
          id="main"
          style={{ display: 'flex' }}>
          <article className={`active ${articleTimeout ? 'timeout' : ''}`}>
            <h2 className="major">{title}</h2>
            {children}
            <Link
              href="/"
              className="close"
              onClick={handleClose}>
              Close
            </Link>
          </article>
        </div>
        <Footer timeout={true} />
      </div>
      <div id="bg" />
    </div>
  </div>
);

export default Article;
