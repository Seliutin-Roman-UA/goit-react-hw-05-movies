import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { Suspense } from 'react';

export function MovieInfo({ movie }) {
  const location = useLocation();
  const prevLocation = location.state ?? '/movies';
 

  return (
    <>
      <button className={css.movieButon} type="button">
        <Link to={prevLocation} className={css.buttonCaption}>
          <RiArrowLeftSFill />
          Go back
        </Link>
      </button>
      <div className={css.movieCard}>
        <img
          className={css.movieImg}
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt=""
        />
        <div className={css.movieInfoWrap}>
          <p className={css.movieName}>{` ${movie?.title} (${movie?.date?.slice(
            0,
            4
          )})`}</p>
          <p className={css.movieCaption}>User score: {movie?.vote}</p>
          <p className={css.movieCaption}>Overview: </p>
          <p className={css.movieText}>{movie?.overview}</p>
          <p className={css.movieCaption}>Genres: </p>
          <p className={css.movieText}>
            {movie?.genres?.map(el => el.name).join(' ')}
          </p>
        </div>
      </div>
      <div className={css.addinfo}>
        Additional information
        <Link to="cast" className={css.addlink} state={prevLocation}>
          Cast
        </Link>
        <Link to="reveiws" className={css.addlink} state={prevLocation}>
          Reveiws
        </Link>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
