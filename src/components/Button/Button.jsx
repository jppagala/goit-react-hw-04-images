import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

class Button extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    loadMore: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { page, loadMore } = this.props;
    loadMore(page + 1);
  };

  render() {
    return (
      <button type="button" className={css.button} onClick={this.handleClick}>
        Load More
      </button>
    );
  }
}

export default Button;
