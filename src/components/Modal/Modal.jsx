import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends React.Component {
  static propTypes = {
    modalImage: PropTypes.string.isRequired,
    modalAlt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick = () => {
    this.props.closeModal();
  };

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { modalImage, modalAlt } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={modalImage} alt={modalAlt} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Modal;
