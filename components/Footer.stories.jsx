import Footer from './Footer';
import '../styles/main.scss';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    timeout: false,
  },
};

export const Hidden = {
  args: {
    timeout: true,
  },
};
