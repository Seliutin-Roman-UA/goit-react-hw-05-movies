import { useState, useEffect } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useLocation, useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
 

  const changeQuery = e => {
    e.preventDefault();
    const searchString = e.currentTarget.elements.query.value;
    const nextParams = searchString !== '' ? { query: searchString } : {};
    setSearchParams(nextParams);
    e.currentTarget.elements.query.value = '';
  };

  useEffect(() => {
    if (!query) return;
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
      .catch(error => console.log('shit happens', error));
  }, [query]);
  if (query === '') return <p>Enter the search string</p>;
  return (
    <div>
      <form onSubmit={changeQuery} className={css.searchForm}>
        <input type="text" name="query" />
        <button type="Submit" className={css.formButton}>
          Search
        </button>
      </form>
      {!movies.length && <p>Search result is empty</p>}
      <MovieGallery movies={movies} />
    </div>
  );
}
