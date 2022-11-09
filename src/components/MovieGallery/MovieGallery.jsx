import { Link, useLocation } from 'react-router-dom';
import css from './MovieGallery.module.css';

export function MovieGallery({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.gallery}>
      {movies.map(({ id, title, poster, date }) => (
        <li key={id} className={css.movieCard}>
          <Link
            to={`/movies/${id}`}
            state={location}
            className={css.movieLink}
          >
            <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w185${poster}`}
              alt=""
            />
            <p className={css.movieCaption}>{title}</p>
            <p className={css.movieCaption}>{date?.slice(0, 4)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
