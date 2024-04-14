import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, enlargePhoto }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id + nanoid()}
            image={image}
            enlargePhoto={enlargePhoto}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  enlargePhoto: PropTypes.func.isRequired,
};

export default ImageGallery;
