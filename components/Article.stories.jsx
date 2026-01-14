import Article from './Article';
import '../styles/main.scss';

export default {
  title: 'Components/Article',
  component: Article,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Intro = {
  args: {
    articleTimeout: false,
    title: 'Intro',
    onCloseArticle: () => {
      console.log('Close article clicked');
    },
    children: (
      <p>
        I'm a Lead Associate Systems Engineer based in Myrtle Beach, South Carolina. I specialize in building web and
        mobile applications using React and React Native.
      </p>
    ),
  },
};

export const Work = {
  args: {
    articleTimeout: false,
    title: 'Work',
    onCloseArticle: () => {
      console.log('Close article clicked');
    },
    children: (
      <div className="w-grid">
        <div className="work-grid">
          <h2>2020 - Current</h2>
          <div className="work-grid-info">
            <h3>Company Name</h3>
            <h5>Lead Developer</h5>
            <ul>
              <li>Built scalable web applications</li>
              <li>Led team of developers</li>
              <li>Implemented CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
};

export const Inactive = {
  args: {
    articleTimeout: false,
    title: 'Contact',
    onCloseArticle: () => {
      console.log('Close article clicked');
    },
    children: <p>This article is not active (different id from article prop)</p>,
  },
};

export const WithTimeout = {
  args: {
    articleTimeout: true,
    title: 'With Timeout Animation',
    onCloseArticle: () => {
      console.log('Close article clicked');
    },
    children: <p>This article has the timeout class applied for animation.</p>,
  },
};
