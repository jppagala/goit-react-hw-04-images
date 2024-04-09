import React from 'react';
import css from './App.module.css';
import { per_page, queryImages } from '../pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      queryWord: '',
      currentPage: 1,
      totalPages: 0,
      isLoading: false,
      isError: false,
      modalActive: false,
      modalImage: '',
      modalAlt: '',
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.queryWord !== this.state.queryWord ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { queryWord, currentPage } = this.state;

    try {
      const data = await queryImages(currentPage, queryWord);
      const { hits, totalHits } = data;

      this.setState({
        totalPages: Math.ceil(totalHits / per_page),
        isLoading: false,
      });
      this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  searchWord = keyword => {
    this.setState(prevState =>
      prevState.queryWord !== keyword
        ? { isLoading: true, images: [], currentPage: 1, totalPages: 0 }
        : { isLoading: false }
    );
    this.setState({ queryWord: keyword });
  };

  loadMore = nextPage => {
    this.setState({ isLoading: true, currentPage: nextPage });
  };

  enlargePhoto = (largeImageURL, alt) => {
    this.setState({
      modalActive: true,
      modalImage: largeImageURL,
      modalAlt: alt,
    });
  };

  closeModal = () => {
    this.setState({ modalActive: false, modalImage: '', modalAlt: '' });
  };

  render() {
    const {
      images,
      isLoading,
      currentPage,
      totalPages,
      modalActive,
      modalImage,
      modalAlt,
    } = this.state;

    return (
      <div className={css.app}>
        <Searchbar searchWord={this.searchWord} />

        <ImageGallery images={images} enlargePhoto={this.enlargePhoto} />

        {isLoading && <Loader />}

        <div className={css.buttonContainer}>
          {totalPages > currentPage && (
            <Button page={currentPage} loadMore={this.loadMore} />
          )}

          {currentPage === totalPages && (
            <p className={css.endNote}>
              You reached the end of the gallery, no more images to load.
            </p>
          )}
        </div>

        {modalActive && (
          <Modal
            modalImage={modalImage}
            modalAlt={modalAlt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
