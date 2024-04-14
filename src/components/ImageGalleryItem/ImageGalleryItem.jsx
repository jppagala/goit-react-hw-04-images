import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, enlargePhoto }) => {
  const handleClick = (largeImageURL, alt) => {
    enlargePhoto(largeImageURL, alt);
  };

  const { webformatURL, largeImageURL, tags } = image;

  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => handleClick(largeImageURL, tags)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  enlargePhoto: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
