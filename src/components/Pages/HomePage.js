import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Pagination } from 'components/Pagination/Pagination';
import { Spiner } from 'components/Spiner/Spiner';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;
  const maxPage = useRef(1);


  const setCurrentPage = a => {
    setSearchParams({ page: currentPage + a });
  };

  useEffect(() => {
    setSpiner(true);
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=09fddff29ca445d38e447ae99342142f&page=${currentPage}`
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
  }, [currentPage]);

  return (
    <div>
      <h1>Tranding today </h1>
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
export default HomePage;
