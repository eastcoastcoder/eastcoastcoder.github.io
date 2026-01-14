const Close = ({ onCloseArticle }) => {
  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onCloseArticle();
    }
  };

  return (
    <div
      className="close"
      onClick={onCloseArticle}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label="Close article"
    />
  );
};

export default Close;
