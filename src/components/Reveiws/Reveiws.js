import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reveiws.module.css';
import { Spiner } from 'components/Spiner/Spiner';

function Reveiws() {
  const param = useParams();
  const [reviews, setReviews] = useState([]);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    setSpiner(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${param.id}/reviews?api_key=09fddff29ca445d38e447ae99342142f`
    )
      .then(response => response.json())
      .then(data => {
        setReviews(
          data.results.map(({ author, content, updated_at, id }) => ({
            author,
            content,
            updated_at,
            id,
          }))
        );
      })
      .catch(error => console.log('shit happens', error))
      .finally(() => setSpiner(false));
  }, [param]);
  if (reviews.length === 0) return <p> Can not find ane information</p>;
  return (
    <>
      <ul>
        {reviews.map(({ author, content, updated_at, id }) => (
          <li key={id} className={css.reviews}>
            <h2 className={css.author}>Author: {author}</h2>
            <p className={css.content}>{content}</p>
            <p className={css.data}>Last update: {updated_at}</p>
          </li>
        ))}
      </ul>
      {spiner && <Spiner />}
    </>
  );
}
export default Reveiws;
