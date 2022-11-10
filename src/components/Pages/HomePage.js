import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Spiner } from 'components/Spiner/Spiner';
import { useState, useEffect } from 'react';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [spiner, setSpiner] = useState(false);
  useEffect(() => {
    setSpiner(true);
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=09fddff29ca445d38e447ae99342142f'
    )
      .then(response => response.json())
      .then(data =>
        setMovies(
          data.results.map(
            ({ id, release_date: date, title, poster_path: poster }) => ({
              id,
              date,
              title,
              poster,
            })
          )
        )
      )
      .catch(error => console.log('shit happens', error))
      .finally(() => setSpiner(false));
  }, []);
  return (
    <div>
      <h1>Tranding today </h1>
      <MovieGallery movies={movies} />
      {spiner && <Spiner />}
    </div>
  );
}
export default HomePage;
