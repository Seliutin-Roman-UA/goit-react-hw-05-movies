import { useState, useEffect } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
import { Spiner } from 'components/Spiner/Spiner';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const changeQuery = e => {
    e.preventDefault();
    const searchString = e.currentTarget.elements.query.value;
    let nextParams;
    if (searchString !== '') {
      nextParams = { query: searchString };
    } else {
      setMovies([]);
      nextParams = {};
    }
    setSearchParams(nextParams);
    e.currentTarget.elements.query.value = '';
  };

  useEffect(() => {
    if (!query) return;
    setSpiner(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=09fddff29ca445d38e447ae99342142f&query=${query}`
    )
      .then(response => response.json())
      .then(data => {
        setMovies(
          data.results.map(
            ({ id, release_date: date, title, poster_path: poster }) => ({
              id,
              date,
              title,
              poster,
            })
          )
        );
      })
      .catch(error => console.log('shit happens', error))
      .finally(() => setSpiner(false));
  }, [query]);

  return (
    <div>
      <form onSubmit={changeQuery} className={css.searchForm}>
        <input type="text" name="query" />
        <button type="Submit" className={css.formButton}>
          Search
        </button>
      </form>
      {!query ? (
        <p>Enter the search string</p>
      ) : (
        !movies.length && <p>Search result is empty</p>
      )}

      <MovieGallery movies={movies} />
      {spiner && <Spiner />}
    </div>
  );
}
export default MoviesPage;
