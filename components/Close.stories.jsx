import Close from './Close';
import '../styles/main.scss';

export default {
  title: 'Components/Close',
  component: Close,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onCloseArticle: { action: 'close clicked' },
  },
};

export const Default = {
  args: {
    onCloseArticle: () => {
      console.log('Close button clicked');
    },
  },
};

export const Interactive = {
  args: {
    onCloseArticle: () => {
      alert('Close button clicked! Press Escape, Enter, or Space to trigger.');
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'This close button can be triggered by clicking, pressing Enter, or pressing Space for accessibility.',
      },
    },
  },
};
