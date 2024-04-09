import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    enlargePhoto: PropTypes.func.isRequired,
  };

  handleClick = (largeImageURL, alt) => {
    this.props.enlargePhoto(largeImageURL, alt);
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={() => this.handleClick(largeImageURL, tags)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
