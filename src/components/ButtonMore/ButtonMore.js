import React from 'react';
import css from './ButtonMore.module.css';
import PropTypes from 'prop-types';

export const ButtonLoadMore = ({ getLoadMore }) => {
  return (
    <div className={css.container}>
      <button type="button" className={css.button} onClick={getLoadMore}>
        Load more
      </button>
    </div>
  );
};

ButtonLoadMore.propTypes = {
  getLoadMore: PropTypes.func.isRequired,
};
