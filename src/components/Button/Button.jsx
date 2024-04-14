import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ page, loadMore }) => {
  const handleClick = () => {
    loadMore(page + 1);
  };

  return (
    <button type="button" className={css.button} onClick={handleClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  page: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Button;
