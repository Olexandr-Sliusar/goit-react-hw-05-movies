import { BsSearch } from 'react-icons/bs';
import css from './SearchMovieForm.module.css';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const SearchMovieForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleRequestChange = e => {
    setText(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      toast.error('Error! Incorrect query. Please another query.');
      return;
    }
    onSubmit(e.target.query.value);
    e.target.reset();
    setText('');
  };

  return (
    <div className={css.formContainer}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          name="query"
          value={text}
          onChange={handleRequestChange}
        />
        <button
          type="submit"
          className={css.button}
          disabled={!text && 'disabled'}
        >
          <BsSearch size="1em" />
        </button>
      </form>
      <Toaster />
    </div>
  );
};
