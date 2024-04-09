import React from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends React.Component {
  static propTypes = {
    searchWord: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.searchWord(this.state.keyword);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { keyword } = this.state;

    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
