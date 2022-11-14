import { useState, useEffect, useRef } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { useSearchParams } from 'react-router-dom';
import css from './MoviesPage.module.css';
import { Spiner } from 'components/Spiner/Spiner';
import { Pagination } from 'components/Pagination/Pagination';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;
  const maxPage = useRef(1);

  const setCurrentPage = a => {
    setSearchParams({ page: currentPage + a, query });
  };

  const changeQuery = e => {
    e.preventDefault();
    const searchString = e.currentTarget.elements.query.value;
    let nextParams;
    if (searchString !== '') {
      nextParams = { page: 1, query: searchString };
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
      `https://api.themoviedb.org/3/search/movie?api_key=09fddff29ca445d38e447ae99342142f&query=${query}&page=${currentPage}`
    )
      .then(response => response.json())
      .then(data => {
        maxPage.current = data.total_pages;
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
  }, [query, currentPage]);

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
      {movies.length > 1 && (
        <Pagination
          max={maxPage.current}
          callback={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {spiner && <Spiner />}
    </div>
  );
}
export default MoviesPage;
