import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

class ImageGallery extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    enlargePhoto: PropTypes.func.isRequired,
  };

  render() {
    const { images, enlargePhoto } = this.props;

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
  }
}

export default ImageGallery;
