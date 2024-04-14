import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ modalImage, modalAlt, closeModal }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    closeModal();
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={modalImage} alt={modalAlt} onClick={handleClick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  modalAlt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
