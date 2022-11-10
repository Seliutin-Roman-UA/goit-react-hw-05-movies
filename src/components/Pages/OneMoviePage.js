import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spiner } from 'components/Spiner/Spiner';

function OneMoviePage() {
  const id = useParams();
  const [movie, setMovie] = useState({});
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    setSpiner(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id.id}?api_key=09fddff29ca445d38e447ae99342142f`
    )
      .then(response => response.json())
      .then(data => {
        const {
          poster_path,
          title,
          overview,
          release_date: date,
          genres,
          vote_average: vote,
        } = data;

        setMovie({ poster_path, title, overview, date, genres, vote });
      })
      .catch(error => console.log('shit happens', error))
      .finally(() => setSpiner(false));
  }, [id]);
  //if (movie.title === undefined || movie.title === undefined) return null;
  return (
    <>
      <MovieInfo movie={movie} />
      {spiner && <Spiner />}
    </>
  );
}
export default OneMoviePage;
