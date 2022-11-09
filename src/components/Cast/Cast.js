import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export function Cast() {
  const nofoto =
    'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg';
  const param = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.id}/credits?api_key=09fddff29ca445d38e447ae99342142f`
    )
      .then(response => response.json())
      .then(data => {
        setActors(
          data.cast.map(({ character, name, profile_path, cast_id }) => ({
            character,
            name,
            profile_path,
            cast_id,
          }))
        );
      })
      .catch(error => console.log('shit happens', error));
  }, [param]);

  if (actors.length === 0) return <p> Can not find ane information</p>;
  return (
    <ul className={css.actorGallery}>
      {actors.map(({ character, name, profile_path, cast_id }) => (
        <li key={cast_id} className={css.actorCard}>
          <img
            className={css.actorImg}
            src={
              profile_path !== null
                ? `https://image.tmdb.org/t/p/w185${profile_path}`
                : nofoto
            }
            alt=""
          />
          <p className={css.actorCaption}>Name: {name}</p>
          <p className={css.actorCaption}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
