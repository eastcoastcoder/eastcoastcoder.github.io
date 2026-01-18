import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function IndexPage() {
  return (
    <div className="body">
      <Head>
        <title>Ethan Richardson - Lead Associate Systems Engineer</title>
        <meta
          name="description"
          content="Lead Associate Systems Engineer based in Myrtle Beach, South Carolina"
        />
      </Head>
      <div>
        <div id="wrapper">
          <Header />
          <Footer timeout={false} />
        </div>
        <div id="bg" />
      </div>
    </div>
  );
}
