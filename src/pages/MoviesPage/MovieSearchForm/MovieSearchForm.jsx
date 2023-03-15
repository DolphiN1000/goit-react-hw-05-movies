import { memo } from 'react';
import useForm from 'shared/hoks/useForm';
import styles from './movieSearchForm.module.scss';
import PropTypes from 'prop-types';


const MovieSearchForm = ({initialState, onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const{search} = state;
  
    return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Search movie</label>
        <input
          value={search}
          onChange={handleChange}
          name="search"
          placeholder="Search movie"
          required
        />
        <button type="submit">Search</button>
      </div>
    </form>
    </>
  );
};

export default memo(MovieSearchForm);

MovieSearchForm.defaultProps = {
  initialState: {
    search: ''
  }
}

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

