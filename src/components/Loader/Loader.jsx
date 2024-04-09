import React from 'react';
import css from './Loader.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    return (
      <div className={css.loader}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#3f51b5"
        />
      </div>
    );
  }
}

export default Loader;
