import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import { per_page, queryImages } from '../pixabay';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [queryWord, setQueryWord] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [changeTrigger, setChangeTrigger] = useState(false);

  useEffect(() => {
    if (changeTrigger && queryWord !== '') {
      fetchImages();
    }
    // eslint-disable-next-line
  }, [queryWord, currentPage, changeTrigger]);

  const fetchImages = async () => {
    console.log(1);
    try {
      const data = await queryImages(currentPage, queryWord);
      const { hits, totalHits } = data;

      setTotalPages(Math.ceil(totalHits / per_page));
      setIsLoading(false);

      setImages(prevImages => [...prevImages, ...hits]);
      setChangeTrigger(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setChangeTrigger(false);
    }
  };

  const searchWord = keyword => {
    if (queryWord !== keyword) {
      setIsLoading(true);
      setImages([]);
      setCurrentPage(1);
      setTotalPages(0);
      setChangeTrigger(true);
    } else {
      setIsLoading(false);
    }

    setQueryWord(keyword);
  };

  const loadMore = nextPage => {
    setIsLoading(true);
    setCurrentPage(nextPage);
    setChangeTrigger(true);
  };

  const enlargePhoto = (largeImageURL, alt) => {
    setModalActive(true);
    setModalImage(largeImageURL);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalActive(false);
    setModalImage('');
    setModalAlt('');
  };

  return (
    <div className={css.app}>
      <Searchbar searchWord={searchWord} />

      <ImageGallery images={images} enlargePhoto={enlargePhoto} />

      {isLoading && <Loader />}

      <div className={css.buttonContainer}>
        {totalPages > currentPage && (
          <Button page={currentPage} loadMore={loadMore} />
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
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
