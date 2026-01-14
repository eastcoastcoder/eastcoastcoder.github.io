import Header from './Header';
import '../styles/main.scss';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    timeout: false,
    onOpenArticle: article => {
      console.log('Opening article:', article);
    },
  },
};

export const Hidden = {
  args: {
    timeout: true,
    onOpenArticle: article => {
      console.log('Opening article:', article);
    },
  },
};
