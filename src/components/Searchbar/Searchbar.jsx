import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ searchWord }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    searchWord(keyword);
  };

  const handleChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <FaSearch />
        </button>

        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="keyword"
          value={keyword}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  searchWord: PropTypes.func.isRequired,
};

export default Searchbar;
